import React from "react";
import { Container } from "react-bootstrap";
import { SingleComment } from "./Comment";

export const Comments = ({ recipe, comments, recipeRef }) => {
  return (
    <Container>
      {comments.map((data, index) => (
        <SingleComment
          data={data}
          key={index}
          recipe={recipe}
          recipeRef={recipeRef}
          index={index}
        />
      ))}
    </Container>
  );
};
