// src/components/SplashScreen.js
import React from 'react';
import { Spinner } from 'react-bootstrap';
// import appleLogo from '../logo.svg'; // Add your Apple logo SVG here

const SplashScreen = () => {
  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#f8f9fa'
    }}>
      {/* <img src={appleLogo} alt="Apple Logo" style={{ width: '150px', marginBottom: '30px' }} /> */}
      <Spinner animation="border" variant="primary" style={{ width: '4rem', height: '4rem' }} />
    </div>
  );
};

export default SplashScreen;
