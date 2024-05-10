import { FormControl, TextField } from "@mui/material";
import styled from "styled-components";

export const StyledSignSection = styled.section`
  color: white;
  background-color: rgb(33, 37, 41);
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledForm = styled.form`
  border: 1px solid white;
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
      border: 1px solid white;
    }

    label {
      color: white !important;
    }

    input {
      color: white;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .MuiInputBase-root {
        &:hover > .MuiOutlinedInput-notchedOutline {
          border-color: rgba(255, 255, 255, 0.7) !important;
        }
    }
  }
`;
