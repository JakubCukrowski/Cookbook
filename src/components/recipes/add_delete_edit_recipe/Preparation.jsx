import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Alert, Button, Form, FormGroup } from "react-bootstrap";
import { DeleteButton } from "../RecipesStyles";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export const Preparation = ({
  details,
  addNextStep,
  handleStepsArray,
  errors,
  handleStepsErrors,
}) => {
  const handleInputChange = (e, index) => {
    const newStepsArray = details.preparationSteps;
    newStepsArray[index] = e.target.value;

    handleStepsArray(newStepsArray);

    // clear errors
    const newErrorsArray = errors.preparationStepsErrors;
    newErrorsArray[index] = false;
    handleStepsErrors(newErrorsArray);
  };

  const handleDeleteButton = (index) => {
    const newStepsArray = [...details.preparationSteps];
    const newErrorsArray = [...errors.preparationStepsErrors];
    const filterSteps = newStepsArray.filter((_, i) => i !== index);
    handleStepsArray(filterSteps);

    const filterErrors = newErrorsArray.filter((_, i) => i !== index);
    handleStepsErrors(filterErrors);
  };

  return (
    <>
      <p>Daj znać innym jak przygotować potrawę</p>
      {details.preparationSteps.map((value, index) => {
        return (
          <FormGroup key={index} className="mb-3">
            <Form.Label>Krok {index + 1}</Form.Label>
            {errors.preparationStepsErrors[index] && value.length === 0 ? (
              <Alert variant="danger">Nie może być puste</Alert>
            ) : null}
            {errors.preparationStepsErrors[index] &&
            value.length > 0 &&
            value.length < 15 ? (
              <Alert variant="danger">Ten krok jest za krótki</Alert>
            ) : null}
            <div style={{ display: "flex" }}>
              <Form.Control
                isInvalid={
                  errors.preparationStepsErrors[index] && value.length === 0
                }
                as="textarea"
                style={{ resize: "none" }}
                rows={4}
                onChange={(e) => handleInputChange(e, index)}
                value={value}
              />
              {details.preparationSteps.length > 1 ? (
                <DeleteButton
                  type="button"
                  onClick={() => handleDeleteButton(index)}
                >
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    color="rgba(0, 0, 0, 0.4)"
                  />
                </DeleteButton>
              ) : null}
            </div>
          </FormGroup>
        );
      })}
      <Button variant="dark" onClick={() => addNextStep()}>
        <FontAwesomeIcon icon={faPlus} /> Dodaj kolejny
      </Button>
    </>
  );
};
