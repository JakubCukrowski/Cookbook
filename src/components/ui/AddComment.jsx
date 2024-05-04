import React, { useState } from "react";
import { FlexContainer } from "../../assets/styles/Containers";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { CommentInput } from "../ui/CommentInput";

export const AddComment = ({ searchedRecipe }) => {
  const { user } = UserAuth();
  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);

  const handleCommentInput = (e) => {
    setComment(e.target.value);
    setError(false);
  };

  const handleAddComment = async (e) => {
    e.preventDefault();

    if (comment.length < 5) {
      setError(true);
    } else {
      const recipeCommentsRef = await getDoc(
        doc(db, "comments", searchedRecipe.id)
      );
      if (recipeCommentsRef.exists()) {
        await updateDoc(doc(db, "comments", searchedRecipe.id), {
          comments: arrayUnion({
            user: user.displayName,
            userPhoto: user.photoURL,
            comment: comment,
            addDate: Date.now(),
            ratedBy: [],
            comments: [],
          }),
        });
      } else {
        await setDoc(doc(db, "comments", searchedRecipe.id), {
          comments: arrayUnion({
            user: user.displayName,
            userPhoto: user.photoURL,
            comment: comment,
            addDate: Date.now(),
            ratedBy: [],
            comments: [],
          }),
        });
        setComment("");
      }
      setComment("");
    }
  };

  return (
    <FlexContainer justify="center" align="center" direction="column">
      {user ? (
        <CommentInput
          comment={comment}
          onChange={handleCommentInput}
          onClick={handleAddComment}
          buttonText="Opublikuj"
          error={error}
        />
      ) : (
        <div>
          <Link to="/signin">Zaloguj się</Link>
          <span>, aby dodać komentarz</span>
        </div>
      )}
    </FlexContainer>
  );
};
