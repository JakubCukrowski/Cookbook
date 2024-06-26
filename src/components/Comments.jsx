import React from "react";
import { Container } from "react-bootstrap";
import { Comment } from "../components/Comment";

export const Comments = ({ comments, currentDate, searchedRecipe }) => {

  return (
    <Container fluid>
      {comments.map((comment, index) => (
        <Comment
          comments={comments}
          comment={comment}
          key={index}
          index={index}
          currentDate={currentDate}
          searchedRecipe={searchedRecipe}
        />
      ))}
    </Container>
  );
};
