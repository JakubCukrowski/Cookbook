import React from "react";
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
  CommentDataWrapper,
  ReplyContainer,
  ReplyWrapper,
} from "./commentsStyles";
import { OrangeButton } from "../../styles/OrangeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faReply,
  faTrashCan,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { UserAuth } from "../../context/AuthContext";

export const Reply = ({ data, index, calculateElapsedTimeInMinutes }) => {
  const { user } = UserAuth();

  return (
    <ReplyContainer>
      <ReplyWrapper>
        <CommentDataWrapper>
          <UserImage src={data.userPhoto} alt="user" />
          <UserName>{data.user}</UserName>
          <AddDate>{calculateElapsedTimeInMinutes(data.addDate)}</AddDate>
          <Content>{data.comment}</Content>
        </CommentDataWrapper>
        <LikesWrapper>
          <OrangeButton onClick={() => handleLikeComment(index)}>
            <FontAwesomeIcon icon={faPlus} />
          </OrangeButton>
          <CommentLikes>{data.ratedBy.length}</CommentLikes>
          <OrangeButton onClick={() => handleDislikeComment(index)}>
            <FontAwesomeIcon icon={faMinus} />
          </OrangeButton>
        </LikesWrapper>
        <CommentButtonsWrapper>
          {user && user.displayName === data.user ? (
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
      </ReplyWrapper>
    </ReplyContainer>
  );
};
