import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const navLinks = [
  {
    title: "General",
    path: "/",
  },
  {
    title: "African Stories",
    path: "/",
  },
  {
    title: "Music",
    path: "/",
  },
  {
    title: "Sports",
    path: "/",
  },
  {
    title: "News",
    path: "/",
  },
  {
    title: "Logout",
    path: "/",
  },
];

const AdminNav = () => {
  return (
    <Navbar collapseOnSelect expand="sm">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {navLinks.map((link, i) => (
            <Nav.Link className="appbar-link mx-2" to={link.path} key={i}>
              {link.title}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const ViewPage = () => {
  return <div></div>;
};
const Admin = () => {
  return (
    <div>
      <AdminNav />
      <ViewPage />
    </div>
  );
};

export default Admin;
