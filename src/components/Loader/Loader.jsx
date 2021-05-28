import React from "react";

import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loading">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
