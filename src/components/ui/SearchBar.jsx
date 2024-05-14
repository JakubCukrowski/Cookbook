import React, { useState, useEffect, useRef } from "react";
import {
  SearchBarContainer,
  StyledH1,
  SearchBarWrapper,
  StyledSearchedRecipes,
  StyledInput,
} from "../../assets/styles/SearchBarStyles";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Fuse from "fuse.js";
import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export const SearchBar = () => {
  const {
    recipes,
    updateQueryResults,
    queryResults,
    queryText,
    updateQueryText,
  } = UserAuth();
  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState("");
  const [count, setCount] = useState(0);

  const navigate = useNavigate();
  const ulRef = useRef(null);
  const linkRefs = useRef([]);

  const addLinkRef = (el) => {
    //if element exsists and it's not included in linkrefs array, it's pushed to the array
    if (el && !linkRefs.current.includes(el)) {
      linkRefs.current.push(el);
    }
  };

  const handleInputValue = (e) => {
    updateQueryText(e.target.value);
  };

  //logic for keys down/up/enter
  const handleKeyPress = (e) => {
    // prevent from moving cursor to beginning/end of the sentence/word
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
    }

    //first press of arrow down, sets active index to 0, adds to count height of the li element
    if (e.key === "ArrowDown" && activeIndex === "") {
      setActiveIndex(0);
      setCount((prev) => prev + Math.floor(linkRefs.current[0].offsetHeight));

      //next press, after active index === 0, goes down as long as the ul elements length, in that case queryResults
    } else if (
      e.key === "ArrowDown" &&
      activeIndex >= 0 &&
      activeIndex < queryResults.length - 1
    ) {
      setActiveIndex((prev) => prev + 1);
      setCount((prev) => prev + linkRefs.current[activeIndex].offsetHeight);

      //considers situation where count is already equal to the ul height, and then moves the scrollbar of the whole ul height down
      if (
        count >=
        ulRef.current.offsetHeight - linkRefs.current[activeIndex].offsetHeight
      ) {
        ulRef.current.scrollTop +=
          ulRef.current.offsetHeight -
          linkRefs.current[activeIndex].offsetHeight;
        setCount(0);
      }

      //if it meets the last item, it sets count state equal to the ul height
      if (activeIndex + 1 === queryResults.length - 1) {
        setCount(300);
      }

      //if the user press arrow up it subtracts the count and sets active index to lower one, subbtracted by 1
    } else if (e.key === "ArrowUp" && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
      setCount(
        (prev) => prev - Math.floor(linkRefs.current[activeIndex].offsetHeight)
      );

      if (count === linkRefs.current[activeIndex].offsetHeight) {
        ulRef.current.scrollTop -= ulRef.current.offsetHeight;
      }

      if (
        count === linkRefs.current[activeIndex].offsetHeight &&
        activeIndex > 0
      ) {
        setCount(ulRef.current.offsetHeight);
      }

      //if reaches first element
    } else if (e.key === "ArrowUp" && activeIndex === 0) {
      setActiveIndex("");
      setCount(0);
    }

    if (e.key === "Backspace") {
      linkRefs.current = [];
    }

    if (e.key === "Enter" && queryResults.length > 0 && activeIndex !== "") {
      navigate(`/recipes/${queryResults[activeIndex].id}`);
      updateQueryText("");
    }

    if (e.key === "Enter" && activeIndex === "" && queryText.length >= 2) {
      navigate(`/search?query=${queryText}`);
    }

    // if (e.key === "Enter" && activeIndex === "" && queryText.length < 2) {
    //   setInputError(true);
    // }
  };

  const handleFocusOut = () => {
    const timeoutId = setTimeout(() => {
      setIsFocused(false);
      setActiveIndex("");
      setCount(0);
    }, 100);

    return () => clearTimeout(timeoutId);
  };

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
    setCount((index + 1) * linkRefs.current[index].offsetHeight);
  };

  //useEffect handles fuse.js library.
  useEffect(() => {
    if (!queryText) {
      updateQueryResults([]);
    }

    const fuse = new Fuse(recipes, {
      keys: ["name", "tags"],
      threshold: 0.3,
      includeMatches: true,
    });

    //results are pushed to queryresults state
    const result = fuse.search(queryText).map((res) => res.item);

    updateQueryResults(result);
  }, [queryText]);

  //to reset active index when clicked once activeIndex > 0
  const resetActiveIndex = () => {
    if (activeIndex !== "") setActiveIndex("");
    setCount(0);
  };

  return (
    <SearchBarContainer>
      <StyledH1>Cześć, na co masz dzisiaj ochotę?</StyledH1>
      <SearchBarWrapper>
        <StyledInput
          onKeyDown={handleKeyPress}
          onClick={resetActiveIndex}
          autoComplete="off"
          onChange={handleInputValue}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={handleFocusOut}
          type="search"
          placeholder={
            isFocused
              ? "Wpisz nazwę potrawy lub rodzaj posiłku"
              : "Znajdź przepis"
          }
          name="searchbar"
          value={queryText}
        />

        {/* <OrangeButton
          onClick={(e) => {
            e.preventDefault();

            if (queryText.length >= 2) {
              navigate(`/search?query=${queryText}`);
            } else {
              setInputError(true);
            }
          }}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </OrangeButton> */}
        {queryText.length > 1 && (
          <IconButton
            onClick={() => updateQueryText("")}
            sx={{ position: "absolute", right: 10 }}
          >
            <ClearIcon />
          </IconButton>
        )}
      </SearchBarWrapper>
      {queryText.length >= 2 && queryResults.length > 0 && isFocused ? (
        <StyledSearchedRecipes ref={ulRef}>
          {queryResults.map((recipe, index) => (
            <li key={index}>
              <Link
                ref={addLinkRef}
                onMouseEnter={() => handleMouseEnter(index)}
                className={activeIndex === index ? "active" : null}
                id={`recipe-${index}`}
                tabIndex="1"
                to={`/recipes/${recipe.id}`}
              >
                {recipe.name}
              </Link>
            </li>
          ))}
        </StyledSearchedRecipes>
      ) : null}
    </SearchBarContainer>
  );
};
