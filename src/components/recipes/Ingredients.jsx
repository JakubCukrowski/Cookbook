import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { DeleteIngredientButton } from "./DeleteIngredientButton";

export const Ingredients = ({
  details,
  handleIngredients,
  handleIngredientsArray,
}) => {
  const handleInputChange = (e, index) => {
    const newIngredientsArray = details.ingredients;
    newIngredientsArray[index] = e.target.value;
    handleIngredientsArray(newIngredientsArray);
  };

  const handleDeleteInput = (index, array) => {
    const filtered = array.filter((_, i) => i !== index);
    handleIngredientsArray(filtered);
  };

  return (
    <>
      <p>Dodaj składniki</p>
      {details.ingredients.map((_, index) => (
        <FormGroup className="mb-3" key={index}>
          <Form.Label htmlFor={`ingredient${index + 1}`}>Składnik</Form.Label>
          <div style={{ position: "relative" }}>
            <Form.Control
              value={details.ingredients[index]}
              id={`ingredient${index + 1}`}
              onChange={(e) => handleInputChange(e, index)}
            />
            {details.ingredients.length > 1 ? (
              <DeleteIngredientButton
                onClick={() => handleDeleteInput(index, details.ingredients)}
              >
                <FontAwesomeIcon icon={faTrashCan} color="rgba(0, 0, 0, 0.4)" />
              </DeleteIngredientButton>
            ) : null}
          </div>
        </FormGroup>
      ))}
      <Button style={{ marginTop: 20 }} onClick={() => handleIngredients()}>
        <FontAwesomeIcon icon={faPlus} /> Dodaj kolejny
      </Button>
    </>
  );
};
