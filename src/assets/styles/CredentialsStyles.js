import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledSignSection = styled.section`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledForm = styled.form`
  background-color: white;
  /* border: 1px solid rgb(33, 37, 41); */
  box-shadow: 0 0 8px 2px rgb(33, 37, 41);
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 50px;

  @media (min-width: 992px) {
    width: 50%;
  }
`;

export const StyledTextField = styled(TextField)`
  && {
    width: 100%;
    margin: 20px 0;

    fieldset {
      border: 1px solid rgb(33, 37, 41);
    }

    label {
      color: rgb(33, 37, 41) !important;
    }

    .MuiInputBase-root {
      &:hover > .MuiOutlinedInput-notchedOutline {
        border-color: rgba(33, 37, 41, 0.7) !important;
      }
    }
  }
`;
