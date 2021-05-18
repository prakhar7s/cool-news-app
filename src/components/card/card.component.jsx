import React, { useEffect, useState } from "react";

import "./card.styles.scss";

// default image
import defaultImage from "../../assets/default-image.jpg";

// icons
import TurnedInTwoToneIcon from "@material-ui/icons/TurnedInTwoTone";

const Card = ({ article, savedNews, setSavedNews }) => {
  const { url, urlToImage, title, author, publishedAt } = article;
  const [isSaved, setSaved] = useState(false);

  const fetchFromLocal = (itemName) => {
    const newsID = publishedAt;
    var savedNewsCache = localStorage.getItem(itemName);

    savedNewsCache = savedNewsCache != null ? JSON.parse(savedNewsCache) : [];
    const filteredCache = savedNewsCache.filter((id) => id !== newsID);

    const isNewsIDPresent = filteredCache.length !== savedNewsCache.length;

    return { filteredCache, savedNewsCache, isNewsIDPresent };
  };

  useEffect(() => {
    const { isNewsIDPresent } = fetchFromLocal("savedNewsIDs");
    setSaved(isNewsIDPresent);
  }, []);

  const saveNews = () => {
    const newsID = publishedAt;
    const { filteredCache, isNewsIDPresent } = fetchFromLocal("savedNewsIDs");

    // Check whether newsID is present or not
    // if present so add that ID
    if (!isNewsIDPresent) {
      filteredCache.push(newsID);
      setSaved(true);
    } else {
      //it is present so remove that
      setSaved(false);
      setSavedNews(savedNews.filter((sn) => sn.publishedAt !== newsID));
    }

    localStorage.setItem("savedNewsIDs", JSON.stringify([...filteredCache]));
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
