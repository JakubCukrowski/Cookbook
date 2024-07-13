import { Box } from "@mui/material";
import styled from "styled-components";

export const ModalContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  -webkit-box-shadow: 0 0 6px 4px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0 0 6px 4px rgba(66, 68, 90, 1);
  box-shadow: 0 0 6px 4px rgba(66, 68, 90, 1);
  background-color: white;
  border-radius: 8px;
`;
