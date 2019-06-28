import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
    return (
        <div className='Navigation'>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><h1>Mobolaji Rotibi</h1></Navbar.Brand>
                 <Navbar.Toggle aria-controls = "basic-navbar-nav" /> 
                <Navbar.Collapse id = "basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/"><h2>Projects</h2></Nav.Link>
                    <Nav.Link href="/"><h2>Resume</h2></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;
