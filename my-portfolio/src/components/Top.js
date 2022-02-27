// import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Top() {
    return (
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand>Louis Karp</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="https://github.com/karpx033" target="_blank">Github</Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/louis-karp-7bb23a86/" target="_blank">LinkedIn</Nav.Link>
        <NavDropdown title="My Projects" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Project 2</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Group Project 3</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Top;