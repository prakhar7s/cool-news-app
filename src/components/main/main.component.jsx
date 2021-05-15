import React, { useEffect, useState } from "react";
import Card from "../card/card.component";
import { sampleNews } from "../main/sample-data";

import "./main.styles.scss";

const Main = () => {
  const [navWidth, setNavWidth] = useState("20%");
  const [navTransform, setNavTransform] = useState("0px");
  const [articles, setArticles] = useState([]);

  function showOrHideNav() {
    if (navWidth === "0%") {
      setNavWidth("20%");
      setNavTransform("0px");
    } else {
      setNavWidth("0%");
      setNavTransform("-500px");
    }
  }
  // window.location.href.includes("localhost") ===
  useEffect(() => {
    if (true) {
      var url =
        "https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?" +
        "country=us&" +
        "apiKey=8c12511b28654a3088de7b53c4235a28";
      var req = new Request(url);
      fetch(req)
        .then(function (response) {
          return response.json();
        })
        .then(({ articles }) => {
          setArticles(articles);
        })
        .catch((err) => {
          window.confirm("Data not fetched from API. Use sample news?");
        });
    } else {
      // setArticles(sampleNews);
    }
  }, [setArticles]);

  return (
    <main className="main">
      <button onClick={showOrHideNav}>
        {navWidth === "0%" ? " Show Navigation " : " Hide Navigation "}
      </button>
      <div className="container">
        <div
          className="navigation"
          style={{ width: navWidth, transform: `translateX(${navTransform})` }}
        >
          {/* <h1>Navigation Section</h1> */}
        </div>
        <div className="cards">
          {articles.length ? (
            articles.map((article) => <Card key={article.title} {...article} />)
          ) : (
            <div className="loading"></div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
