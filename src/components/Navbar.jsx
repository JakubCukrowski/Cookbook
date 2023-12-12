import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { StyledLink, StyledNavbarColapse } from '../styles/NavbarStyles/StyledNavbar';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const CustomNavbar = () => {
  const [userLogged, setUserLogged] = useState(false)

  const pathname = useLocation().pathname

  return (
    <>
      <Navbar 
        sticky={pathname !== "/" ? "top" : ""} 
        fixed={pathname === "/" ? "top" : ""} 
        variant="dark" 
        bg="dark" 
        expand="lg">
        <Container fluid>
          <StyledLink to={'/'}>Przepisowa pasja</StyledLink>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <StyledNavbarColapse id="navbar-dark-example">
            <Nav>
              {userLogged 
              ? 
              <>
                <Nav.Item>
                  <Nav.Link href='#'>Zapisane przepisy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='#'>Twoje przepisy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='#'>Polubione przepisy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='#'>Planer</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='#'>Wyloguj</Nav.Link>
                </Nav.Item>
              </>
              :
              <Nav.Item>
                <Nav.Link href='#'>Zaloguj się</Nav.Link>
              </Nav.Item>}
            </Nav>
          </StyledNavbarColapse>
        </Container>
      </Navbar>
    </>   
  );
}
