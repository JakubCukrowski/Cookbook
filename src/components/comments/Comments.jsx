import React from "react";
import { Button } from "react-bootstrap";
import { FlexContainer } from "../../styles/Containers";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export const Comments = () => {
  const { user } = UserAuth();

  return (
    <FlexContainer justify="center" align="center" direction="column">
      <h3 style={{marginBottom: 30}}>Przepis nie ma jeszcze komentarzy</h3>

      {user ? (
        <>
          <p>Dodaj komentarz</p>
          <InputGroup
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              width: "50%",
            }}
          >
            <Form.Control
              style={{ resize: "none", width: "100%", height: 120 }}
              size="sm"
              as="textarea"
              aria-label="With textarea"
            />
            <Button onClick={() => alert('Pracujemy nad tym')} variant="dark">Opublikuj</Button>
          </InputGroup>
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
