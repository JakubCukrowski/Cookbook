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

    // function to normalize the string => ę === e etc.
    const normalizeString = (string) => 
        string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()

    //filters recipes to match input word/s
    const filteredRecipes = recipes.filter(recipe => {
        const normalizedInput = normalizeString(inputValue)
        const normalizedRecipe = normalizeString(recipe.name)
        return normalizedRecipe.includes(normalizedInput)
    })

    return (
        <StyledHeroSection backgroundimage={heroBackgroundImage}> 
            <h1 style={{textAlign: "center"}}>Cześć, na co masz dzisiaj ochotę?</h1>
            <HeroFlexContainer direction="column" justify="center" align="center" fluid>

                <SearchBarContainer>
                    <SearchBarWrapper>
                        <StyledInput 
                        onChange={handleInputValue} 
                        type="text" 
                        placeholder="Znajdź przepis" 
                        name="searchbar" 
                        value={inputValue}
                    />
                        <Button>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </Button>
                    </SearchBarWrapper>
                    {inputValue.length > 2 
                    && filteredRecipes.length > 0
                    ? <StyledSearchedRecipes>
                        {filteredRecipes.map((recipe, index) => <li key={index}><a href="#">{recipe.name}</a></li>)}
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