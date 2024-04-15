import { useState } from "react";
import { Alert } from "react-bootstrap";
import { AddCommentButton, StyledInputGroup } from "./commentsStyles";
import Form from "react-bootstrap/Form";

export const CommentInput = ({comment, onChange, onClick, buttonText, error}) => {
  return (
    <>
      {error && comment.length < 5 ? (
        <Alert variant="danger">Za krótko</Alert>
      ) : null}
      <StyledInputGroup>
        <Form.Control
          isInvalid={error && comment.length < 5}
          onChange={onChange}
          value={comment}
          style={{ resize: "none", width: "100%", height: 120 }}
          size="sm"
          as="textarea"
          aria-label="With textarea"
        />
        <AddCommentButton onClick={onClick}>
          {buttonText}
        </AddCommentButton>
      </StyledInputGroup>
    </>
  );
};
