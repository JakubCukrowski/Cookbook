import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Alert, Button, Form, FormGroup } from "react-bootstrap";
import { DeleteIngredientButton } from "./DeleteIngredientButton";

export const Ingredients = ({
  details,
  handleIngredients,
  handleIngredientsArray,
  errors,
  handleIngredientsErrors
}) => {
  // changes the value of ingredients array element, also clears the error 
  const handleInputChange = (e, index) => {
    const newIngredientsArray = details.ingredients;
    newIngredientsArray[index] = e.target.value;
    handleIngredientsArray(newIngredientsArray);

    const newErrorsArray = errors.ingredientsErrors;
    newErrorsArray[index] = false
    handleIngredientsErrors(newErrorsArray)
  };

  //deletes input element
  const handleDeleteInput = (index, array) => {
    const filtered = array.filter((_, i) => i !== index);
    handleIngredientsArray(filtered);
  };

  //deletes error from the errors array
  const clearInputError = (index, array) => {
    const filtered = array.filter((_, i) => i !== index);
    handleIngredientsErrors(filtered)
  }

  const handleDeleteButton = (index, firstArray, secondArray) => {
    handleDeleteInput(index, firstArray)
    clearInputError(index, secondArray)
  }

  return (
    <>
      <p>Dodaj składniki</p>
      {details.ingredients.map((_, index) => (
        <FormGroup className="mb-3" key={index}>
          <Form.Label htmlFor={`ingredient${index + 1}`}>Składnik</Form.Label>
          {errors.ingredientsErrors[index] &&
          details.ingredients[index].length === 0 ? (
            <Alert variant="danger">Nie może być puste</Alert>
          ) : null}
          <div style={{ position: "relative", marginBottom: 10 }}>
            <Form.Control
              value={details.ingredients[index]}
              isInvalid={errors.ingredientsErrors[index] &&
          details.ingredients[index].length === 0}
              id={`ingredient${index + 1}`}
              onChange={(e) => handleInputChange(e, index)}
            />
            {details.ingredients.length > 1 ? (
              <DeleteIngredientButton type="button"
                onClick={() => handleDeleteButton(index, details.ingredients, errors.ingredientsErrors)}
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
