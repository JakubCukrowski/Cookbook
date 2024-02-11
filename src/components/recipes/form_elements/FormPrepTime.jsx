import React from "react";
import { Form } from "react-bootstrap";

export const FormPrepTime = ({value, name, id, onChange}) => {
  return (
    <>
      <Form.Select
        value={value}
        name={name}
        id={id}
        onChange={onChange}
      >
        <option value="15">15 minut</option>
        <option value="30">30 minut</option>
        <option value="60">60 minut</option>
        <option value="90">90 minut</option>
        <option value="more">90 i więcej</option>
      </Form.Select>
    </>
  );
};
