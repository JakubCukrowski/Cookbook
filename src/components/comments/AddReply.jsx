import React, { useState } from "react";
import { CommentInput } from "./CommentInput";

export const AddReply = ({commentToReply, comments}) => {
  const [comment, setComment] = useState('');
  const [error, setError] = useState(false);

  const handleCommentInput = (e) => {
    setComment(e.target.value);
    setError(false)
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    console.log(commentToReply);
  };

  return (
    <>
      <CommentInput
        comment={comment}
        onChange={handleCommentInput}
        onClick={handleButtonClick}
        buttonText="Odpowiedz"
        error={error}
      />
    </>
  );
};
