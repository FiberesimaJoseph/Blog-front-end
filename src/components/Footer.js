import React from "react";

const Footer = () => {
  const links = [
    "About",
    "Press",
    "Copyright",
    "Creators",
    "Advertise",
    "Developers",
    "Terms",
    "Privacy Policy & Safety",
    "Test new features",
  ];
  return (
    <div className="footer">
      {links.map((link, i) => (
        <a key={i} href="/">
          {link}
        </a>
      ))}
      <p>Powered By Biosoky Entertainment </p>
    </div>
  );
};

export default Footer;
