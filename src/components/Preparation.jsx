import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Form, FormGroup } from "react-bootstrap";

export const Preparation = ({ details, addNextStep, handleStepsObject }) => {
  const handleInputChange = (e, step) => {
    const newStepsObject = details.preparationSteps;
    // Object.values(newStepsObject)[0] = e.target.value;
    Object.keys(newStepsObject).forEach(key => {
      if (key === step) {
        newStepsObject[key] = e.target.value
      }
    })
    handleStepsObject(newStepsObject)
  };

  return (
    <>
      <p>Daj znać innym jak przygotować potrawę</p>
      {Object.entries(details.preparationSteps).map((step) => {
        return (
          <FormGroup key={step[0]} className="mb-3">
            <Form.Label>Krok {parseInt(step[0]) + 1}</Form.Label>
            <Form.Control onChange={(e) => handleInputChange(e, step[0])} />
          </FormGroup>
        );
      })}
      <Button onClick={() => addNextStep()}>
        <FontAwesomeIcon icon={faPlus} /> Dodaj kolejny
      </Button>
    </>
  );
};
