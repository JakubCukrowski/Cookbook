import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { StyledNavbarBrand, StyledNavbarColapse } from '../styles/NavbarStyles/StyledNavbar';
import { useState } from 'react';

export const CustomNavbar = () => {
  const [userLogged, setUserLogged] = useState(false)

  return (
    <Navbar fixed='top' variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <StyledNavbarBrand href="#">Przepisowa pasja</StyledNavbarBrand>
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
  );
}
