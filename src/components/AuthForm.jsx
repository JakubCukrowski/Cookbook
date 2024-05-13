import React from "react";
import { FlexContainer, SpinnerContainer } from "../assets/styles/Containers";
import { StyledLink } from "../assets/styles/StyledLink";
import {
  StyledSignSection,
  StyledForm,
} from "../assets/styles/CredentialsStyles";
import { ConfirmButton } from "../assets/styles/Buttons";
import { CircularProgress, FormControlLabel, Checkbox } from "@mui/material";
import { AuthInput } from "./AuthInput";
import bckImg from "../assets/images/signForm2.jpg";
import { StyledAlert } from "../assets/styles/StyledAlert";
import { StyledTestAccount } from "../assets/styles/StyledTestAccount";

export const AuthForm = ({
  title,
  accountExists,
  linkTo,
  href,
  signInComponent,
  inputs,
  handleSubmit,
  loginStatus,
  loggingIn,
  rememberEmail,
  saveEmail,
}) => {
  return (
    <>
      <StyledSignSection backgroundimage={bckImg}>
        {loggingIn ? (
          <SpinnerContainer style={{ position: "static", zIndex: 200 }}>
            <CircularProgress color="inherit" />
          </SpinnerContainer>
        ) : (
          <>
            <FlexContainer direction="column" align="center">
              <StyledForm onSubmit={handleSubmit} noValidate>
                <h2 style={{ padding: 20 }}>{title}</h2>
                <span style={{ fontSize: 18, margin: 10 }}>
                  {accountExists}{" "}
                  <StyledLink to={href}>
                    <strong>{linkTo}</strong>
                  </StyledLink>
                </span>
                {signInComponent && loginStatus && (
                  <StyledAlert variant="filled" severity="error">
                    {loginStatus}
                  </StyledAlert>
                )}
                {inputs.map((input, index) => {
                  return (
                    <AuthInput
                      inputErrors={input.inputErrors}
                      errorContent={input.errorContent}
                      key={index}
                      id={input.id}
                      label={input.label}
                      onChange={input.onChange}
                      onBlur={input.onBlur}
                      value={input.value}
                      name={input.name}
                      type={input.type}
                      error={input.inputFillError}
                    />
                  );
                })}
                {signInComponent && (
                  <FormControlLabel
                    style={{ marginTop: 20, width: "100%" }}
                    label="Zapamiętaj mój email"
                    control={
                      <Checkbox onChange={rememberEmail} checked={saveEmail} />
                    }
                  />
                )}
                <ConfirmButton variant="contained" type="submit">
                  Potwierdź
                </ConfirmButton>
              </StyledForm>
              {signInComponent && (
                <StyledTestAccount>
                  <h3>Test account</h3>
                  <p>
                    email: <strong>test@test.com</strong>
                  </p>
                  <p>
                    password: <strong>123456</strong>
                  </p>
                </StyledTestAccount>
              )}
            </FlexContainer>
          </>
        )}
      </StyledSignSection>
    </>
  );
};
