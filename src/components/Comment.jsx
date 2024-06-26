import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { updateDoc, doc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import {
  Content,
  CommentWrapper,
  UserImage,
  UserName,
  AddDate,
  LikesWrapper,
  CommentLikes,
  CommentButtonsWrapper,
  DeleteCommentButton,
  EditCommentButton,
  CommentDataWrapper,
} from "../assets/styles/commentsStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faMinus,
  faPlus,
  faReply,
  faTrashCan,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { OrangeButton } from "../assets/styles/Buttons";
import { AddReply } from "../components/ui/AddReply";
import { Form } from "react-bootstrap";
import { BootstrapModal } from "./BootstrapModal";

export const Comment = ({ comment, index, currentDate, comments }) => {
  const { user } = UserAuth();
  //state for reply button
  const [isReplying, setIsReplying] = useState(false);
  //state for edit comment button
  const [isEditing, setIsEditing] = useState(false);
  //state of edited comment
  const [editedComment, setEditedComment] = useState(comment.comment);

  const { recipeId } = useParams();
  const recipeRef = doc(db, "comments", recipeId);

  //edit comment textarea reference
  const textareaRef = useRef(null);

  //state for popup, after clicking delete comment button
  const [isVisible, setIsVisible] = useState(false);

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

  //find a comment, which has to be updated
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
      return comments.find(
        (singleComment) => singleComment.comment === comment.comment
      );
    }
  };

  //function returns all recipe comments
  const getRecipeComments = () => {
    const recipeComments = comments;
    return recipeComments;
  };

  //rating buttons
  const handleRateComment = async () => {
    const recipeComments = getRecipeComments();
    const commentToRate = findCommentToUpdate(recipeComments);

    if (user) {
      if (!commentToRate.ratedBy.includes(user.displayName)) {
        commentToRate.ratedBy.push(user.displayName);
      } else {
        const dislike = commentToRate.ratedBy.filter(
          (username) => username !== user.displayName
        );

        commentToRate.ratedBy = dislike;
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
    setIsReplying(value);
  };

  //handle edit comment
  const handleEdit = async (e) => {
    e.preventDefault();
    const recipeComments = getRecipeComments();
    const commentToEdit = findCommentToUpdate(recipeComments);
    commentToEdit.comment = textareaRef.current.value;

    try {
      await updateDoc(recipeRef, {
        comments: recipeComments,
      });
      setIsEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  //check if it's a top comment, if not, if it's included in the comment array
  const checkIfIncluded = (comments, targetComment) => {
    for (const comment of comments) {
      //top level comment
      if (comment === targetComment) {
        return comments;
      }

      if (comment.comments && comment.comments.includes(targetComment)) {
        return comment;
      }

      if (comment.comments) {
        const upperLevelComment = checkIfIncluded(
          comment.comments,
          targetComment
        );

        if (upperLevelComment) {
          return upperLevelComment;
        }
      }
    }
  };

  //handle delete comment confirmation
  const handleDelete = async (e) => {
    const recipeComments = getRecipeComments();
    //object or array, depends of the comment's level
    const commentItem = checkIfIncluded(recipeComments, comment);

    if (Array.isArray(commentItem)) {
      const commentsWithoutDeleted = recipeComments.filter(targetComment => targetComment !== comment)

      await updateDoc(recipeRef, {
        comments: commentsWithoutDeleted
      })
      
    } else {
      const updatedCommentsArray = commentItem.comments.filter(
        (targetComment) => targetComment !== comment
      );
      commentItem.comments = updatedCommentsArray;

      try {
        await updateDoc(recipeRef, {
          comments: recipeComments,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      {isVisible && (
        <BootstrapModal
          withTitle={true}
          modalTitle="Czy napewno chcesz usunąć komentarz?"
          title={`"${comment.comment}"`}
          onCancel={() => setIsVisible(false)}
          onConfirm={handleDelete}
        />
      )}
      <CommentWrapper>
        <CommentDataWrapper>
          <UserImage src={comment.userPhoto} alt="user" />
          <UserName>{comment.user}</UserName>
          <AddDate>{calculateElapsedTimeInMinutes(comment.addDate)}</AddDate>
          {isEditing ? (
            <Form.Control
              ref={textareaRef}
              // isInvalid={error && comment.length < 5}
              onChange={(e) => {
                setEditedComment(e.target.value);
              }}
              value={editedComment}
              style={{
                resize: "none",
                width: "100%",
                height: 120,
                marginTop: 10,
              }}
              size="sm"
              as="textarea"
              aria-label="With textarea"
            />
          ) : (
            <Content>{comment.comment}</Content>
          )}
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
          {user && user.displayName === comment.user && !isEditing && (
            <>
              <DeleteCommentButton onClick={() => setIsVisible(true)}>
                <FontAwesomeIcon icon={faTrashCan} /> {""} Skasuj
              </DeleteCommentButton>
              <EditCommentButton onClick={() => setIsEditing((prev) => !prev)}>
                <FontAwesomeIcon icon={faEdit} /> {""} Edytuj
              </EditCommentButton>
            </>
          )}
          {isEditing && (
            <>
              <OrangeButton onClick={() => setIsEditing(false)}>
                Anuluj
              </OrangeButton>{" "}
              <OrangeButton onClick={handleEdit}>Potwierdź</OrangeButton>
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
        <div style={{ width: "99%", marginLeft: "auto" }}>
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
