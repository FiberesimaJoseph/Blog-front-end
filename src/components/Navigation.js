import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const navLinks = [
  {
    title: "GENERAL",
    path: "/general",
  },
  {
    title: "AFRICAN STORIES",
    path: "/african-stories",
  },
  {
    title: "MUSICS",
    path: "/musics",
  },
  {
    title: "SPORTS",
    path: "/sports",
  },
  {
    title: "NEWS",
    path: "/news",
  },

  {
    title: "CONTACT US",
    path: "/contact-us",
  },
];

const Navigation = () => {
  return (
    <Nav className="my-2">
      {navLinks.map((link, i) => (
        <Nav.Item key={i}>
          <Nav.Link to={link.path}>{link.title}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>

    // <div className="nav-bar">
    //   <ul className="nav">
    //     {navLinks.map((link, i) => (
    //       <li className="nav-item" key={i}>
    //         <Link to={link.path}>{link.title}</Link>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default Navigation;
