import React from "react";
import { Container } from "react-bootstrap";
import { SingleComment } from "./Comment";

export const Comments = ({ comments }) => {

  return (
    <Container>
      {comments.map((data, index) => (
        <SingleComment
          comments={comments}
          data={data}
          key={index}
          index={index}
        />
      ))}
    </Container>
  );
};
