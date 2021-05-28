import React from "react";

import "./NotFound.scss";

const NotFound = ({ savedNewsTemplate }) => {
  return (
    <div className="not-found">
      {!savedNewsTemplate ? <p>Not found</p> : <p>No saved news</p>}
    </div>
  );
};

export default NotFound;
