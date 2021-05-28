import React, { useContext, useEffect } from "react";
import Card from "../card/card.component";
import NotFound from "../not-found/NotFound";

import "./main.styles.scss";
import { NewsContext } from "../../contexts/NewsContext";
import Loader from "../Loader/Loader";

const Main = () => {
  const {
    filteredArticles,
    changeCurrentTab,
    resetSearchQuery,
    filterArticlesOnSearch,
    isLoading,
    darkMode,
  } = useContext(NewsContext);

  useEffect(() => {
    changeCurrentTab("HOME");
    resetSearchQuery();
    filterArticlesOnSearch();

    console.log(isLoading);

    // setTimeout(() => {
    //   disableLoading();
    //   console.log("re");
    // }, 5000);
  }, []);

  return (
    <main className={`main${darkMode ? " dark-mode" : ""}`}>
      <div className="container">
        {!isLoading ? (
          filteredArticles.length !== 0 && (
            <div className="cards">
              {filteredArticles.map((article) => (
                <Card
                  key={article.title}
                  article={article}
                  savedNewsCard={false}
                />
              ))}
            </div>
          )
        ) : (
          <Loader />
        )}

        {filteredArticles.length === 0 && !isLoading && <NotFound />}
      </div>
    </main>
  );
};

export default React.memo(Main);
