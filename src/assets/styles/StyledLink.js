import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.color};
    font-size: ${props => props.fontsize};
    width: ${props => props.width};
    position: static;
    z-index: 2000;

    &:hover {
        opacity: 0.7;
    }
`

export const StyledHomeLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 20px;
    font-family: "Gloria Hallelujah";
`