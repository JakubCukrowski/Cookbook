import React, { useState, useEffect } from "react";
import {
  faCamera,
  faPlusCircle,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert, FormGroup, Form, Spinner, Button } from "react-bootstrap";
import { FakeSpinnerContainer } from "../../../assets/styles/Containers";

export const HandleImage = ({
  updateImage,
  updateNewRecipeErrors,
  details,
  errors,
  imagePreview,
  updateImagePreview,
}) => {
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  const [imageTypeError, setImageTypeError] = useState(false);

  const imageTypes = [
    "image/apng",
    "image/avif",
    "image/gif",
    "image/jpeg",
    "image/png",
    "image/svg+xml",
    "image/webp",
  ];

  useEffect(() => {
    if (isSpinnerVisible) {
      const timeout = setTimeout(() => {
        setIsSpinnerVisible(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [isSpinnerVisible]);

  const setImageErrorToFalse = () => {
    updateNewRecipeErrors((prev) => {
      return {
        ...prev,
        imageError: false,
      };
    });
  };

  //handle image on drop/add
  const updateRecipeImage = async (file) => {
    if (imageTypes.includes(file.type)) {
      setIsSpinnerVisible(true);
      const fr = new FileReader();
      fr.addEventListener("load", () => {
        const res = fr.result;
        updateImagePreview(res);
      });
      fr.readAsDataURL(file);
      updateImage(file);
      setImageTypeError(false);
      setImageErrorToFalse();
    } else {
      setImageTypeError(true);
    }
  };

  //drop image
  const handleOnDrop = async (ev) => {
    ev.preventDefault();
    const file = ev.dataTransfer.items[0].getAsFile();
    if (file) {
      setImageTypeError(false);
      setImageErrorToFalse();
      updateRecipeImage(file);
    } else {
      //match src of dropped file
      const regex = /src="?([^"\s]+)"?\s*/;
      await fetch(regex.exec(ev.dataTransfer.getData("text/html"))[1])
        .then((res) => {
          return res.blob();
        })
        .then((blob) => {
          const file = new File([blob], "image", { type: blob.type });
          updateRecipeImage(file);
          setImageTypeError(false);
          setImageErrorToFalse();
        })
        .catch(() => {
          setImageTypeError(true);
          alert("CORS restriced");
        });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  //upload image on change
  const onImageChange = (e) => {
    updateRecipeImage(e.target.files[0]);
  };

  return (
    <>
      {details.image === "" && errors.imageError && !imageTypeError ? (
        <Alert variant="danger">Musisz dodać zdjęcie</Alert>
      ) : null}
      {details.image !== "" && !imageTypeError && !isSpinnerVisible ? (
        <Alert variant="success">Plik jest poprawny</Alert>
      ) : null}
      {imageTypeError ? (
        <Alert variant="danger">Plik nie jest poprawny</Alert>
      ) : null}
      <FormGroup
        className={`mb-3 form_group_sfg ${
          imageTypeError || errors.imageError ? "form_group_error" : null
        }`}
        onDrop={details.image === "" ? (e) => handleOnDrop(e) : null}
        onDragOver={handleDragOver}
      >
        {details.image === "" ? (
          <>
            <Form.Label
              style={{ cursor: "pointer", lineHeight: 4 }}
              htmlFor="recipe_photo"
            >
              Dodaj zdjęcie <br />{" "}
              <FontAwesomeIcon icon={faPlusCircle} size="3x" /> <br /> lub upuść
              plik
            </Form.Label>
            <div>
              <FontAwesomeIcon icon={faCamera} size="6x" />
            </div>
            <Form.Control
              style={{ display: "none" }}
              type="file"
              id="recipe_photo"
              onChange={onImageChange}
              accept="image/*"
            />
          </>
        ) : (
          <>
            <div style={{ width: 200, height: 200 }}>
              {isSpinnerVisible ? (
                <FakeSpinnerContainer>
                  <Spinner />
                </FakeSpinnerContainer>
              ) : (
                <>
                  <p>Podgląd</p>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                      aspectRatio: "auto",
                    }}
                    src={
                      window.location.pathname.includes("edit") && !imagePreview
                        ? details.image
                        : imagePreview
                    }
                  />
                </>
              )}
            </div>
            {details.image !== "" && !imageTypeError && !isSpinnerVisible ? (
              <Button
                style={{ marginTop: 30 }}
                variant="dark"
                onClick={() => {
                  updateImage("");
                }}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </Button>
            ) : null}
          </>
        )}
      </FormGroup>
    </>
  );
};
