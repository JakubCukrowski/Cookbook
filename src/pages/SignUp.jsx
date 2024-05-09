import React, { useState } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { FlexContainer, SpinnerContainer } from "../assets/styles/Containers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { StyledLink } from "../assets/styles/StyledLink";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  StyledSignSection,
  StyledForm,
} from "../assets/styles/CredentialsStyles";
import { useFormik } from "formik";

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
          <Spinner />
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
              <Form.Group className="mb-3">
                <Form.Label htmlFor="displayName">Nazwa użytkownika</Form.Label>
                {formik.touched.displayName && formik.errors.displayName && (
                  <Alert variant="danger">{formik.errors.displayName}</Alert>
                )}
                <Form.Control
                  autoComplete="off"
                  isInvalid={
                    formik.touched.displayName && formik.errors.displayName
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="displayName"
                  value={formik.values.displayName}
                  type="text"
                  placeholder="Nazwa użytkownika"
                  id="displayName"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email</Form.Label>
                {formik.touched.email && formik.errors.email && (
                  <Alert variant="danger">{formik.errors.email}</Alert>
                )}
                <Form.Control
                  autoComplete="off"
                  isInvalid={formik.touched.email && formik.errors.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="email"
                  value={formik.values.email}
                  type="email"
                  placeholder="Email"
                  id="email"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="password">Hasło</Form.Label>
                {formik.touched.password && formik.errors.password && (
                  <Alert variant="danger">{formik.errors.password}</Alert>
                )}
                <Form.Control
                  isInvalid={formik.touched.password && formik.errors.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="password"
                  value={formik.values.password}
                  type="password"
                  placeholder="Hasło"
                  id="password"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="repeatedPassword">
                  Powtórz hasło
                </Form.Label>
                {formik.touched.repeatedPassword &&
                  formik.errors.repeatedPassword && (
                    <Alert variant="danger">
                      {formik.errors.repeatedPassword}
                    </Alert>
                  )}
                <Form.Control
                  isInvalid={
                    formik.touched.repeatedPassword &&
                    formik.errors.repeatedPassword
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="repeatedPassword"
                  value={formik.values.repeatedPassword}
                  type="password"
                  placeholder="Powtórz hasło"
                  id="repeatedPassword"
                />
              </Form.Group>
              <Button variant="light" type="submit">
                Utwórz
              </Button>
            </StyledForm>
          </FlexContainer>
        </>
      )}
    </StyledSignSection>
  );
};
