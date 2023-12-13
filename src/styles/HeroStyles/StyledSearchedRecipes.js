import styled from "styled-components";

export const StyledSearchedRecipes = styled.ul`
    background-color: white;
    width: calc(100% - 80px);
    max-height: 180px;
    border: 1px solid;
    text-align: left;
    list-style: none;
    border-radius: 10px;
    position: absolute;
    top: 60%;
    left: 0;
    padding: 0;
    overflow-y: auto;

    
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
    

    li {

        &:nth-child(1n) {
            background-color: rgba(190, 190, 190, 0.5);
        }

        &:nth-child(2n) {
            background-color: rgba(167, 167, 167, 0.5);
        }

        a {
            text-decoration: none;
            color: black;
            display: block;
            padding: 10px;
        }

        
    }

    .active {
            background-color: red !important;
    }
`