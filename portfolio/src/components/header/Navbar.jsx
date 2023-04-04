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
            <Nav.Link ><Link className = 'NavLinks' to='/'>Home</Link></Nav.Link>
            <Nav.Link ><Link className = 'NavLinks' to='/about_me'>About me</Link></Nav.Link>
            <Nav.Link ><Link className = 'NavLinks' to='/resume'>Resume</Link></Nav.Link>
            <Nav.Link ><Link className = 'NavLinks' to='/portfolio'>Portfolio</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

// https://react-bootstrap.github.io/getting-started/introduction/