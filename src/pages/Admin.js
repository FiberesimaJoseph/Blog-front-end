import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const AdminNav = () => {
  return (
    <header className="toolbar">
      <nav>
        <div className="spacer"></div>
        <ul className="toolbar-items">
          <li>
            <a href="#/">General</a>
          </li>
          <li>
            <a href="#/">African Stories</a>
          </li>
          <li>
            <a href="#/">Musics</a>
          </li>
          <li>
            <a href="#/">Sports</a>
          </li>
          <li>
            <a href="#/">News</a>
          </li>
        </ul>
        <DropdownButton
          id="dropdown-basic-button"
          className="dropdown-button"
          title="Menu"
        >
          <Dropdown.Item href="#/action-2">Add Admin</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
        </DropdownButton>
      </nav>
    </header>
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
