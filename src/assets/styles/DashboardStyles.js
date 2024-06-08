import { Box } from "@mui/material";
import styled from "styled-components";

export const DashboardSection = styled.section`
  padding: 20px 0;
`;

export const StyledBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledUserDetailsBox = styled(Box)`
  @media (min-width: 800px) {
    align-self: flex-end;
  }
`;

export const UserInteractionsBox = styled(Box)`
  @media (min-width: 900px) {
    text-align: end;
  }
`;

export const UtilityButtonsBox = styled(Box)`
  display: flex;
  gap: 10px;
  align-self: flex-start;

  @media (min-width: 600px) {
    margin-left: auto;
    align-self: flex-end;
  }
`;
