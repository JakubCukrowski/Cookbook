import React from "react";
import { Container } from "react-bootstrap";
import { Comment } from "./Comment";

export const Comments = ({ comments, currentDate }) => {

  return (
    <Container>
      {comments.map((comment, index) => (
        <Comment
          comments={comments}
          comment={comment}
          key={index}
          index={index}
          currentDate={currentDate}
        />
      ))}
    </Container>
  );
};
