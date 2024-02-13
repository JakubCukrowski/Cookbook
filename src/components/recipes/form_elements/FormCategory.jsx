import React from "react";
import { Form } from "react-bootstrap";

export const FormCategory = ({isInvalid, value, name, id, onChange, array, defaultValue}) => {
  return (
    <>
      <Form.Select
        isInvalid={isInvalid}
        value={value}
        name={name}
        id={id}
        onChange={onChange}
        defaultValue={defaultValue}
      >
        {array.map((element, index) => {
          return (
            <option key={index} value={element}>{element}</option>
          )
        })}
      </Form.Select>
    </>
  );
};
