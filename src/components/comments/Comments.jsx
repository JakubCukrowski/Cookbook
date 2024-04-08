import React from "react";
import { Container } from "react-bootstrap";
import { SingleComment } from "./Comment";

export const Comments = ({ comments, currentDate }) => {

  return (
    <Container>
      {comments.map((data, index) => (
        <SingleComment
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
