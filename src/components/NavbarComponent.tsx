import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { StyledNavbar, StyledLogo } from '../styles/Navbar.styled';

export const NavbarComponent: React.FC = () => {
  return (
    <StyledNavbar expand="lg">
      <Container>
        <StyledLogo>Adino</StyledLogo>
        <Navbar.Toggle aria-controls="adinonav" />
        <Navbar.Collapse id="adinonav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#solutions">Solutions</Nav.Link>
            <Nav.Link href="#how-it-works">How It Works</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};
