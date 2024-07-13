import { Box, CircularProgress } from "@mui/material";
import styled from "styled-components";

const StyledBox = styled(Box)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircularProgressPage = () => {
  return (
    <>
      <StyledBox>
        <CircularProgress sx={{position: "static", zIndex: 200}} color="inherit"/>
      </StyledBox>
    </>
  );
};

export default CircularProgressPage;
