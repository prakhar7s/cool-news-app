import React, { useContext } from "react";

import { ReactComponent as DataNotFound } from "../../assets/data-not-found.svg";
import { NewsContext } from "../../contexts/NewsContext";

import "./NotFound.scss";

const NotFound = ({ savedNewsTemplate }) => {
  const { darkMode } = useContext(NewsContext);

  return (
    <div className={`not-found${darkMode ? " dark-mode" : ""}`}>
      <DataNotFound className="data-not-found" />
      {!savedNewsTemplate ? (
        <p>No articles related to searched words :(</p>
      ) : (
        <p>No saved articles related to searched words :(</p>
      )}
    </div>
  );
};

export default NotFound;
