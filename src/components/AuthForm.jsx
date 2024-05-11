import React from "react";
import { FlexContainer, SpinnerContainer } from "../assets/styles/Containers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { StyledLink } from "../assets/styles/StyledLink";
import {
  StyledSignSection,
  StyledForm,
} from "../assets/styles/CredentialsStyles";
import { ConfirmButton } from "../assets/styles/ConfirmButton";
import { Alert, CircularProgress } from "@mui/material";
import { AuthInput } from "./AuthInput";
import { Footer } from "../components/Footer";

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
}) => {
  return (
    <>
      <StyledSignSection>
        {loggingIn ? (
          <SpinnerContainer>
            <CircularProgress color="inherit" />
          </SpinnerContainer>
        ) : (
          <>
            <StyledLink
              color="black"
              style={{ padding: 20, alignSelf: "flex-start" }}
              to="/"
            >
              <FontAwesomeIcon icon={faArrowLeft} /> Strona główna
            </StyledLink>
            <FlexContainer direction="column" align="center">
              <h2 style={{ padding: 26 }}>{title}</h2>
              <span style={{ margin: 10 }}>
                {accountExists} <StyledLink to={href}>{linkTo}</StyledLink>
              </span>
              <StyledForm onSubmit={handleSubmit} noValidate>
                {signInComponent && loginStatus && (
                  <Alert variant="filled" severity="error">
                    {loginStatus}
                  </Alert>
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
                <ConfirmButton variant="contained" type="submit">
                  Potwierdź
                </ConfirmButton>
              </StyledForm>
              {signInComponent && (
                <div
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    padding: 20,
                    borderRadius: 6,
                  }}
                >
                  <h3>Test account</h3>
                  <p>
                    email: <strong>test@test.com</strong>
                  </p>
                  <p>
                    password: <strong>123456</strong>
                  </p>
                </div>
              )}
            </FlexContainer>
          </>
        )}
      </StyledSignSection>
      <Footer />
    </>
  );
};
