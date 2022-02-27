// import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Project1 from './Project1';
import Home from './Home';
import Project2 from './Project2.js';
import React, { useState } from 'react';
import Project3 from './Project3.js';
import Project4 from './Project4.js';


function Top() {
    const [clickedProject, setProjectDisplay] = useState('Home');

    const renderPage = () => {
        if (clickedProject === 'Home') {
          return <Home />;
        }
        if (clickedProject === 'Project1') {
          return <Project1 />;
        }
        if (clickedProject === 'Project2') {
          return <Project2 />;
        } 
        if (clickedProject === 'Project3') {
          return <Project3 />;
        }
        if (clickedProject === 'Project4') {
            return <Project4 />;
          }
      };

    return (
<div>
<Navbar style={{ background: 'var(--thegray)'}}  expand="lg">
  <Container>
    <Navbar.Brand style={{ color: 'var(--electric)', fontSize: '3vh'}} onClick={() => setProjectDisplay('Home')}>Louis Karp</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className="me-auto">
        <Nav.Link  style={{ color: 'var(--electric)', marginLeft: 'min(3vh)'}} href="https://github.com/karpx033" target="_blank">Github</Nav.Link>
        <Nav.Link  style={{ color: 'var(--electric)' , marginLeft: 'min(3vh)'}} href="https://www.linkedin.com/in/louis-karp-7bb23a86/" target="_blank">LinkedIn</Nav.Link>
        <NavDropdown  style= {{marginLeft: 'min(3vh)'}} title="My Projects" id="basic-nav-dropdown">
          <NavDropdown.Item id='electricfont' onClick={() => setProjectDisplay('Project1')} >Project 1</NavDropdown.Item>
          <NavDropdown.Item  id='electricfont' onClick={() => setProjectDisplay('Project2')}>Project 2</NavDropdown.Item>
          <NavDropdown.Item  id='electricfont' onClick={() => setProjectDisplay('Project3')}>Project 3</NavDropdown.Item>
          <NavDropdown.Divider/>
          <NavDropdown.Item  id='electricfont' onClick={() => setProjectDisplay('Project4')}>Group Project 3</NavDropdown.Item>
        </NavDropdown>
        <a  style={{ color: 'var(--electric)', marginLeft: 'min(3vh)'}} className="nav-link" href="/files/Louis.Karp.Resume.pdf" target="_blank"
            download="Louis Karp Resume">Resume</a>
        <span  style={{ color: 'var(--electric)', marginLeft: 'min(3vh)'}} className="navbar-text" id="contact">
        612.500.2948
      </span>
      <span style={{ color: 'var(--electric)', marginLeft: 'min(3vh)'}} className="navbar-text" id="contact">
        Karpx033@umn.edu
      </span>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<div>
    {renderPage()}
</div>
</div>

    )
}

export default Top;