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
  padding: 20px;
  box-shadow: 0 0 6px 2px #e19f2540;

  @media (min-width: 600px) and (max-width: 900px) {
    padding: 20px 120px;
  }

  @media (min-width: 1000px) {
    padding: 40px 80px;
  }
`;

export const CustomizedRecipesContainer = styled(Box)`
  text-align: center;
  margin-top: 20px;
  overflow: auto;
  max-height: 90vh;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #e19f25;
  }

  @media (min-width: 1000px) {
    max-height: 50vh;
  }

  @media (min-width: 600px) and (max-width: (900px)) {
    padding: 100px 100px;
  }
`;
