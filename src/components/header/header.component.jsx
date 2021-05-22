import React from "react";
import { MyContext } from "../../MyContext";

import "./header.styles.scss";

const Header = () => {
  return (
    <MyContext.Consumer>
      {(value) => (
        <header className="header">
          {console.log(value, "s")}

          <h1 className="main-heading">Cool News App </h1>
          <input
            type="text"
            onChange={(e) => value.setX("searchText", e.target.value)}
            placeholder="search here!"
          />
        </header>
      )}
    </MyContext.Consumer>
  );
};

export default Header;
