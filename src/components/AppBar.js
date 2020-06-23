import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const navLinks = [
  {
    title: "LOGIN",
    path: "/login",
  },
  {
    title: "REGISTER",
    path: "/register",
  },
];

const AppBar = () => {
  return (
    <Navbar collapseOnSelect expand="sm">
      <Navbar.Brand href="/">
        <img className="img-fluid logo" src="/logo.svg" alt="logo"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <button className="btn btn-default">
            <img src="/searchIcon.svg" alt="ico"></img>
          </button>
          {navLinks.map((link, i) => (
            <Link className="appbar-link mx-2" to={link.path} key={i}>
              {link.title}
            </Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppBar;
