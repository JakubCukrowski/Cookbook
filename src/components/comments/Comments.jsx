import React from "react";
import { Container } from "react-bootstrap";
import { CommentWrapper, Content, UserImage } from "./commentsStyles";

export const Comments = ({ comments }) => {
  return (
    <Container>
      {comments.map((data, index) => (
        <CommentWrapper key={index}>
          <UserImage src={data.userPhoto} alt="user" />
          <strong>{data.user}</strong>
          <span>{data.addDate}</span>
          <Content>{data.comment}</Content>
        </CommentWrapper>
      ))}
    </Container>
  );
};
