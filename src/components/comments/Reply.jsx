import React, { useState } from "react";
import { ReplyContainer, ReplyWrapper } from "./commentsStyles";
import { CommentStructure } from "./CommentStructure";
import { UserAuth } from "../../context/AuthContext";
import { updateDoc } from "firebase/firestore";

export const Reply = ({
  data,
  index,
  calculateElapsedTimeInMinutes,
  recipeComments,
  recipeRef,
}) => {
  const { user } = UserAuth();

  const handleLikeReply = async () => {
    //customize comments object and then update it in firebase
    const comments = recipeComments;
    const reply = comments[index].replies.find(
      (reply) => reply.comment === data.comment
    );
    const ratedBy = reply.ratedBy;

    if (user) {
      if (!ratedBy.includes(user.displayName)) {
        ratedBy.push(user.displayName);

        await updateDoc(recipeRef, {
          comments: comments,
        });
      } else {
        const dislike = ratedBy.filter(
          (username) => username !== user.displayName
        );
  
        reply.ratedBy = dislike;
      }

      await updateDoc(recipeRef, {
        comments: comments,
      });
    }
  };

  return (
    <ReplyContainer>
      <ReplyWrapper>
        <CommentStructure
          userImage={data.userPhoto}
          userName={data.user}
          elapsedTime={calculateElapsedTimeInMinutes(data.addDate)}
          commentContent={data.comment}
          handleLikeComment={() => handleLikeReply()}
          handleDislikeComment={() => handleLikeReply()}
          commentLikes={data.ratedBy.length}
          disabled={data.ratedBy.includes(user.displayName)}
        />
      </ReplyWrapper>
    </ReplyContainer>
  );
};
