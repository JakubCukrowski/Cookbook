import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { FlexContainer } from "../../styles/Containers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { StyledLink } from "../../styles/StyledLink";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { StyledSignSection, StyledForm } from "./CredentialsStyles";

export const SignIn = () => {
  const { login } = UserAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [credentialsErrors, setCredentialsErrors] = useState({
    email: false,
    password: false,
  });

  const [accountExists, setAccountExists] = useState("");

  const handleInputs = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    setCredentialsErrors({
      email: false,
      password: false,
    });

    setAccountExists(true);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setCredentialsErrors((prev) => {
      return {
        ...prev,
        email: userData.email.length === 0 ? true : prev.email,
        password:
          userData.password.length === 0 ||
          (userData.password.length > 0 && userData.password.length < 6)
            ? true
            : prev.password,
      };
    });

    if (!credentialsErrors.email && !credentialsErrors.password) {
      try {
        await login(userData.email, userData.password);
        navigate("/dashboard");
      } catch (error) {
        if (error.message === "Firebase: Error (auth/invalid-email).") {
          setCredentialsErrors(() => {
            return {
              email: true,
              password: true,
            };
          });
        }

        if (error.message === "Firebase: Error (auth/invalid-credential).") {
          setAccountExists(false);
        }
      }
    }
  };

  return (
    <StyledSignSection>
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
          Nie masz konta? <StyledLink to="/signup">Zarejestruj się</StyledLink>
        </span>
        <StyledForm>
          {credentialsErrors.email &&
          credentialsErrors.password &&
          userData.email.length > 0 &&
          userData.password.length > 0 ? (
            <Alert variant="danger">Nie znaleźliśmy konta</Alert>
          ) : null}
          {accountExists === false ? (
            <Alert variant="danger">Email lub hasło się nie zgadza</Alert>
          ) : null}
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            {credentialsErrors.email && userData.email.length === 0 ? (
              <Alert variant="danger">Musisz podać email</Alert>
            ) : null}
            <Form.Control
              isInvalid={
                (credentialsErrors.email &&
                  userData.email.length === 0 &&
                  accountExists !== false) ||
                (credentialsErrors.email &&
                  credentialsErrors.password &&
                  userData.email.length > 0 &&
                  userData.password.length) ||
                (accountExists === false)
              }
              onChange={handleInputs}
              value={userData.email}
              name="email"
              type="email"
              placeholder="Twój email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Hasło</Form.Label>
            {credentialsErrors.password && userData.password.length === 0 ? (
              <Alert variant="danger">Musisz podać hasło</Alert>
            ) : null}
            {credentialsErrors.password &&
            userData.password.length > 0 &&
            userData.password.length < 6 ? (
              <Alert variant="danger">Hasło jest za krótkie</Alert>
            ) : null}
            <Form.Control
              isInvalid={
                (credentialsErrors.password &&
                  userData.password.length === 0) ||
                (credentialsErrors.email &&
                  credentialsErrors.password &&
                  userData.email.length > 0 &&
                  userData.password.length) ||
                (accountExists === false)
              }
              onChange={handleInputs}
              value={userData.password}
              name="password"
              type="password"
              placeholder="Hasło"
              autoComplete="off"
            />
          </Form.Group>
          <Button onClick={handleLogin} variant="light" type="submit">
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
    </StyledSignSection>
  );
};
