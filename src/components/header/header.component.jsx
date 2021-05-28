import React, { useContext } from "react";
import { NewsContext } from "../../contexts/NewsContext";

import "./header.styles.scss";

// ICONS
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  const { filterArticlesOnSearch, query } = useContext(NewsContext);

  return (
    <header className="header">
      <h1 className="main-heading">Cool News App </h1>
      <div className="input-field">
        <SearchIcon />
        <input
          type="text"
          value={query}
          onChange={(e) => filterArticlesOnSearch(e.target.value)}
          placeholder="search here!"
        />
      </div>
    </header>
  );
};

export default Header;
