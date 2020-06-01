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
<<<<<<< HEAD
      <p> Powered By Biosoky Entertainment </p>
=======
      <p>Powered By Biosoky Entertainment </p>
>>>>>>> b314c61238b442d2449fec32f36af3ec60c18b6e
    </div>
  );
};

export default Footer;
