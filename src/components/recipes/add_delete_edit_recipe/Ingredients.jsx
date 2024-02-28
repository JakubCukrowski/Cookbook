import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Alert, Button, Form, FormGroup } from "react-bootstrap";
import { DeleteButton } from "../RecipesStyles";

export const Ingredients = ({
  details,
  handleAddIngredients,
  handleIngredientsArray,
  errors,
  handleIngredientsErrors,
  gibberishCheck,
}) => {
  // changes the value of ingredients array element, also clears the error
  const handleInputChange = (e, index) => {
    const newIngredientsArray = [...details.ingredients];
    newIngredientsArray[index] = e.target.value;
    handleIngredientsArray(newIngredientsArray);

    const newErrorsArray = errors.ingredientsErrors;
    newErrorsArray[index] = false;
    handleIngredientsErrors(newErrorsArray);
  };

  //deletes input element
  const handleDeleteInput = (index, array) => {
    const filtered = array.filter((_, i) => i !== index);
    handleIngredientsArray(filtered);
  };

  //deletes error from the errors array
  const clearInputError = (index, array) => {
    const filtered = array.filter((_, i) => i !== index);
    handleIngredientsErrors(filtered);
  };

  const handleDeleteButton = (index, firstArray, secondArray) => {
    handleDeleteInput(index, firstArray);
    clearInputError(index, secondArray);
  };

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
          {errors.ingredientsErrors[index] &&
          details.ingredients[index].length > 0 &&
          details.ingredients[index].length < 3 ? (
            <Alert variant="danger">
              Składnik musi mieć przynajmniej 3 znaki
            </Alert>
          ) : null}
          {errors.ingredientsErrors[index] &&
          details.ingredients[index].length >= 3 &&
          details.ingredients[index].match(gibberishCheck) ? (
            <Alert variant="danger">Próbujesz dodać coś co nie ma sensu</Alert>
          ) : null}
          <div style={{ marginBottom: 10, display: "flex" }}>
            <Form.Control
              value={details.ingredients[index]}
              isInvalid={
                (errors.ingredientsErrors[index] &&
                  details.ingredients[index].length === 0) ||
                (errors.ingredientsErrors[index] &&
                  details.ingredients[index].length > 0 &&
                  details.ingredients[index].length < 3) ||
                (errors.ingredientsErrors[index] &&
                  details.ingredients[index].length >= 3 &&
                  details.ingredients[index].match(gibberishCheck))
              }
              id={`ingredient${index + 1}`}
              onChange={(e) => handleInputChange(e, index)}
            />
            {details.ingredients.length > 1 ? (
              <DeleteButton
                type="button"
                onClick={() =>
                  handleDeleteButton(
                    index,
                    details.ingredients,
                    errors.ingredientsErrors
                  )
                }
              >
                <FontAwesomeIcon icon={faTrashCan} color="rgba(0, 0, 0, 0.4)" />
              </DeleteButton>
            ) : null}
          </div>
        </FormGroup>
      ))}
      <Button variant="dark" style={{ marginTop: 20 }} onClick={() => handleAddIngredients()}>
        <FontAwesomeIcon icon={faPlus} /> Dodaj kolejny
      </Button>
    </>
  );
};
