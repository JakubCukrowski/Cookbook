import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const CustomNavbar = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
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
              <Nav.Link href='#'>Losuj przepis</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='#'>Wyloguj</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}