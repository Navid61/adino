import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"; // <-- Add this import
import { StyledNavbar, StyledLogo } from "../styles/Navbar.styled";

export const NavbarComponent: React.FC = () => {
  return (
    <StyledNavbar expand="lg">
      <Container>
        <StyledLogo>Adino</StyledLogo>
        <Navbar.Toggle aria-controls="adinonav" />
        <Navbar.Collapse id="adinonav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/how-it-works">
              How It Works
            </Nav.Link>
            <Nav.Link as={Link} to="/order">
              Start Your Ad Compain
            </Nav.Link>
            <Nav.Link as={Link} to="/billing">
              Billing
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/tarrif">
              Tarrif
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};
