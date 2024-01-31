import React, { useEffect, useRef, useState } from "react";
import { StyledHeroSection } from "./StyledHeroSection";
import heroBackgroundImage from '../../images/heroImage.jpg'
import { StyledInput } from "./StyledInput";
import { HeroFlexContainer, PopularButtonsContainer } from "../../styles/Containers";
import { SearchBarContainer } from "./SearchBarContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {Button } from "react-bootstrap";
import { SearchBarWrapper } from "./SearchBarWrapper";
import { StyledSearchedRecipes } from "./StyledSearchedRecipes";
import { UserAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Fuse from 'fuse.js'
import { StyledH1 } from "./StyledH1";

export const Hero = () => {
    const [queryText, setQueryText] = useState('')
    const {recipes, updateQueryResults, queryResults} = UserAuth()
    const [isFocused, setIsFocused] = useState(false)
    const [activeIndex, setActiveIndex] = useState("")
    const [count, setCount] = useState(0)
    const navigate = useNavigate();
    const ulRef = useRef(null)
    const linkRefs = useRef([])

    const addLinkRef = (el) => {
        //if element exsists and it's not included in linkrefs array, it's pushed to the array
        if (el && !linkRefs.current.includes(el)) {
            linkRefs.current.push(el)
        }
    }

    const handleInputValue = (e) => {
        setQueryText(e.target.value);
    }

    //logic for keys down/up/enter
    const handleKeyPress = (e) => {
        // prevent from moving cursor to beginning/end of the sentence/word
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault()
        }

        if (e.key === "ArrowDown" && activeIndex === "") {
            setActiveIndex(0)

            setCount(prev => prev + linkRefs.current[0].offsetHeight)
            

        } else if (e.key === "ArrowDown" && activeIndex >= 0 && activeIndex < queryResults.length - 1 ) {
            setActiveIndex(prev => prev + 1)

            setCount(prev => prev + linkRefs.current[activeIndex].offsetHeight)

            if (count > ulRef.current.offsetHeight - linkRefs.current[activeIndex].offsetHeight) {
                ulRef.current.scrollTop += ulRef.current.offsetHeight
            }
            

        } else if (e.key === "ArrowUp" && activeIndex > 0) {
            setActiveIndex(prev => prev - 1)

            setCount(prev => prev - linkRefs.current[activeIndex].offsetHeight)


            if (count <= ulRef.current.offsetHeight - document.getElementById(`recipe-${activeIndex - 1}`).offsetHeight) {
                ulRef.current.scrollTop -= ulRef.current.offsetHeight
            }
        }
        
        if (e.key === "Backspace") {
            linkRefs.current = []
        }

        if (e.key === "Enter" && queryResults.length > 0 && activeIndex !== "") {
            navigate(`/recipes/${queryResults[activeIndex].id}`)
        }

    }

    //close the results on focus out
    const handleFocusOut = () => {
        const timeoutId = setTimeout(() => {
            setIsFocused(false)     
            setActiveIndex("") 
        }, 100);

        return () => clearTimeout(timeoutId)
    }

    //handle mouse over
    const handleMouseEnter = (index) => {
        setActiveIndex(index)
        setCount((index + 1) * linkRefs.current[index].offsetHeight)
    }

    //useEffect handles fuse.js library.
    useEffect(() => {
        if (!queryText) {
            updateQueryResults([])
        }

        const fuse = new Fuse(recipes, {
            keys: ['name'],
            threshold: 0.3,
            includeMatches: true
        })

        //results are pushed to queryresults state
        const result = fuse.search(queryText).map(res => res.item)

        updateQueryResults(result)
    }, [queryText])

    return (
        <StyledHeroSection backgroundimage={heroBackgroundImage}> 
            <StyledH1>Cześć, na co masz dzisiaj ochotę?</StyledH1>
            <HeroFlexContainer direction="column" justify="center" align="center" fluid>

                <SearchBarContainer>
                    <SearchBarWrapper>
                        <StyledInput 
                        onKeyDown={handleKeyPress}
                        autoComplete="off"
                        onChange={handleInputValue}
                        onFocus={() => setIsFocused(true)} 
                        onBlur={handleFocusOut}
                        type="search" 
                        placeholder={isFocused ? "Wpisz nazwę potrawy, lub składnik" : "Znajdź przepis"}
                        name="searchbar" 
                        value={queryText}
                    />
                        <Button onClick={(e) => {
                            e.preventDefault()
                            navigate(`/search?querry=${queryText}`)
                        }}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </Button>
                    </SearchBarWrapper>
                    {queryText.length >= 2 
                    && queryResults.length > 0
                    && isFocused
                    ? <StyledSearchedRecipes ref={ulRef}> 
                        {queryResults.map((recipe, index) => 
                        <li key={index}>
                            <Link
                                ref={addLinkRef}
                                onMouseEnter={() => handleMouseEnter(index)} 
                                className={activeIndex === index ? "active" : null}
                                id={`recipe-${index}`} 
                                tabIndex="1" 
                                to={`/recipes/${recipe.id}`}>
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