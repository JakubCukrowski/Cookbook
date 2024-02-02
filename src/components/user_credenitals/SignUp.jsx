import React, { useState } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { FlexContainer, SpinnerContainer } from "../../styles/Containers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { StyledLink } from "../../styles/StyledLink";
import { StyledForm } from "./StyledForm";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { StyledSignSection } from "./StyledSignSection";

export const SignUp = () => {
  const { createUser, login } = UserAuth();
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    repeatedPassword: "",
  });

  const [inputErrors, setInputErrors] = useState({
    displayName: false,
    email: false,
    password: false,
    repeatedPassword: false,
  });

  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);

  //handle inputs, and reset errors
  const handleInputs = (e) => {
    const { name, value } = e.target;

    setUserCredentials((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    setInputErrors((prev) => {
      return {
        ...prev,
        displayName: name === "displayName" ? false : prev.displayName,
        email: name === "email" ? false : prev.email,
        password:
          name === "password" || name === "repeatedPassword"
            ? false
            : prev.password,
        repeatedPassword:
          name === "password" || name === "repeatedPassword"
            ? false
            : prev.repeatedPassword,
      };
    });
  };

  //handle sumbit button + validation
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userCredentials.displayName.length < 6) {
      setInputErrors((prev) => {
        return {
          ...prev,
          displayName: true,
        };
      });
    }

    if (!userCredentials.email.match(emailRegex)) {
      setInputErrors((prev) => {
        return {
          ...prev,
          email: true,
        };
      });
    }

    if (
      userCredentials.password !== userCredentials.repeatedPassword ||
      userCredentials.password.length < 6
    ) {
      setInputErrors((prev) => {
        return {
          ...prev,
          password: true,
        };
      });
    }

    if (userCredentials.repeatedPassword !== userCredentials.password) {
      setInputErrors((prev) => {
        return {
          ...prev,
          repeatedPassword: true,
        };
      });
    }

    if (
      userCredentials.displayName.length >= 6 &&
      userCredentials.email.match(emailRegex) &&
      userCredentials.password === userCredentials.repeatedPassword &&
      userCredentials.password.length >= 6
    ) {
      setIsSpinnerVisible(true);
      
      try {
        await createUser(
          userCredentials.displayName,
          userCredentials.email,
          userCredentials.password
        );

        const timeoutId = setTimeout(() => {
          navigate("/dashboard");
        }, 1000);

        return () => clearTimeout(timeoutId);
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <StyledSignSection>
      {!isSpinnerVisible ? (
        <>
          {" "}
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
            <StyledForm noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="user_name">Nazwa użytkownika</Form.Label>
                <Alert show={inputErrors.displayName} variant="danger">
                  Nazwa użytkownika jest za krótka. Nazwa musi posiadać
                  minimalnie 6 znaków
                </Alert>
                <Form.Control
                  autoComplete="off"
                  isInvalid={inputErrors.displayName}
                  isValid={userCredentials.displayName.length >= 6}
                  onChange={handleInputs}
                  name="displayName"
                  value={userCredentials.id}
                  type="text"
                  placeholder="Nazwa użytkownika"
                  id="user_name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="user_email">Email</Form.Label>
                <Alert show={inputErrors.email} variant="danger">
                  Email jest niepoprawny
                </Alert>
                <Form.Control
                  autoComplete="off"
                  isInvalid={inputErrors.email}
                  isValid={
                    !inputErrors.email &&
                    userCredentials.email.match(emailRegex)
                  }
                  onChange={handleInputs}
                  name="email"
                  value={userCredentials.email}
                  type="email"
                  placeholder="Email"
                  id="user_email"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="user_password">Hasło</Form.Label>
                <Alert
                  show={
                    inputErrors.password && userCredentials.password.length < 6
                  }
                  variant="danger"
                >
                  Hasło jest za krótkie
                </Alert>
                <Alert
                  show={
                    inputErrors.password &&
                    userCredentials.password !==
                      userCredentials.repeatedPassword
                  }
                  variant="danger"
                >
                  Hasła nie zgadzają się
                </Alert>
                <Form.Control
                  isInvalid={inputErrors.password}
                  onChange={handleInputs}
                  name="password"
                  value={userCredentials.password}
                  type="password"
                  placeholder="Hasło"
                  id="user_password"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="second_password">Powtórz hasło</Form.Label>
                <Alert show={inputErrors.repeatedPassword} variant="danger">
                  Hasła nie zgadzają się
                </Alert>
                <Form.Control
                  isInvalid={inputErrors.repeatedPassword}
                  onChange={handleInputs}
                  name="repeatedPassword"
                  value={userCredentials.repeatedPassword}
                  type="password"
                  placeholder="Powtórz hasło"
                  id="second_password"
                />
              </Form.Group>
              <Button variant="light" type="submit">
                Utwórz
              </Button>
            </StyledForm>
          </FlexContainer>
        </>
      ) : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
    </StyledSignSection>
  );
};
