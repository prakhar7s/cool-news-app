import React, { useContext, useEffect } from "react";

import "./SavedNews.scss";

import Card from "../card/card.component";
import { NewsContext } from "../../contexts/NewsContext";
import NotFound from "../not-found/NotFound";
import Loader from "../Loader/Loader";

const SavedNews = () => {
  const {
    filteredSavedNews,
    changeCurrentTab,
    resetSearchQuery,
    filterArticlesOnSearch,
    disableLoading,
    isLoading,
  } = useContext(NewsContext);

  useEffect(() => {
    changeCurrentTab("SAVED_NEWS");
    resetSearchQuery();
    filterArticlesOnSearch();

    setTimeout(() => {
      disableLoading();
    }, 70000);
  }, []);

  return (
    <div className="saved-news">
      <div className="container">
        {!isLoading ? (
          filteredSavedNews.length !== 0 && (
            <div className="cards">
              {filteredSavedNews.map((article) => (
                <Card
                  key={article.title}
                  article={article}
                  savedNewsCard={true}
                />
              ))}
            </div>
          )
        ) : (
          <Loader />
        )}
        {filteredSavedNews.length === 0 && !isLoading && (
          <NotFound savedNewsTemplate={true} />
        )}
      </div>
    </div>
  );
};

export default SavedNews;
