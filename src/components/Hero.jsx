import React, { useEffect, useState } from "react";
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
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Fuse from 'fuse.js'

export const Hero = () => {
    const [queryText, setQueryText] = useState('')
    const [queryResults, setQueryResults] = useState([])
    const {recipes} = UserAuth()

    const handleInputValue = (e) => {
        setQueryText(e.target.value);
    }

    useEffect(() => {
        if (!queryText) {
            setQueryResults([])
        }

        const fuse = new Fuse(recipes, {
            keys: ['name'],
            threshold: 0.3
        })

        const result = fuse.search(queryText).map(res => res.item)
        setQueryResults(result)
    }, [queryText])

    return (
        <StyledHeroSection backgroundimage={heroBackgroundImage}> 
            <h1 style={{textAlign: "center"}}>Cześć, na co masz dzisiaj ochotę?</h1>
            <HeroFlexContainer direction="column" justify="center" align="center" fluid>

                <SearchBarContainer>
                    <SearchBarWrapper>
                        <StyledInput 
                        autoComplete="off"
                        onChange={handleInputValue} 
                        type="text" 
                        placeholder="Znajdź przepis" 
                        name="searchbar" 
                        value={queryText}
                    />
                        <Button>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </Button>
                    </SearchBarWrapper>
                    {queryText.length > 2 
                    && queryResults.length > 0
                    ? <StyledSearchedRecipes>
                        {queryResults.map((recipe, index) => <li key={index}><Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link></li>)}
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