import React, { useState } from "react";
import { StyledHeroSection } from "../styles/HeroStyles/StyledHeroSection";
import heroBackgroundImage from '../images/heroImage.jpg'
import { StyledInput } from "../styles/HeroStyles/StyledInput";
import { HeroFlexContainer, PopularButtonsContainer } from "../styles/Containers";
import { SearchBarContainer } from "../styles/HeroStyles/SearchBarContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {Button } from "react-bootstrap";
import { SearchBarWrapper } from "../styles/HeroStyles/SearchBarWrapper";
import { StyledSearchedRecipes } from "../styles/HeroStyles/StyledSearchedRecipes";

export const Hero = ({recipes}) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <StyledHeroSection backgroundimage={heroBackgroundImage}> 
            <h1 style={{textAlign: "center"}}>Cześć, na co masz dzisiaj ochotę?</h1>
            <HeroFlexContainer direction="column" justify="center" align="center" fluid>

                <SearchBarContainer>
                    <SearchBarWrapper>
                        <StyledInput 
                        className={inputValue.length > 0 ? 'no-radius-left-bottom' : ""}
                        onChange={handleInputValue} 
                        type="text" 
                        placeholder="Znajdź przepis" 
                        name="searchbar" 
                        value={inputValue}
                    />
                        <Button className={inputValue.length > 0 ? 'no-radius-right-bottom' : ""}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </Button>
                    </SearchBarWrapper>
                    {inputValue.length > 0
                    ? <StyledSearchedRecipes>
                        {recipes.map((recipe, index) => recipe.name.toLowerCase().includes(inputValue.toLowerCase()) 
                        ? <a key={index} href="#"><li>{recipe.name}</li></a> : null)}
                    </StyledSearchedRecipes> 
                    : null}

                </SearchBarContainer>
                

                <h2>Możesz również poszukać czegoś w naszych najpopularniejszych kategoriach</h2>
                
                <PopularButtonsContainer>
                    <Button variant="dark">Popularne</Button>
                    <Button variant="dark">Popularne</Button>
                    <Button variant="dark">Popularne</Button>
                    <Button variant="dark">Popularne</Button>
                </PopularButtonsContainer>
            </HeroFlexContainer>
        </StyledHeroSection>        
    )
}