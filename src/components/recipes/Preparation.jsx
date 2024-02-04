import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Alert, Button, Form, FormGroup } from "react-bootstrap";

export const Preparation = ({
  details,
  addNextStep,
  handleStepsObject,
  errors,
  handleStepsErrors,
}) => {
  const handleInputChange = (e, step) => {
    const newStepsObject = details.preparationSteps;
    Object.keys(newStepsObject).forEach((key) => {
      if (key === step) {
        newStepsObject[key] = e.target.value;
      }
    });
    handleStepsObject(newStepsObject);

    //clear errors
    const newErrorsArray = errors.preparationStepsErrors;
    newErrorsArray[step] = false;
    handleStepsErrors(newErrorsArray);
  };

  return (
    <>
      <p>Daj znać innym jak przygotować potrawę</p>
      {Object.entries(details.preparationSteps).map((step, index) => {
        return (
          <FormGroup key={step[0]} className="mb-3">
            <Form.Label>Krok {parseInt(step[0]) + 1}</Form.Label>
            {errors.preparationStepsErrors[index] && step[1].length === 0 ? (
              <Alert variant="danger">Nie może być puste</Alert>
            ) : null}
            {errors.preparationStepsErrors[index] && (step[1].length > 0 && step[1].length < 15) ? (
              <Alert variant="danger">Ten krok jest za krótki</Alert>
            ) : null}
            <Form.Control
              isInvalid={
                errors.preparationStepsErrors[index] && step[1].length === 0
              }
              as="textarea"
              style={{ resize: "none" }}
              rows={4}
              onChange={(e) => handleInputChange(e, step[0])}
            />
          </FormGroup>
        );
      })}
      <Button variant="dark" onClick={() => addNextStep()}>
        <FontAwesomeIcon icon={faPlus} /> Dodaj kolejny
      </Button>
    </>
  );
};
