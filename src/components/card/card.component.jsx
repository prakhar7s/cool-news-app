import React from "react";

import "./card.styles.scss";

const Card = (article) => {
  const { urlToImage, title, author, publishedAt } = article;

  return (
    <div className="card">
      <div className="img">
        <img src={urlToImage} alt="article" />
      </div>
      <h1 className="title">{title}</h1>
      <h3 className="author">{author}</h3>
      <p className="published-at">{new Date(publishedAt).toLocaleString()}</p>
    </div>
  );
};

export default Card;
