import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const StyledNavbarBrand = styled(Navbar.Brand)`
    font-family: 'Gloria Hallelujah', cursive;
`

export const StyledNavbarColapse = styled(Navbar.Collapse)`
    @media (min-width: 992px) {
        flex-basis: 0;
        flex-grow: 0;
    }
`