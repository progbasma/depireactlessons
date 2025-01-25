import React from 'react';
import { NavLink } from 'react-router';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavC = () => {
    return ( <>
        <>
        
       

        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#home">Company Name</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                    <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                    <Nav.Link as={NavLink} to="/posts">Posts</Nav.Link>
                    <Nav.Link as={NavLink} to="/carousel">Carousel</Nav.Link>
                    <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link as={NavLink} to="/shop">Shop</Nav.Link>
                    <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>

                
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

      

        
        </>
    
    </> );
}
 
export default NavC;
