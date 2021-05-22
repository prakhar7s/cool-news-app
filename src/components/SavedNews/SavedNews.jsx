import React, { useContext, useEffect, useState } from "react";

import "./SavedNews.scss";

import { sampleNews } from "../../assets/sample-data";
import Loader from "../Loader/Loader";
import Card from "../card/card.component";
import { MyContext } from "../../MyContext";

const SavedNews = () => {
  const value = useContext(MyContext);
  const [savedNews, setSavedNews] = useState(value.state.filteredArticles);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log(value);
    // saved newd IDs
    const savedNewsCache = localStorage.getItem("savedNewsIDs");

    if (savedNewsCache !== null) {
      //creating map for better performance
      const news = {};
      const parsedCache = JSON.parse(savedNewsCache);
      parsedCache.forEach((id) => {
        news[id] = true;
      });

      // filter saved news for all news
      const savedNewsData = sampleNews
        .filter((n) => (news[n.publishedAt] ? true : false))
        .filter(Boolean);

      setSavedNews(savedNewsData);
    } else {
      //no saved news
      setSavedNews([]);
    }

    setLoading(false);
  }, []);

  return (
    <MyContext.Consumer>
      {(value) => (
        <div className="saved-news">
          <div className="container">
            {!isLoading ? (
              <div className="cards">
                {value.state.filteredArticles.map((article) => (
                  <Card
                    key={article.title}
                    article={article}
                    savedNews={savedNews}
                    setSavedNews={setSavedNews}
                  />
                ))}
              </div>
            ) : (
              <Loader />
            )}
            {!isLoading && savedNews.length === 0 && (
              <div className="no-news">No Saved News :)</div>
            )}
          </div>
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default SavedNews;
