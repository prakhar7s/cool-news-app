import React from "react";

import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="main-heading">Cool News App </h1>
      <input type="text" placeholder="search here!" />
    </header>
  );
};

export default Header;
