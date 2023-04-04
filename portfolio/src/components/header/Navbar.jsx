import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export default function MyNavBar() {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto navcenter">
            
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/about_me'>About me</Nav.Link>
            <Nav.Link href='/resume'>Resume</Nav.Link>
            <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

// https://react-bootstrap.github.io/getting-started/introduction/