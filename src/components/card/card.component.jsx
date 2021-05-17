import React, { useState } from "react";

import "./card.styles.scss";

// default image
import defaultImage from "../../assets/default-image.jpg";

// icons
import TurnedInTwoToneIcon from "@material-ui/icons/TurnedInTwoTone";

const Card = (article) => {
  const { url, urlToImage, title, author, publishedAt, source } = article;
  const [isSaved, setSaved] = useState(false);

  const saveNews = () => {
    const newsID = source.name;
    const savedNewsCache = localStorage.getItem("savedNewsIDs");

    if (savedNewsCache !== null) {
      const parsedCache = JSON.parse(savedNewsCache);

      // Check whether newsID is present or not
      const filteredCache = parsedCache.filter((id) => id !== newsID);
      console.log(filteredCache);

      // not present so add that ID
      if (filteredCache.length === parsedCache.length) {
        filteredCache.push(newsID);
        setSaved(true);
      } else {
        //it is present so remove that
        setSaved(false);
      }

      localStorage.setItem("savedNewsIDs", JSON.stringify([...filteredCache]));
    } else {
      localStorage.setItem("savedNewsIDs", JSON.stringify([newsID]));
    }

    console.log(localStorage.getItem("savedNewsIDs"));
  };

  if (author === null) return null;
  return (
    <div className="card">
      <div className="img">
        <img src={urlToImage || defaultImage} alt="article" />
      </div>
      <a href={url} target="blank" className="title">
        {title}
      </a>
      <h3 className="author">{author}</h3>
      <div className="card-footer">
        <p className="published-at">{new Date(publishedAt).toLocaleString()}</p>
        <div
          onClick={saveNews}
          className={`save-button${isSaved ? " saved" : ""}`}
        >
          <TurnedInTwoToneIcon />
        </div>
      </div>
    </div>
  );
};

export default Card;
