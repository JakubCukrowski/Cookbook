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

export const CustomizedRecipesWrapper = styled(Box)`
  border-radius: 10px;
  position: relative;
  box-shadow: 0 0 6px 2px #e19f2540;
  max-height: 90vh;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: #e19f25;
  }

  @media (min-width: 900px) { 
    max-height: 60vh;
  }
`;

export const CustomizedRecipesContainer = styled(Box)`
  text-align: center;
  padding: 20px;
`;
