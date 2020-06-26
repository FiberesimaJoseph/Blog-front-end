import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const AdminAppBar = () => {
  const history = useHistory();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/admin/posts">Manage Posts</Nav.Link>
          <Nav.Link href="/admin/users">Manage Users</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} href="#">
            <span
              onClick={() => {
                localStorage.clear();
                history.push("/admin/login");
              }}
            >
              Logout
            </span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AdminAppBar;
