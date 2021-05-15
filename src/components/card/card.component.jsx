import React from "react";

import "./card.styles.scss";

const Card = (article) => {
  const { url, urlToImage, title, author, publishedAt } = article;

  if (author === null) return null;
  return (
    <a href={url} target="blank" className="card">
      <div className="img">
        <img src={urlToImage} alt="article" />
      </div>
      <h1 className="title">{title}</h1>
      <h3 className="author">{author}</h3>
      <p className="published-at">{new Date(publishedAt).toLocaleString()}</p>
    </a>
  );
};

export default Card;
