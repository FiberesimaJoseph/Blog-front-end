import React from "react";
import { Link } from "react-router-dom";

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
    <div className="app-bar">
      <img src="/logo.svg" alt="logo"></img>

      <ul>
        <li className="search-box">
          <input
            className="search-text"
            type="text"
            placeholder="Search the blog"
          ></input>
          <button>
            <img src="/searchIcon.svg" alt="ico"></img>
          </button>
        </li>
        {navLinks.map((link, i) => (
          <li className="app-bar-text" key={i}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppBar;
