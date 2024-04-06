import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import { updateDoc, doc } from "firebase/firestore";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import { Reply } from "./Reply";

export const SingleComment = ({ data, index }) => {
  const { user, recipes } = UserAuth();

  const { recipeId } = useParams();
  const recipeRef = doc(db, "recipes", recipeId);

  //calculate elapsed time based on date when comment was added
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

  //search for the comment
  const searchForComment = () => {
    const findRecipe = recipes.find((recipe) => recipe.id === recipeId);
    const recipeComments = findRecipe.comments;
    return recipeComments;
  };

  //plus button
  const handleLikeComment = async (index) => {
    const findComment = searchForComment()[index];

    if (user) {
      if (!findComment.ratedBy.includes(user.displayName)) {
        findComment.ratedBy.push(user.displayName);
      }
    } else {
      alert("Musisz być zalogowany, żeby polubić komentarz.");
    }

    await updateDoc(recipeRef, {
      comments: searchForComment(),
    });
  };

  //minus button
  const handleDislikeComment = async (index) => {
    const findComment = searchForComment()[index];

    if (findComment.ratedBy.includes(user.displayName)) {
      const dislike = findComment.ratedBy.filter(
        (username) => username !== user.displayName
      );

      findComment.ratedBy = dislike;
    }

    await updateDoc(recipeRef, {
      comments: searchForComment(),
    });
  };

  return (
    <>
      <CommentWrapper>
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
      </CommentWrapper>
      {searchForComment()[index].replies.length > 0
        ? searchForComment()[index].replies.map((reply, index) => {
            return (
              <Reply
                key={index}
                data={reply}
                index={index}
                calculateElapsedTimeInMinutes={calculateElapsedTimeInMinutes}
              />
            );
          })
        : null}
    </>
  );
};
