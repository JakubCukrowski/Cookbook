import { faCamera, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

export const RecipeDetails = ({
  details,
  updateName,
  prepTime,
  diffLevel,
  desc,
  errors,
  updateImage,
  updateCategory,
}) => {
  const handleOnDrop = (ev) => {
    ev.preventDefault();

    const file = ev.dataTransfer.items[0].getAsFile();
    updateImage(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  //upload image on change
  const onImageChange = (e) => {
    updateImage(e.target.files[0])
  };

  return (
    <>
      <div className="recipe-details">
        <FormGroup className="mb-3">
          <Form.Label htmlFor="recipe_name">Nazwa przepisu</Form.Label>
          <Form.Control
            isInvalid={errors.nameError && details.name.length < 8}
            name="recipeName"
            autoComplete="off"
            value={details.name}
            type="text"
            id="recipe_name"
            onChange={(e) => updateName(e.target.value)}
          />
        </FormGroup>
        {errors.nameError &&
        details.name.length < 8 &&
        details.name.length > 0 ? (
          <Alert variant="danger">Nazwa przepisu jest za krótka</Alert>
        ) : null}
        {errors.nameError && details.name.length === 0 ? (
          <Alert variant="danger">Musisz podać nazwę</Alert>
        ) : null}
        <FormGroup
          className="mb-3"
          onDrop={details.image === "" ? (e) => handleOnDrop(e) : null}
          onDragOver={handleDragOver}
          style={{
            backgroundColor: "white",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 0",
            cursor: "pointer",
            borderRadius: 8,
            boxShadow: "0 0 4px rgb(0, 0, 0)",
          }}
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
              <p>Dodano plik: {details.image.name}</p>
              <Button
                onClick={() => {
                  updateImage("");
                  console.log("done");
                }}
              >
                Zmień
              </Button>
            </>
          )}
        </FormGroup>
        {details.image === "" && errors.imageError ? (
          <Alert variant="danger">Musisz dodać zdjęcie</Alert>
        ) : null}
        <FormGroup className="mb-3">
          <Form.Label htmlFor="preparation_time">Czas przygotowania</Form.Label>
          <Form.Select
            value={details.preparationTime}
            name="preparationTime"
            id="preparation_time"
            onChange={(e) => prepTime(e.target.value)}
          >
            <option value="15">15 minut</option>
            <option value="30">30 minut</option>
            <option value="60">60 minut</option>
            <option value="90">90 minut</option>
            <option value="more">90 i więcej</option>
          </Form.Select>
        </FormGroup>
        <FormGroup className="mb-3">
          <Form.Label htmlFor="difficulty_level">Stopień trudności</Form.Label>
          <Form.Select
            value={details.difficulty}
            name="difficulty"
            id="difficulty_level"
            onChange={(e) => diffLevel(e.target.value)}
          >
            <option value="easy">Łatwy</option>
            <option value="medium">Średni</option>
            <option value="advanced">Zaawansowany</option>
          </Form.Select>
        </FormGroup>
        <FormGroup className="mb-3">
          <Form.Label htmlFor="recipe_category">Wybierz kategorię</Form.Label>
          <Form.Select
            isInvalid={
              errors.categoryError &&
              (details.category === "" || details.category === "default")
            }
            value={details.category}
            name="category"
            id="recipe_category"
            onChange={(e) => updateCategory(e.target.value)}
          >
            <option value="default">wybierz</option>
            <option value="Dania główne">Dania główne</option>
            <option value="Zupy">Zupy</option>
            <option value="Śniadania">Śniadania</option>
            <option value="Kolacje">Kolacje</option>
            <option value="Przekąski">Przekąski</option>
            <option value="Desery">Desery</option>
            <option value="Napoje">Napoje</option>
          </Form.Select>
        </FormGroup>
        {errors.categoryError &&
        (details.category === "" || details.category === "default") ? (
          <Alert variant="danger">Musisz wybrać kategorię</Alert>
        ) : null}
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
            onChange={(e) => desc(e.target.value)}
          />
        </FormGroup>
      </div>
    </>
  );
};
