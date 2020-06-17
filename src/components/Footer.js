import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    {
      title: "About us",
      path: "/about-us",
    },
    {
      title: "Press",
      path: "/",
    },
    {
      title: "Creators",
      path: "/",
    },
    {
      title: "Advertise",
      path: "/",
    },
    {
      title: "Developers",
      path: "/developers",
    },
    {
      title: "Privacy Policy & Safety",
      path: "/",
    },
    {
      title: "About the Blog",
      path: "/about-blog",
    },
    {
      title: "Admin",
      path: "/admin",
    },
  ];

  return (
    <div className="footer">
      {links.map((link, i) => (
        <Link key={i} to={link.path}>
          {link.title}
        </Link>
      ))}
      <p>Powered By Biosoky Entertainment </p>
    </div>
  );
};

export default Footer;
