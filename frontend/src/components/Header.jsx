import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <Navbar bg="light" sticky="top" className="Header">
        <Container>
            <Navbar.Brand>Mapping Journal</Navbar.Brand>
        </Container>
    </Navbar>
  );
};
export default Header;