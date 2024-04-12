import React from "react";
import { Container } from "react-bootstrap";
import { Comment } from "./Comment";

export const Comments = ({ comments, currentDate }) => {

  return (
    <Container>
      {comments.map((data, index) => (
        <Comment
          comments={comments}
          data={data}
          key={index}
          index={index}
          currentDate={currentDate}
        />
      ))}
    </Container>
  );
};
