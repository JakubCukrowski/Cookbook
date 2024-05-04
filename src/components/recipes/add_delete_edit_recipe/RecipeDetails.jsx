import React from "react";
import { Form, FormGroup } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { FormCategory } from "../../FormCategory";
import { FormDifficulty } from "../../FormDifficulty";
import { FormPrepTime } from "../../FormPrepTime";
import { HandleImage } from "./HandleImage";

export const RecipeDetails = ({
  details,
  errors,
  updateImage,
  updateRecipeDetails,
  gibberishCheck,
  updateNewRecipeErrors,
  imagePreview,
  updateImagePreview,
}) => {
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
        <HandleImage
          updateImage={updateImage}
          updateNewRecipeErrors={updateNewRecipeErrors}
          details={details}
          errors={errors}
          imagePreview={imagePreview}
          updateImagePreview={updateImagePreview}
        />
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
