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
      title: "Copyright",
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
