import React, { useEffect, useRef, useState } from "react";
import {
  CommentWrapper,
  Content,
  UserImage,
  UserName,
  AddDate,
  LikesWrapper,
  CommentLikes,
  CommentButtonsWrapper,
  DeleteCommentButton,
  EditCommentButton,
  CommentDataWrapper
} from "./commentsStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faMinus,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { OrangeButton } from "../../styles/OrangeButton";

export const SingleComment = ({ data, recipe, recipeRef, index }) => {
  const [currentDate, setCurrentDate] = useState(Date.now());
  useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDate(Date.now());
      }, 1000);

      return () => clearInterval(intervalId);
  }, []);

  const calculateElapsedTimeInMinutes = (date) => {
    const convertToMinutes = Math.floor((currentDate - date) / 1000 / 60);
    const elapsedHours = Math.floor(convertToMinutes / 60);
    const elapsedDays = Math.floor(elapsedHours / 24);
    if (convertToMinutes < 1) {
      return "Przed chwilą";
    } else if (convertToMinutes === 1) {
      return "Minutę temu";
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

  const handleLikeComment = async (e) => {
    e.preventDefault()
//HANDLE THIS FUNCTION
  }

  return (
    <CommentWrapper className={`comment-${index}`}>
      <CommentDataWrapper>
        <UserImage src={data.userPhoto} alt="user" />
        <UserName>{data.user}</UserName>
        <AddDate>{calculateElapsedTimeInMinutes(data.addDate)}</AddDate>
        <Content>{data.comment}</Content>
      </CommentDataWrapper>
      <LikesWrapper>
        <OrangeButton onClick={handleLikeComment}>
          <FontAwesomeIcon icon={faPlus} />
        </OrangeButton>
        <CommentLikes>{data.likes}</CommentLikes>
        <OrangeButton>
          <FontAwesomeIcon icon={faMinus} />
        </OrangeButton>
      </LikesWrapper>
      <CommentButtonsWrapper>
        <DeleteCommentButton>
          <FontAwesomeIcon icon={faTrashCan} /> {""} Skasuj
        </DeleteCommentButton>
        <EditCommentButton>
          <FontAwesomeIcon icon={faEdit} /> {""} Edytuj
        </EditCommentButton>
      </CommentButtonsWrapper>
    </CommentWrapper>
  );
};
