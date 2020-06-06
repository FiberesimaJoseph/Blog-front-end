import React from "react";
import { Link } from "react-router-dom";

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
    <div className="nav-bar">
      <ul>
        {navLinks.map((link, i) => (
          <li key={i}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
