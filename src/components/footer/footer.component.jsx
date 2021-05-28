import React, { useContext } from "react";

import { NewsContext } from "../../contexts/NewsContext";

import "./footer.styles.scss";

const Footer = () => {
  const { darkMode } = useContext(NewsContext);

  return (
    <footer className={`footer${darkMode ? " dark-mode" : ""}`}>
      <div className="links">
        <a href="#s">Facebook</a>
        <a href="#s">Instagram</a>
        <a href="#s">Twitter</a>
        <a href="#s">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
