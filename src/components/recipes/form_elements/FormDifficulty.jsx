import React from "react";
import { Form } from "react-bootstrap";

export const FormDifficulty = ({value, name, id, onChange, isFilter, everything}) => {
  return (
    <>
      <Form.Select
        value={value}
        name={name}
        id={id}
        onChange={onChange}
      >
        {isFilter ? <option value="default">wybierz</option> : null}
        {everything ? <option value="all">Wszystko</option> : null}
        <option value="easy">Łatwy</option>
        <option value="medium">Średni</option>
        <option value="advanced">Zaawansowany</option>
      </Form.Select>
    </>
  );
};
