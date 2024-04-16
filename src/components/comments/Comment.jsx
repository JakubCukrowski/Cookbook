import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { updateDoc, doc } from "firebase/firestore";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import { CommentWrapper } from "./commentsStyles";
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
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { OrangeButton } from "../../styles/OrangeButton";
import { AddReply } from "./AddReply";

export const Comment = ({
  comment,
  index,
  currentDate,
  comments,
}) => {
  const { user } = UserAuth();
  const [isReplying, setIsReplying] = useState(false);
  const {recipeId} = useParams()
  const recipeRef = doc(db, 'comments', recipeId)

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

  const findCommentToUpdate = (comments) => {
    const commentIsMatched = comments.some(
      (singleComment) => singleComment.comment === comment.comment
    );

    if (!commentIsMatched) {
      for (let i = 0; i < comments.length; i++) {
        const foundComment = findCommentToUpdate(comments[i].comments);

        if (foundComment) {
          return foundComment;
        }
      }
    } else {
      return comments.find(singleComment => singleComment.comment === comment.comment)
    }
  };

  //rating buttons
  const handleRateComment = async () => {
    const recipeComments = comments;
    const findComment = findCommentToUpdate(recipeComments)

    if (user) {
      if (!findComment.ratedBy.includes(user.displayName)) {
        findComment.ratedBy.push(user.displayName);
      } else {
        const dislike = findComment.ratedBy.filter(
          (username) => username !== user.displayName
        );

        findComment.ratedBy = dislike;
      }
    } else {
      alert("Musisz być zalogowany, żeby polubić.");
    }

    await updateDoc(recipeRef, {
      comments: recipeComments,
    });
  };

  //handle reply button
  const handleReply = (e) => {
    e.preventDefault();
    setIsReplying((prev) => !prev);
  };

  //update isReplying from AddReply component
  const updateIsReplying = (value) => {
    setIsReplying(value)
  }

  return (
    <>
      <CommentWrapper>
        <CommentDataWrapper>
          <UserImage src={comment.userPhoto} alt="user" />
          <UserName>{comment.user}</UserName>
          <AddDate>{calculateElapsedTimeInMinutes(comment.addDate)}</AddDate>
          <Content>{comment.comment}</Content>
        </CommentDataWrapper>
        <LikesWrapper>
          <OrangeButton
            disabled={user && comment.ratedBy.includes(user.displayName)}
            onClick={() => handleRateComment(index)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </OrangeButton>
          <CommentLikes>{comment.ratedBy.length}</CommentLikes>
          <OrangeButton
            disabled={user && !comment.ratedBy.includes(user.displayName)}
            onClick={() => handleRateComment(index)}
          >
            <FontAwesomeIcon icon={faMinus} />
          </OrangeButton>
        </LikesWrapper>
        <CommentButtonsWrapper>
          {user && user.displayName === comment.user && (
            <>
              <DeleteCommentButton>
                <FontAwesomeIcon icon={faTrashCan} /> {""} Skasuj
              </DeleteCommentButton>
              <EditCommentButton>
                <FontAwesomeIcon icon={faEdit} /> {""} Edytuj
              </EditCommentButton>
            </>
          )}
          {user && user.displayName !== comment.user && (
            <OrangeButton onClick={handleReply}>
              {isReplying ? (
                <>
                  <FontAwesomeIcon icon={faXmark} /> {""} Anuluj
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faReply} /> {""} Odpowiedz
                </>
              )}
            </OrangeButton>
          )}
        </CommentButtonsWrapper>
          {isReplying ? (
            <AddReply
              commentToReply={comment}
              updateIsReplying={updateIsReplying}
              findCommentToUpdate={findCommentToUpdate}
            />
          ) : null}
        <div style={{width: '95%', marginLeft: 'auto'}}>
          {comment.comments?.map((reply, indx) => (
            <Comment
              comments={comments}
              comment={reply}
              key={indx}
              index={indx}
              currentDate={currentDate}
            />
          ))}
        </div>
      </CommentWrapper>
    </>
  );
};
