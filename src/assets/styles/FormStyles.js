import { TextField } from "@mui/material";
import { Form } from "formik";
import styled from "styled-components";

export const StyledInputLabel = styled.label`
  && {
    color: white;
    background-color: #e19f25;
    text-align: center;
    cursor: pointer;
    padding: 10px;
    border-radius: 4px;
    transition: 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const StyledRecipeForm = styled(Form)`
  margin-top: 50px;
  padding: 40px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

export const PreparationStepTextField = styled(TextField)`
  && {
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #e19f25;
    }

    .css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root {
        padding: 30px;
    }
  }
`;
