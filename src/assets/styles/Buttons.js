import { Button } from "@mui/material";
import styled from "styled-components";

export const OrangeButton = styled(Button)`
  && {
    background-color: #e19f25;
    color: white;
    min-width: 0;
    text-transform: none;
    font-size: 16px;

    &:hover {
      background-color: #cd8500;
    }
  }
`;

export const ConfirmButton = styled(Button)`
  && {
    border: 1px solid #e19f25;
    background-color: #e19f25;
    margin: 20px 0;
    display: block;

    &:hover {
      border: 1px solid white;
      background-color: #e19f25;
    }
  }
`;

export const DeleteRecipeButton = styled(OrangeButton)`
  && {
    background-color: #dc3545;
    transition: 0.3s;

    &:hover {
      background-color: #B62432;
    }
  }
`;
