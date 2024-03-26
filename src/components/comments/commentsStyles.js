import { InputGroup } from "react-bootstrap";
import styled from "styled-components";

export const StyledInputGroup = styled(InputGroup)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media (min-width: 992px) {
    width: 60%;
  }

`;
