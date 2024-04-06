import React, { useState } from "react";
import { FlexContainer } from "../../styles/Containers";
import Form from "react-bootstrap/Form";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { AddCommentButton, StyledInputGroup } from "./commentsStyles";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { Alert } from "react-bootstrap";
import { db } from "../../firebase";

export const AddComment = ({ searchedRecipe }) => {
  const { user } = UserAuth();
  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);
  const recipeRef = doc(db, 'recipes', searchedRecipe.id)

  const handleInput = (e) => {
    setComment(e.target.value);
    setError(false);
  };

  const handleAddRecipe = async (e) => {
    e.preventDefault();

    if (comment.length < 5) {
      setError(true);
    } else {
      await updateDoc(recipeRef, {
        comments: arrayUnion({
          user: user.displayName,
          userPhoto: user.photoURL,
          comment: comment,
          addDate: Date.now(),
          ratedBy: [],
          replies: []
        }),
      });
      setComment("");
    }
  };

  return (
    <FlexContainer justify="center" align="center" direction="column">
      <h3 style={{ marginBottom: 30 }}>
        {searchedRecipe.comments.length > 0
          ? "Komentarze"
          : "Przepis nie ma jeszcze komentarzy"}
      </h3>

      {user ? (
        <>
          <p>Dodaj komentarz</p>
          {error && comment.length < 5 ? (
            <Alert variant="danger">Za krótko</Alert>
          ) : null}
          <StyledInputGroup>
            <Form.Control
              isInvalid={error && comment.length < 5}
              onChange={handleInput}
              value={comment}
              style={{ resize: "none", width: "100%", height: 120 }}
              size="sm"
              as="textarea"
              aria-label="With textarea"
            />
            <AddCommentButton onClick={handleAddRecipe}>
              Opublikuj
            </AddCommentButton>
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
