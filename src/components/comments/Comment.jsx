import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { updateDoc, doc } from "firebase/firestore";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import { CommentStructure } from "./CommentStructure";
import { CommentWrapper } from "./commentsStyles";

export const Comment = ({ data, index, currentDate, comments }) => {
  const { user } = UserAuth();
  const { recipeId } = useParams();
  const recipeRef = doc(db, "recipes", recipeId);

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

  //rating buttons
  const handleRateComment = async (index) => {
    const recipeComments = comments
    const findComment = recipeComments[index];

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

  return (
    <>
      <CommentWrapper>
        <CommentStructure
          userImage={data.userPhoto}
          userName={data.user}
          elapsedTime={calculateElapsedTimeInMinutes(data.addDate)}
          commentContent={data.comment}
          handleLikeComment={() => handleRateComment(index)}
          handleDislikeComment={() => handleRateComment(index)}
          commentLikes={data.ratedBy.length}
          //plus button disabled when rated, if not, minus button disabled
          disabled={user && data.ratedBy.includes(user.displayName)}
        />
      </CommentWrapper>
    </>
  );
};
