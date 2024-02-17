import { faCamera, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { FormCategory } from "../form_elements/FormCategory";
import { FormDifficulty } from "../form_elements/FormDifficulty";
import { FormPrepTime } from "../form_elements/FormPrepTime";
import { getDoc, doc } from "firebase/firestore";
import { UserAuth } from "../../../context/AuthContext";
import { db } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";

//podzielic na mniejsze komponenty
export const RecipeDetails = ({
  details,
  errors,
  updateImage,
  updateRecipeDetails,
  gibberishCheck,
  isImage,
  checkIfImage,
}) => {
  const { user } = UserAuth();

  useEffect(() => {
    const getTempRecipe = async () => {
      const tempRecipeRef = doc(db, "temp", `temp_${user.uid}`);
      const docSnap = await getDoc(tempRecipeRef);

      console.log(docSnap.data());
    };

    getTempRecipe();
  }, []);

  const getRecipeRef = (file) => ref(storage, `temporary/temp_${user.uid}/${file}`)

  const handleOnDrop = async (ev) => {
    ev.preventDefault();

    const file = ev.dataTransfer.items[0].getAsFile();

    const recipeRef = getRecipeRef(file.name)
    await uploadBytes(recipeRef, file).then(async () => {
      await getDownloadURL(recipeRef).then((url) => {
        updateImage(url)
      });
    })

  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  //upload image on change
  const onImageChange = (e) => {
    // const recipeRef = getRecipeRef()
    updateImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const imageTypes = [
    "/image/apng",
    "image/avif",
    "image/gif",
    "image/jpeg",
    "image/png",
    "image/svg+xml",
    "image/webp",
  ];

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

  useEffect(() => {
    if (!imageTypes.includes(details.image.type)) {
      checkIfImage(false);
    } else {
      checkIfImage(true);
    }
  }, [details.image]);

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
        {details.image === "" && errors.imageError ? (
          <Alert variant="danger">Musisz dodać zdjęcie</Alert>
        ) : null}
        {imageTypes.includes(details.image.type) && isImage ? (
          <Alert variant="success">Plik jest poprawny</Alert>
        ) : null}
        {!imageTypes.includes(details.image.type) &&
        details.image.type !== undefined &&
        !isImage ? (
          <Alert variant="danger">
            Sprawdź czy plik na pewno jest zdjęciem
          </Alert>
        ) : null}
        <FormGroup
          className={`mb-3 form_group_sfg ${
            errors.imageError && details.image === ""
              ? "form_group_error"
              : null
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
              />
            </>
          ) : (
            <>
              {details.image instanceof File ? (
                <p>Dodano plik: {details.image.name}</p>
              ) : (
                <img
                  style={{ width: 300, height: 300, objectFit: "fill" }}
                  src={details.image}
                />
              )}
              <Button
                style={{ marginTop: 30 }}
                variant="dark"
                onClick={() => {
                  updateImage("");
                }}
              >
                Zmień
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
