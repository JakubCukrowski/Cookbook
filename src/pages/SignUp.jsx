import React, { useState } from "react";
import { FlexContainer, SpinnerContainer } from "../assets/styles/Containers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { StyledLink } from "../assets/styles/StyledLink";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  StyledSignSection,
  StyledForm,
  StyledTextField,
} from "../assets/styles/CredentialsStyles";
import { useFormik } from "formik";
import { ConfirmButton } from "../assets/styles/ConfirmButton";
import { Alert, CircularProgress } from "@mui/material";

export const SignUp = () => {
  const { createUser } = UserAuth();
  const navigate = useNavigate();
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.displayName) {
      errors.displayName = "Musisz podać nazwę użytkownika";
    } else if (values.displayName.length < 4) {
      errors.displayName =
        "Nazwa użytkownika powinna posiadać przynajmniej 4 znaki";
    }

    if (!values.email) {
      errors.email = "Musisz podać email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Email nie jest poprawny";
    }

    if (!values.password) {
      errors.password = "Musisz podać hasło";
    }

    if (values.password.length < 8) {
      errors.password = "Hasło musi mieć przynajmniej 8 znaków";
    }

    if (
      values.password.length >= 8 &&
      !values.password.match(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+,\-.={}[\]:;'"<>?|])/
      )
    ) {
      errors.password = "Hasło musi zawierać wielką literę i znak specjalny";
    }

    if (values.password !== values.repeatedPassword) {
      errors.paassword = "Hasła nie zgadzają się";
      errors.repeatedPassword = "Hasła nie zgadzają się";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: "",
      repeatedPassword: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
        setIsSpinnerVisible(true);
        await createUser(values.displayName, values.email, values.password);
        navigate("/dashboard");
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setIsSpinnerVisible(false);
          formik.errors.email = "Ten email jest już zajęty";
        }
      }
    },
  });

  return (
    <StyledSignSection>
      {isSpinnerVisible ? (
        <SpinnerContainer>
          <CircularProgress color="inherit" />
        </SpinnerContainer>
      ) : (
        <>
          <StyledLink
            color="white"
            style={{ padding: 20, alignSelf: "flex-start" }}
            to="/"
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Strona główna
          </StyledLink>
          <FlexContainer direction="column" align="center">
            <h2 style={{ color: "white", padding: 26 }}>Zarejestruj się</h2>
            <span style={{ margin: 10 }}>
              Masz już konto? <StyledLink to="/signin">Zaloguj się</StyledLink>
            </span>
            <StyledForm noValidate onSubmit={formik.handleSubmit}>

              {formik.touched.displayName && formik.errors.displayName && (
                <Alert variant="filled" severity="error">
                  {formik.errors.displayName}
                </Alert>
              )}
              <StyledTextField
                id="displayName"
                label="Nazwa użytkownika"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.displayName}
                name="displayName"
                type="displayName"
                error={formik.touched.displayName && formik.errors.displayName}
              />

              {formik.touched.email && formik.errors.email && (
                <Alert variant="filled" severity="error">
                  {formik.errors.email}
                </Alert>
              )}
              <StyledTextField
                id="email"
                label="Email"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                name="email"
                type="email"
                error={formik.touched.email && formik.errors.email}
              />

              {formik.touched.password && formik.errors.password && (
                <Alert variant="filled" severity="error">
                  {formik.errors.password}
                </Alert>
              )}
              <StyledTextField
                id="password"
                label="Hasło"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                name="password"
                type="password"
                error={formik.touched.password && formik.errors.password}
              />

              {formik.touched.repeatedPassword &&
                formik.errors.repeatedPassword && (
                  <Alert variant="filled" severity="error">
                    {formik.errors.repeatedPassword}
                  </Alert>
                )}
              <StyledTextField
                id="repeatedPassword"
                label="Powtórz hasło"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.repeatedPassword}
                name="repeatedPassword"
                type="password"
                error={
                  formik.touched.repeatedPassword &&
                  formik.errors.repeatedPassword
                }
              />
              <ConfirmButton variant="light" type="submit">
                Utwórz
              </ConfirmButton>
            </StyledForm>
          </FlexContainer>
        </>
      )}
    </StyledSignSection>
  );
};
