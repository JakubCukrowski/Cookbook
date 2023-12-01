import React from "react";
import { StyledHeroSection } from "../styles/HeroStyles/StyledHeroSection";
import heroBackgroundImage from '../images/heroImage.jpg'
import { StyledInput } from "../styles/HeroStyles/StyledInput";
import { HeroFlexContainer } from "../styles/Containers";
import { SearchBarContainer } from "../styles/HeroStyles/SearchBarContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {Button, Container } from "react-bootstrap";

export const Hero = () => {
    return (
        <StyledHeroSection backgroundimage={heroBackgroundImage}> 
            <h1 style={{textAlign: "center"}}>Cześc, na co masz dzisiaj ochotę?</h1>
            <HeroFlexContainer direction="column" justify="center" align="center" fluid>
                <SearchBarContainer>
                    <StyledInput type="text" placeholder="Znajdź przepis" name="searchbar"/>
                    <Button><FontAwesomeIcon icon={faMagnifyingGlass}/></Button>
                </SearchBarContainer>

                <h2>Możesz również poszukać czegoś w naszych najpopularniejszych kategoriach</h2>
                
                <Container>
                    <Button variant="dark">Popularne</Button>{' '}
                    <Button variant="dark">Popularne</Button>{' '}
                    <Button variant="dark">Popularne</Button>{' '}
                    <Button variant="dark">Popularne</Button>{' '}
                </Container>
            </HeroFlexContainer>
        </StyledHeroSection>        
    )
}