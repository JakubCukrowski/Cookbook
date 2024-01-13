import styled from "styled-components";

export const StyledSearchedRecipes = styled.ul`
    background-color: white;
    width: calc(100% - 80px);
    height: 200px;
    border: 1px solid;
    text-align: left;
    list-style: none;
    border-radius: 10px;
    position: absolute;
    top: 70%;
    left: 0;
    padding: 0;
    overflow-y: auto;
    scroll-behavior: smooth;

    @media (min-width: 992px) {
        height: 260px;
    }

    
    &::-webkit-scrollbar {
    width: 10px;
    }

    &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
    background: rgb(33, 37, 41); 
    border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
    background: #b30000; 
    }

    a {
        text-decoration: none;
        color: black;
        display: block;
        padding: 10px;

        /* add different background every one link!! */

    }

    .active {
        background-color: rgb(33, 37, 41) !important;
        color: white !important;
    }

`