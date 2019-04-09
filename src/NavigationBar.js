import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

export function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link eventKey="/">
            <NavLink to="/">Home</NavLink>
          </Nav.Link>
          <Nav.Link eventKey="/transactions">
            <NavLink to="/transactions">Transactions</NavLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
