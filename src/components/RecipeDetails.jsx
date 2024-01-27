import React, { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";

export const RecipeDetails = ({
  details,
  updateName,
  prepTime,
  diffLevel,
  desc,
}) => {
  return (
    <>
      <div className="recipe-details">
        <FormGroup className="mb-3">
          <Form.Label htmlFor="recipe_name">Nazwa przepisu</Form.Label>
          <Form.Control
            name="recipeName"
            value={details.recipeName}
            type="text"
            id="recipe_name"
            onChange={(e) => updateName(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Form.Label htmlFor="recipe_photo">Dodaj zdjęcie</Form.Label>
          <Form.Control type="file" id="recipe_photo" />
        </FormGroup>
        <FormGroup className="mb-3">
          <Form.Label htmlFor="preparation_time">Czas przygotowania</Form.Label>
          <Form.Select
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
          <Form.Label htmlFor="recipe_description">
            Kilka słów o przepisie (opcjonalnie)
          </Form.Label>
          <Form.Control
          style={{resize: "none"}}
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
