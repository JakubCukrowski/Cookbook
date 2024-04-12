import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { updateDoc, doc } from "firebase/firestore";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import { Reply } from "./Reply";
import { CommentStructure } from "./CommentStructure";
import { CommentWrapper } from "./commentsStyles";

export const SingleComment = ({ data, index, currentDate }) => {
  const { user, recipes } = UserAuth();
  const { recipeId } = useParams();
  const recipeRef = doc(db, "recipes", recipeId);
  const [recipeComments, setRecipeComments] = useState([]);

  useEffect(() => {
    //search for the comment
    const searchForComments = () => {
      const findRecipe = recipes.find((recipe) => recipe.id === recipeId);
      const recipeComments = findRecipe.comments;
      setRecipeComments(recipeComments);
    };

    return searchForComments()
  }, [recipes]);

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
    const comments = recipeComments
    const findComment = comments[index];

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
      comments: comments,
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
          disabled={data.ratedBy.includes(user.displayName)}
        />
      </CommentWrapper>
      {recipeComments[index]?.replies.length > 0
        ? recipeComments[index].replies.map((reply, indx) => {
            return (
              <Reply
                key={indx}
                data={reply}
                index={index}
                calculateElapsedTimeInMinutes={calculateElapsedTimeInMinutes}
                recipeRef={recipeRef}
                recipeComments={recipeComments}
              />
            );
          })
        : null}
    </>
  );
};
