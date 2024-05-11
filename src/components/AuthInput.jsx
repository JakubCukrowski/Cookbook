import React from "react";
import { StyledTextField } from "../assets/styles/CredentialsStyles";
import { Alert } from "@mui/material";

export const AuthInput = ({
  inputErrors,
  errorContent,
  id,
  label,
  onChange,
  onBlur,
  value,
  name,
  type,
  error
}) => {
  return (
    <>
      {inputErrors && (
        <Alert variant="filled" severity="error">
          {errorContent}
        </Alert>
      )}
      <StyledTextField
        id={id}
        label={label}
        variant="outlined"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        type={type}
        error={error}
      />
    </>
  );
};
