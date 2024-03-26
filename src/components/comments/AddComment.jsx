import React from "react";
import { FlexContainer } from "../../styles/Containers";
import Form from "react-bootstrap/Form";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { StyledInputGroup } from "./commentsStyles";
import { OrangeButton } from "../../styles/OrangeButton";

export const AddComment = () => {
  const { user } = UserAuth();

  return (
    <FlexContainer justify="center" align="center" direction="column">
      <h3 style={{ marginBottom: 30 }}>Przepis nie ma jeszcze komentarzy</h3>

      {user ? (
        <>
          <p>Dodaj komentarz</p>
          <StyledInputGroup>
            <Form.Control
              style={{ resize: "none", width: "100%", height: 120 }}
              size="sm"
              as="textarea"
              aria-label="With textarea"
            />
            <OrangeButton onClick={() => alert("Pracujemy nad tym")}>
              Opublikuj
            </OrangeButton>
          </StyledInputGroup>
        </>
      ) : (
        <div>
          <Link to="/signin">Zaloguj się</Link>
          <span>, aby dodać komentarz</span>
        </div>
      )}
    </FlexContainer>
  );
};
