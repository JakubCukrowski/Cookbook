import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { StyledLink, StyledNavbarColapse } from '../styles/NavbarStyles/StyledNavbar';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export const CustomNavbar = () => {
  const {user, signout} = UserAuth()
  const navigate = useNavigate()

  const pathname = window.location.pathname

  const handleSignOut = async () => {
    try {
      await signout()
      navigate('/')

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar 
        fixed={pathname === '/' ? 'top' : ''}
        sticky={pathname !== '/' ? 'top' : ''}
        variant="dark" 
        bg="dark" 
        expand="lg">
        <Container fluid>
          <StyledLink to={'/'}>Przepisowa pasja</StyledLink>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <StyledNavbarColapse id="navbar-dark-example">
            <Nav>
              {user !== null
              ? 
              <>
                <Nav.Item>
                  <Link className='nav-link' to='/dashboard'>Zalogowany: {user.displayName}</Link>
                </Nav.Item>
              </>
              :
              <Nav.Item>
                <Link className='nav-link' to="/signin">Zaloguj się</Link>
              </Nav.Item>}
            </Nav>
          </StyledNavbarColapse>
        </Container>
      </Navbar>
    </>   
  );
}
