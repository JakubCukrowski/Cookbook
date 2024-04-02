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

  @media (min-width: 992px) {
    width: 60%;
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
  margin: 30px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
  padding: 20px 40px;
  line-height: 30px;
  border-radius: 6px;

  @media (min-width: 992px) {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }

`;

export const UserImage = styled.img`
  margin-right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Content = styled.p`
  margin: 0;
`
