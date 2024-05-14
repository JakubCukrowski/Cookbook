import React from "react";
import heroBackgroundImage from "../assets/images/heroImage.jpg";
import { HeroFlexContainer } from "../assets/styles/Containers";
import {
  StyledHeroSection,
} from "../assets/styles/HeroStyles";
import { PopularButtons } from "../components/ui/PopularButtons";
import { SearchBar } from "./ui/SearchBar";

export const Hero = () => {
  
  return (
    <StyledHeroSection backgroundimage={heroBackgroundImage}>
      <HeroFlexContainer
        direction="column"
        justify="center"
        align="center"
        fluid
      >
        <SearchBar />
        <PopularButtons/>
      </HeroFlexContainer>
    </StyledHeroSection>
  );
};
