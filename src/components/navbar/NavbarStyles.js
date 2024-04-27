import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom"

export const StyledNavbar = styled(Navbar)`
    background-color: #e19f25;
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
       
        .nav-item {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`

export const LoggedUserImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`

export const NavbarLink = styled(Link)`
    color: white;
`

export const StyledNavbarToggle = styled(Navbar.Toggle)`
    border-color: white;

    span {
        color: white;
    }
`

export const NotificationsButton = styled.button`
    border: none;
    background-color: transparent;
    font-size: 24px;
    color: white;
    transition: 0.3s;
    margin-right: 4px;

    &:hover {
        color: black;
    }
`