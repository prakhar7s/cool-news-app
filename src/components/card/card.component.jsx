import React, { useContext, useEffect, useRef, useState } from "react";

import "./card.styles.scss";

// default image
import defaultImage from "../../assets/default-image.jpg";

// icons
import TurnedInTwoToneIcon from "@material-ui/icons/TurnedInTwoTone";
import { NewsContext } from "../../contexts/NewsContext";

const Card = ({ article }) => {
  const { url, urlToImage, title, author, publishedAt, newsID } = article;
  const { toggleSaveNews, savedNews, darkMode } = useContext(NewsContext);
  const [isSavedNews, setIsSavedNews] = useState(true);
  const saveNewsRef = useRef();

  useEffect(() => {
    const isSaved = savedNews.some(
      (savedNews_) => savedNews_.newsID === newsID
    );
    setIsSavedNews(isSaved);
  }, []);

  useEffect(() => {
    if (isSavedNews) {
      saveNewsRef.current.className = "save-button saved";
    } else {
      saveNewsRef.current.className = "save-button";
    }
  }, [isSavedNews]);

  if (author === null) return null;
  return (
    <div className={`card${darkMode ? " dark-mode" : ""}`}>
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
          onClick={() => {
            toggleSaveNews(article);
            setIsSavedNews(!isSavedNews);
          }}
          ref={saveNewsRef}
          className="save-button"
        >
          <TurnedInTwoToneIcon />
        </div>
      </div>
    </div>
  );
};

export default Card;
