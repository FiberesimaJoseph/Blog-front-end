import React from "react";

const navLinks = [
  {
    title: "General",
    path: "/general",
  },
  {
    title: "AFRICAN STORIES",
    path: "/african-stories",
  },
  {
    title: "LEARNING",
    path: "/general",
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
    title: "TRAVELS",
    path: "/general",
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
          <li key={i}>
            <a href={link.path}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
