import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Form, FormGroup } from "react-bootstrap";

export const Ingredients = ({
  details,
  handleIngredients,
  handleIngredientsArray,
}) => {

    const handleInputChange = (e, index) => {
        const newIngredientsArray = details.ingredients;
        newIngredientsArray[index] = e.target.value;
        handleIngredientsArray(newIngredientsArray)
    }

  return (
    <>
      <p>Dodaj składniki</p>
      {details.ingredients.map((_, index) => (
        <FormGroup className="mb-3" key={index}>
          <Form.Label htmlFor={`ingredient${index + 1}`}>
            Składnik
          </Form.Label>
          <Form.Control
            value={details.ingredients[index]}
            id={`ingredient${index + 1}`}
            onChange={(e) => handleInputChange(e, index)}
          />
        </FormGroup>
      ))}
      <Button style={{marginTop: 20}} onClick={() => handleIngredients()}>
        <FontAwesomeIcon icon={faPlus} /> Dodaj kolejny
      </Button>
    </>
  );
};
