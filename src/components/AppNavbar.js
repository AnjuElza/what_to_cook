import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./css/navbar.css"; 

export function AppNavbar() {
  const navigate = useNavigate();
  return (
    // <Navbar bg="dark" variant="dark" fixed="top">
    //     <Container>
    //   <Navbar.Brand >What To Cook</Navbar.Brand>
    //   <Nav className="ml-auto">
    //     <Nav.Link href="/">Home</Nav.Link>
    //     {/* <Nav.Link href="/recipes">Recipes</Nav.Link> */}
    //     {/* Add more navigation links as needed */}
    //   </Nav>
    //   </Container>

    // </Navbar>
    <div className="nav">
    <p>What To Cook</p>
    <div className="nav-buttons">
      <Button
        variant="link"
        color="inherit"
        onClick={() => navigate("/")}
      >
        HOME
      </Button>
    </div>
  </div>
  
    
  );
}