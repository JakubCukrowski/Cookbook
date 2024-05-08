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

export const SignIn = () => {
  const { login } = UserAuth();
  const navigate = useNavigate();
  const [loggingIn, setLoggingIn] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Musisz podać email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Niepoprawny adres email";
    }

    if (!values.password) {
      errors.password = "Musisz podać hasło";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values, { setErrors }) => {
      if (!formik.errors.email && !formik.errors.password) {
        try {
          setLoggingIn(true);
          await login(values.email, values.password);
          navigate(-1);
        } catch (error) {
          setLoggingIn(false);
          if (error.code === "auth/invalid-credential") {
            setErrors({ loginStatus: "Niepoprawny email lub hasło" });
          }
          if (error.code === "auth/too-many-requests") {
            setErrors({ loginStatus: "Spróbuj ponownie później" });
          }
        }
      }
    },
  });

  return (
    // <>
    <StyledSignSection>
      {loggingIn ? (
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
            <h2 style={{ color: "white", padding: 26 }}>Zaloguj się</h2>
            <span style={{ margin: 10 }}>
              Nie masz konta?{" "}
              <StyledLink to="/signup">Zarejestruj się</StyledLink>
            </span>
            <StyledForm onSubmit={formik.handleSubmit} noValidate>
              {formik.errors.loginStatus && (
                <Alert variant="danger">{formik.errors.loginStatus}</Alert>
              )}
              {formik.touched.email && formik.errors.email && (
                <Alert variant="danger">{formik.errors.email}</Alert>
              )}
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  isInvalid={
                    (formik.touched.email && formik.errors.email) ||
                    formik.errors.loginStatus
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Twój email"
                />
              </Form.Group>
              {formik.touched.password && formik.errors.password && (
                <Alert variant="danger">{formik.errors.password}</Alert>
              )}
              <Form.Group className="mb-3">
                <Form.Label>Hasło</Form.Label>
                <Form.Control
                  isInvalid={
                    (formik.touched.password && formik.errors.password) ||
                    formik.errors.loginStatus
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Hasło"
                  autoComplete="off"
                />
              </Form.Group>
              <Button variant="light" type="submit">
                Potwierdź
              </Button>
            </StyledForm>
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
          </FlexContainer>
        </>
      )}
    </StyledSignSection>
  );
};
