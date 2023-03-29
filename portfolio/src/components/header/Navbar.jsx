import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function MyNavBar({setSelectedPageById}) {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto navcenter">
            <Nav.Link href="#home" onClick={setSelectedPageById(1)}>Home</Nav.Link>
            <Nav.Link href="#link" onClick={setSelectedPageById(2)}>About me</Nav.Link>
            <Nav.Link href="#link" onClick={setSelectedPageById(3)}>Resume</Nav.Link>
            <Nav.Link href="#link" onClick={setSelectedPageById(4)}>Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// https://react-bootstrap.github.io/getting-started/introduction/