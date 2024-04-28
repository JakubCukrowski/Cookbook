import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.color};
    font-size: ${props => props.fontsize};
    width: ${props => props.width};

    &:hover {
        opacity: 0.7;
    }
`