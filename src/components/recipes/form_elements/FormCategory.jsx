import React from "react";
import { Form } from "react-bootstrap";

export const FormCategory = ({isInvalid, value, name, id, onChange, optionDisabled}) => {
  return (
    <>
      <Form.Select
        isInvalid={isInvalid}
        value={value}
        name={name}
        id={id}
        onChange={onChange}
      >
        <option value="default" disabled={optionDisabled}>wybierz</option>
        <option value="Dania główne">Dania główne</option>
        <option value="Zupy">Zupy</option>
        <option value="Śniadania">Śniadania</option>
        <option value="Kolacje">Kolacje</option>
        <option value="Przekąski">Przekąski</option>
        <option value="Desery">Desery</option>
        <option value="Napoje">Napoje</option>
      </Form.Select>
    </>
  );
};
