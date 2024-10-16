// src/components/MainLayout.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';

const MainLayout = ({ children }) => {
  return (
    <Container>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md={10}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
