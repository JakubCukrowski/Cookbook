import styled from "styled-components";

export const LikeButton = styled.button`
    position: absolute;
    border: none;
    top: ${props => props.top};
    right: ${props => props.right};
    background-color: transparent;
    z-index: 100;
    color: gray;
    border-radius: 50%;
    font-size: 50px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0;
    transition: 200ms;

    &:hover {
        color: red;
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
`