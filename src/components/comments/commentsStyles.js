import { InputGroup } from "react-bootstrap";
import styled from "styled-components";
import { OrangeButton } from "../../styles/OrangeButton";

export const StyledInputGroup = styled(InputGroup)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  textarea {
    border: 1px solid gray;
    border-top-right-radius: 4px !important;
    border-bottom-right-radius: 4px !important;
  }

  
`;

export const AddCommentButton = styled(OrangeButton)`
  border-radius: 6px !important;
  width: 100%;
  margin: 0 auto !important;
  margin-bottom: 50px !important;

  @media (min-width: 992px) {
    width: 40%;
  }
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin: 30px 0;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
  padding: 20px 10px;
  word-wrap: break-word;
  border-radius: 6px;

  @media (min-width: 992px) {
    margin-left: auto;
    margin-right: auto;
    align-items: flex-start;
  }
`;

export const ReplyContainer = styled.div`
  border-left: 1px solid black;
  width: 95%;
  margin-left: auto;
`;

export const ReplyWrapper = styled(CommentWrapper)`
  width: 95%;
  margin-left: auto;
  margin-right: 0;
`;

export const CommentDataWrapper = styled.div`
  width: 100%;

  @media (min-width: 992px) {
    width: auto;
  }
`;

export const UserImage = styled.img`
  margin-right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Content = styled.p`
  margin: 10px auto;
`;

export const UserName = styled.strong`
  margin-right: 10px;
`;

export const AddDate = styled.span``;

export const LikesWrapper = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  background-color: rgba(225, 159, 37, 0.3);
  padding: 6px;
  border-radius: 4px;

  @media (min-width: 992px) {
    flex-direction: column;
    order: -1;
  }
`;

export const CommentLikes = styled.span`
  font-weight: 700;
`;

export const CommentButtonsWrapper = styled.div`
  margin-left: auto;

  @media (min-width: 992px) {
    align-self: flex-start;
    
  }
`;

const CommentUtilityButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const DeleteCommentButton = styled(CommentUtilityButton)`
  color: red;
`;

export const EditCommentButton = styled(CommentUtilityButton)``;
