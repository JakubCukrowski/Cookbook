import styled from "styled-components";

export const SearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    position: relative;
    height: 50px;
    margin-bottom: 120px;

    @media (min-width: 766px) {
        width: 60%;
    }

    button {
        border-radius: 0;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        background-color: #d8d8d8;
        color: black;
        border: none;
        height: 100%;
        width: 80px;
    }
`