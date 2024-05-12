import { Button } from "@mui/material";
import styled from "styled-components";

export const OrangeButton = styled(Button)`
  && {
    background-color: #e19f25;
    transition: 0.4s ease;
    border: none;
    color: white;

    &:hover {
      background-color: #cd8500;
    }
  }
`;
