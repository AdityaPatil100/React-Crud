// src/components/Navbar.js
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/" className="mx-auto" style={{ fontWeight: 'bold', fontSize: '24px', color:'red' }}>
          CRUD App
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;

