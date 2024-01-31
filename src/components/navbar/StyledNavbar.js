import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const StyledNavbar = styled(Navbar)`
    margin-bottom: 30px;
`

export const StyledLink = styled(Link)`
    font-family: 'Gloria Hallelujah', cursive;
    font-size: 1.4rem;
    text-decoration: none;
    color: white;
`

export const StyledNavbarColapse = styled(Navbar.Collapse)`
    @media (min-width: 992px) {
        flex-basis: 0;
        flex-grow: 0;
    }
`