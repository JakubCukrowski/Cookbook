import styled from "styled-components";

export const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    padding-bottom: 30px;
    position: relative;

    @media (min-width: 992px) {
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