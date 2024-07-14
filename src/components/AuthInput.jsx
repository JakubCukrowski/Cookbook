import React from "react";
import { StyledTextField } from "../assets/styles/CredentialsStyles";
import { StyledAlert } from "../assets/styles/StyledAlert";

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
  error,
  autoComplete
}) => {
  return (
    <>
      {inputErrors && (
        <StyledAlert variant="filled" severity="error">
          {errorContent}
        </StyledAlert>
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
        autoComplete={autoComplete}
      />
    </>
  );
};
