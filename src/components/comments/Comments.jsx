import React from "react";
import { Container } from "react-bootstrap";
import {
  CommentWrapper,
  Content,
  UserImage,
  UserName,
  AddDate,
  LikesWrapper,
  CommentLikes
} from "./commentsStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { OrangeButton } from "../../styles/OrangeButton";

export const Comments = ({ comments }) => {
  const calculateElapsedTimeInMinutes = (date) => {
    const currentDate = Date.now();
    const convertToMinutes = Math.floor((currentDate - date) / 1000 / 60);
    const elapsedHours = Math.floor(convertToMinutes / 60);
    const elapsedDays = Math.floor(elapsedHours / 24);
    if (convertToMinutes < 1) {
      return "Przed chwilą";
    } else if (convertToMinutes > 1 && convertToMinutes < 5) {
      return `${convertToMinutes} minuty temu`;
    } else if (convertToMinutes >= 5 && convertToMinutes < 60) {
      if (
        convertToMinutes % 10 >= 2 &&
        convertToMinutes % 10 <= 4 &&
        (convertToMinutes < 12 || convertToMinutes > 14)
      ) {
        return `${convertToMinutes} minuty temu`;
      } else {
        return `${convertToMinutes} minut temu`;
      }
    } else if (elapsedHours === 1) {
      return "Godzinę temu";
    } else if (elapsedHours > 1 && elapsedHours < 24) {
      if (elapsedHours % 10 >= 2 && elapsedHours <= 4) {
        return `${elapsedHours} godziny temu`;
      } else {
        return `${elapsedHours} godzin temu`;
      }
    } else if (elapsedDays === 1) {
      return "Dzień temu";
    } else if (elapsedDays > 1) {
      return `${elapsedDays} dni temu`;
    }
  };

  return (
    <Container>
      {comments.map((data, index) => (
        <CommentWrapper key={index}>
          <LikesWrapper>
            <OrangeButton>
              <FontAwesomeIcon icon={faPlus} />
            </OrangeButton>
            <CommentLikes>{data.likes}</CommentLikes>
            <OrangeButton>
              <FontAwesomeIcon icon={faMinus} />
            </OrangeButton>
          </LikesWrapper>
          <div>
            <UserImage src={data.userPhoto} alt="user" />
            <UserName>{data.user}</UserName>
            <AddDate>{calculateElapsedTimeInMinutes(data.addDate)}</AddDate>
            <Content>{data.comment}</Content>
          </div>
        </CommentWrapper>
      ))}
    </Container>
  );
};
