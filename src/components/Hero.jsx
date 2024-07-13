import React from "react";
import heroBackgroundImage from "../assets/images/heroImage.jpg";
import { PopularButtons } from "../components/ui/PopularButtons";
import { SearchBar } from "./ui/SearchBar";
import styled from "styled-components";
import { Container } from "@mui/material";


const StyledHeroSection = styled.section`
  color: white;
  width: 100%;
  background: transparent center no-repeat
    url(${(props) => props.backgroundimage});
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (min-width: 992px) {
      height: 100vh;
      background-attachment: fixed;
      justify-content: space-around;
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
  `;

  const StyledContainer = styled(Container)`
    position: relative;
    z-index: 200;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 50px 0;
  `;
  
export const Hero = () => {
  return (
    <StyledHeroSection backgroundimage={heroBackgroundImage}>
      <StyledContainer>
        <SearchBar />
        <PopularButtons />
      </StyledContainer>
    </StyledHeroSection>
  );
};
