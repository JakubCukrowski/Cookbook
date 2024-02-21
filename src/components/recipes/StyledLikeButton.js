import styled from "styled-components";

export const StyledLikeButton = styled.button`
    border: none;
    background-color: transparent;
    z-index: 100;
    color: rgb(33, 37, 41);
    font-size: 50px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0;
    transition: 50ms;

    &.liked {
        color: tomato;
    }

    &:focus {
        border: none;
    }

    @media (min-width: 992px) {
        right: ${props => props.rightTablet};
    }

    @media (min-width: 1200px) {
        right: ${props => props.rightDesktop};
    }

    @media (min-width: 1400px) {
        right: ${props => props.rightXl};
    }

    &:disabled {
        color: red !important; 
    }
`