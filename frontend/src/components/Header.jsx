import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from '../assets/percept.png';


const Header = () => {
  return (
    <Navbar bg="light" sticky="top" className="Header">
        <Container>
          <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} />
            {/* <Navbar.Brand>Mapping Journal</Navbar.Brand> */}
        </Container>
    </Navbar>
  );
};
export default Header;