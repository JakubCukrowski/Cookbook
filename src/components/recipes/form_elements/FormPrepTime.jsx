import React from "react";
import { Form } from "react-bootstrap";

export const FormPrepTime = ({ value, name, id, onChange, array }) => {
  return (
    <>
      <Form.Select value={value} name={name} id={id} onChange={onChange}>
        {array.map((element, index) => (
          <option key={index} value={element}>
            {element}
          </option>
        ))}
      </Form.Select>
    </>
  );
};
