// src/components/Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation(); // Hook to get the current URL path

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '200px', backgroundColor: '#f8f9fa', padding: '20px', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
      <Nav className="flex-column">
        <Nav.Link
          as={Link}
          to="/create"
          style={{
            color: location.pathname === '/create' ? 'white' : 'gray',
            backgroundColor: location.pathname === '/create' ? 'red' : 'transparent',
            padding: '10px',
            borderRadius: '4px',
            marginBottom: '10px',
          }}
        >
          Create User
        </Nav.Link>

        <Nav.Link
          as={Link}
          to="/table"
          style={{
            color: location.pathname === '/table' ? 'white' : 'gray',
            backgroundColor: location.pathname === '/table' ? 'red' : 'transparent',
            padding: '10px',
            borderRadius: '4px',
            marginBottom: '10px',
          }}
        >
          User Table
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
