import {
  faCamera,
  faPlusCircle,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Spinner } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { FormCategory } from "../form_elements/FormCategory";
import { FormDifficulty } from "../form_elements/FormDifficulty";
import { FormPrepTime } from "../form_elements/FormPrepTime";

export const RecipeDetails = ({
  details,
  errors,
  updateImage,
  updateRecipeDetails,
  gibberishCheck,
  updateNewRecipeErrors,
}) => {
  const [imageTypeError, setImageTypeError] = useState(false);
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const imageTypes = [
    "image/apng",
    "image/avif",
    "image/gif",
    "image/jpeg",
    "image/png",
    "image/svg+xml",
    "image/webp",
  ];

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
        setImagePreview(res);
      });
      fr.readAsDataURL(file);
      updateImage(file);
      setImageTypeError(false);
      setImageErrorToFalse();
    } else {
      setImageTypeError(true);
    }
  };

  useEffect(() => {
    if (isSpinnerVisible) {
      const timeout = setTimeout(() => {
        setIsSpinnerVisible(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isSpinnerVisible]);

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
        .then(async (res) => {
          return res.blob();
        })
        .then((blob) => {
          const file = new File([blob], "image", { type: blob.type });
          console.log(file);
          updateRecipeImage(file);
          setImageTypeError(false);
          setImageErrorToFalse();
        })
        .catch(() => {
          setImageTypeError(true);
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

  const options = [
    "wybierz",
    "Dania główne",
    "Zupy",
    "Śniadania",
    "Kolacje",
    "Przekąski",
    "Desery",
    "Napoje",
  ];

  const prepTimes = ["15 minut", "30 minut", "60 minut", "90 minut"];

  return (
    <>
      <div className="recipe-details">
        <FormGroup className="mb-3">
          <Form.Label htmlFor="recipe_name">Nazwa przepisu</Form.Label>
          {errors.nameError &&
          details.name.length < 8 &&
          details.name.length > 0 &&
          !details.name.match(gibberishCheck) ? (
            <Alert variant="danger">Nazwa przepisu jest za krótka</Alert>
          ) : null}
          {errors.nameError && details.name.match(gibberishCheck) ? (
            <Alert variant="danger">Próbujesz dodać coś co nie ma sensu</Alert>
          ) : null}
          {errors.nameError && details.name.length === 0 ? (
            <Alert variant="danger">Musisz podać nazwę</Alert>
          ) : null}
          <Form.Control
            isInvalid={errors.nameError && details.name.length < 8}
            name="recipeName"
            autoComplete="off"
            value={details.name}
            type="text"
            id="recipe_name"
            onChange={(e) => updateRecipeDetails(e)}
          />
        </FormGroup>
        {details.image === "" && errors.imageError && !imageTypeError ? (
          <Alert variant="danger">Musisz dodać zdjęcie</Alert>
        ) : null}
        {details.image !== "" && !imageTypeError ? (
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
                <FontAwesomeIcon icon={faPlusCircle} size="3x" /> <br /> lub
                upuść plik
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
                  <Spinner />
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
              <Button
                style={{ marginTop: 30 }}
                variant="dark"
                onClick={() => {
                  updateImage("");
                }}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </Button>
            </>
          )}
        </FormGroup>
        <FormGroup className="mb-3">
          <Form.Label htmlFor="preparation_time">Czas przygotowania</Form.Label>
          <FormPrepTime
            value={details.preparationTime}
            name="preparationTime"
            id="preparation_time"
            onChange={(e) => updateRecipeDetails(e)}
            array={prepTimes}
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Form.Label htmlFor="difficulty_level">Stopień trudności</Form.Label>
          <FormDifficulty
            value={details.difficulty}
            name="difficulty"
            id="difficulty_level"
            onChange={(e) => updateRecipeDetails(e)}
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Form.Label htmlFor="recipe_category">Wybierz kategorię</Form.Label>
          {errors.categoryError &&
          (details.category === "" || details.category === "wybierz") ? (
            <Alert variant="danger">Musisz wybrać kategorię</Alert>
          ) : null}
          <FormCategory
            isInvalid={
              errors.categoryError &&
              (details.category === "" || details.category === "wybierz")
            }
            value={details.category}
            name="category"
            id="recipe_category"
            onChange={(e) => updateRecipeDetails(e)}
            array={options}
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Form.Label htmlFor="recipe_description">
            Kilka słów o przepisie (opcjonalnie)
          </Form.Label>
          <Form.Control
            style={{ resize: "none" }}
            as="textarea"
            rows={4}
            name="description"
            id="recipe_description"
            value={details.description}
            onChange={(e) => updateRecipeDetails(e)}
          />
        </FormGroup>
      </div>
    </>
  );
};
