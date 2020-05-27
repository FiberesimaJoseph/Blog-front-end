import React from "react";

const navLinks = [
  {
    title: "General",
    path: "/general",
  },
  {
    title: "Musics",
    path: "/musics",
  },
  {
    title: "Sports",
    path: "/sports",
  },
  {
    title: "News",
    path: "/news",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
];

const Navigation = () => {
  return (
    <div className="nav-bar">
      <ul>
        {navLinks.map((link, i) => (
          <li>
            <a href={link.path}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
