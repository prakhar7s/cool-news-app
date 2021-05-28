import React, { useContext } from "react";
import { NewsContext } from "../../contexts/NewsContext";

import "./header.styles.scss";

// ICONS
import SearchIcon from "@material-ui/icons/Search";
import NightsStayTwoToneIcon from "@material-ui/icons/NightsStayTwoTone";
import WbSunnyTwoToneIcon from "@material-ui/icons/WbSunnyTwoTone";

const Header = () => {
  const { filterArticlesOnSearch, query, darkMode, toggleMode } =
    useContext(NewsContext);

  return (
    <header className={`header${darkMode ? " dark-mode" : ""}`}>
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
      <span onClick={toggleMode}>
        {darkMode ? <WbSunnyTwoToneIcon /> : <NightsStayTwoToneIcon />}
      </span>
    </header>
  );
};

export default Header;
