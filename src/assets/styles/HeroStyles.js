import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledHeroSection = styled.section`
  width: 100%;
  height: 100vh;
  background: transparent center no-repeat
    url(${(props) => props.backgroundimage});
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 992px) {
    background-attachment: fixed;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  h1 {
    color: white;
    position: relative;
    z-index: 100;
  }

  h2 {
    margin-bottom: 20px;
  }
`;
