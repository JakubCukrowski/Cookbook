import React from "react";
import {
  Content,
  UserImage,
  UserName,
  AddDate,
  LikesWrapper,
  CommentLikes,
  CommentButtonsWrapper,
  DeleteCommentButton,
  EditCommentButton,
  CommentDataWrapper,
} from "./commentsStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faMinus,
  faPlus,
  faReply,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { OrangeButton } from "../../styles/OrangeButton";
import { UserAuth } from "../../context/AuthContext";

export const CommentStructure = ({
  userImage,
  userName,
  elapsedTime,
  commentContent,
  handleLikeComment,
  handleDislikeComment,
  commentLikes,
  disabled
}) => {
  const { user } = UserAuth();

  return (
    <>
      <CommentDataWrapper>
        <UserImage src={userImage} alt="user" />
        <UserName>{userName}</UserName>
        <AddDate>{elapsedTime}</AddDate>
        <Content>{commentContent}</Content>
      </CommentDataWrapper>
      <LikesWrapper>
        <OrangeButton disabled={disabled} onClick={handleLikeComment}>
          <FontAwesomeIcon icon={faPlus} />
        </OrangeButton>
        <CommentLikes>{commentLikes}</CommentLikes>
        <OrangeButton disabled={!disabled} onClick={handleDislikeComment}>
          <FontAwesomeIcon icon={faMinus} />
        </OrangeButton>
      </LikesWrapper>
      <CommentButtonsWrapper>
        {user && user.displayName === userName ? (
          <>
            <DeleteCommentButton>
              <FontAwesomeIcon icon={faTrashCan} /> {""} Skasuj
            </DeleteCommentButton>
            <EditCommentButton>
              <FontAwesomeIcon icon={faEdit} /> {""} Edytuj
            </EditCommentButton>
          </>
        ) : (
          <EditCommentButton>
            <FontAwesomeIcon icon={faReply} /> <br /> {""} Odpowiedz
          </EditCommentButton>
        )}
      </CommentButtonsWrapper>
    </>
  );
};
