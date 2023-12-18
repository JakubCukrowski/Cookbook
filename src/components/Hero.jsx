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
import { Link, useNavigate } from "react-router-dom";
import Fuse from 'fuse.js'

export const Hero = () => {
    const [queryText, setQueryText] = useState('')
    const [queryResults, setQueryResults] = useState([])
    const {recipes} = UserAuth()
    const [isFocused, setIsFocused] = useState(false)
    const [activeIndex, setActiveIndex] = useState("")
    const navigate = useNavigate();

    const handleInputValue = (e) => {
        setQueryText(e.target.value);
    }

    //logic for keys down/up/enter
    const handleKeyPress = (e) => {

        //prevent from moving cursor to beginning/end of the sentence/word
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault()
        }

        if (e.key === "ArrowDown" && activeIndex === "") {
            setActiveIndex(0)

        } else if (e.key === "ArrowDown" && activeIndex >= 0 && activeIndex < queryResults.length - 1 ) {
            setActiveIndex(prev => prev + 1)

        } else if (e.key === "ArrowUp" && activeIndex > 0) {
            setActiveIndex(prev => prev - 1)
        }

        if (e.key === "Enter" && queryResults.length > 0 && activeIndex !== "") {
            navigate(`/recipes/${queryResults[activeIndex]._id}`)
        }
    }

    //close the results on focus out
    const handleFocusOut = () => {
        const timeoutId = setTimeout(() => {
            setIsFocused(false)
            setQueryText("")
            setQueryResults([])
            setActiveIndex("")
        }, 100);

        return () => clearTimeout(timeoutId)        
    }

    //handle mouse over
    const handleMouseEnter = (index) => {
        setActiveIndex(index)
    }

    //useEffect handles fuse.js library. It looks for names in API
    useEffect(() => {
        if (!queryText) {
            setQueryResults([])
        }

        const fuse = new Fuse(recipes, {
            keys: ['name'],
            threshold: 0.4,
            includeMatches: true
        })

        //results are pushed to queryresults state
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
                        onKeyDown={handleKeyPress}
                        autoComplete="off"
                        onChange={handleInputValue}
                        onFocus={() => setIsFocused(true)} 
                        onBlur={handleFocusOut}
                        type="text" 
                        placeholder={isFocused ? "Wpisz nazwę potrawy, lub składnik" : "Znajdź przepis"}
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
                        {queryResults.map((recipe, index) => 
                        <li key={index}>
                            <Link
                            onMouseEnter={() => handleMouseEnter(index)} 
                                className={activeIndex === index ? "active" : null} 
                                tabIndex="1" 
                                to={`/recipes/${recipe._id}`}>
                                {recipe.name}
                            </Link>
                        </li>)}
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