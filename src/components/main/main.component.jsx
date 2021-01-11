import React, { useEffect, useRef, useState } from "react";
import Card from "../card/card.component";

import "./main.styles.scss";

const Main = () => {
  const [navWidth, setNavWidth] = useState("20%");
  const [articles, setArticles] = useState([]);

  function showOrHideNav() {
    console.log(navWidth, navWidth === "0%");
    if (navWidth === "0%") {
      setNavWidth("20%");
    } else {
      setNavWidth("0%");
    }
  }

  useEffect(() => {
    var url =
      "http://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=8c12511b28654a3088de7b53c4235a28";
    var req = new Request(url);
    fetch(req)
      .then(function (response) {
        return response.json();
      })
      .then(({ articles }) => {
        console.log(articles);
        setInterval(() => {
          setArticles(articles);
        }, 10000);
      });
  }, []);

  return (
    <main className="main">
      <button onClick={showOrHideNav}>
        {navWidth === "0%" ? " Show Navigation " : " Hide Navigation "}
      </button>
      <div className="container">
        <div className="navigation" style={{ width: navWidth }}>
          <h1>Navigation Section</h1>
        </div>
        <div className="cards">
          {articles.length ? (
            articles.map((article) => (
              <Card key={article.author} {...article} />
            ))
          ) : (
            <div className="loading"></div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
