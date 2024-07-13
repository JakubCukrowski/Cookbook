import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledSignSection = styled.section`
  color: white;
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent center no-repeat
    url(${(props) => props.backgroundimage});
  background-size: cover;
  background-position: cover;
  background-attachment: fixed;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const StyledForm = styled.form`
  border: 1px solid white;
  padding: 0 30px;
  border-radius: 10px;
  width: 100%;
  margin: 50px auto;
  position: static;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  @media (min-width: 992px) {
    width: 40%;
  }
`;

export const StyledTextField = styled(TextField)`
  && {
    width: 100%;
    margin-top: 20px;
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
