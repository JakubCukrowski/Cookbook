import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledH1 = styled.h1`
  text-align: center;
`;

export const SearchBarContainer = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: 992px) {
    width: 60%;
  }
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const StyledInput = styled(TextField)`
  && {
    width: 100%;
    margin: 0 auto;

    fieldset {
      background-color: white;
      z-index: -10;
      border-radius: 30px;
    }

    input {
      font-size: 20px;

      &::placeholder {
        transition: 0.2s;
      }
    }

    input[type="search"]::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }

    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
  }
`;

export const StyledSearchedRecipes = styled.ul`
  background-color: white;
  width: 100%;
  max-height: 200px;
  border: 1px solid;
  text-align: left;
  list-style: none;
  border-radius: 10px;
  position: absolute;
  top: 100%;
  left: 0;
  padding: 0;
  overflow-y: auto;
  scroll-behavior: smooth;
  z-index: 100;

  @media (min-width: 992px) {
    max-height: 300px;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e19f25;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }

  li {
    @media (min-width: 992px) {
      height: 50px !important;
    }
  }

  a {
    text-decoration: none;
    color: black;
    display: block;
    padding: 10px;

    @media (min-width: 992px) {
      height: 100%;
    }
  }

  .active {
    background-color: #e19f25 !important;
    color: white !important;
  }
`;
