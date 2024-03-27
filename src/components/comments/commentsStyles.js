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

  @media (min-width: 992px) {
    width: 40%;
  }
`
