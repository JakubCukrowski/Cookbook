import React, { useEffect, useState } from "react";
import { CommentInput } from "../ui/CommentInput";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { UserAuth } from "../../context/AuthContext";
import { useParams } from "react-router-dom";

export const AddReply = ({ updateIsReplying, findCommentToUpdate }) => {
  const { recipeId } = useParams();
  const { user, recipes } = UserAuth();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);

  const handleCommentInput = (e) => {
    setComment(e.target.value);
    setError(false);
  };

  useEffect(() => {
    const getRecipeComments = async () => {
      const recipeComments = await getDoc(doc(db, "comments", recipeId));
      setComments(recipeComments.data().comments);
    };

    getRecipeComments();
  }, [recipes]);

  const handleButtonClick = async (e) => {
    e.preventDefault();
    const allComments = comments;
    const searchedComment = findCommentToUpdate(allComments);

    searchedComment.comments.push({
      user: user.displayName,
      userPhoto: user.photoURL,
      comment: comment,
      addDate: Date.now(),
      ratedBy: [],
      comments: [],
    });

    await updateDoc(doc(db, "comments", recipeId), {
      comments: allComments
    });

    setComment('')
    updateIsReplying(false)
  };

  return (
    <>
      <CommentInput
        comment={comment}
        onChange={handleCommentInput}
        onClick={handleButtonClick}
        buttonText="Odpowiedz"
        error={error}
      />
    </>
  );
};
