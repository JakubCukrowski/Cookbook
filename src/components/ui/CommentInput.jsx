import { Alert } from "react-bootstrap";
import { AddCommentButton } from "../../assets/styles/commentsStyles";
import { TextField } from "@mui/material";

export const CommentInput = ({
  comment,
  onChange,
  onClick,
  buttonText,
  error,
}) => {
  return (
    <>
      {error && comment.length < 5 ? (
        <Alert variant="danger">Za krótko</Alert>
      ) : null}
      <TextField
        sx={{ width: "100%" }}
        multiline
        rows={4}
        onChange={onChange}
        value={comment}
        error={error && comment.length < 5}
      />
      <AddCommentButton onClick={onClick}>{buttonText}</AddCommentButton>
    </>
  );
};
