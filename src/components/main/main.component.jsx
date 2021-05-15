import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../card/card.component";
import Loader from "../Loader/Loader";
import { sampleNews } from "../main/sample-data";

import "./main.styles.scss";

const Main = () => {
  const [navWidth, setNavWidth] = useState("20%");
  const [navTransform, setNavTransform] = useState("0px");
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function showOrHideNav() {
    if (navWidth === "0%") {
      setNavWidth("20%");
      setNavTransform("0px");
    } else {
      setNavWidth("0%");
      setNavTransform("-500px");
    }
  }

  useEffect(() => {
    const { REACT_APP_NEWS_API_KEY } = process.env;
    var url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${REACT_APP_NEWS_API_KEY}`;

    async function fetchData() {
      // You can await here
      await axios
        .get(url)
        .then((res) => {
          setArticles(res.data.articles);
        })
        .catch((err) => setArticles(sampleNews));

      //can use fetch as well
      // var req = new Request(url);
      // fetch(req)
      //   .then((response) => response.json())
      //   .then(({ articles }) => {
      //     setArticles(articles);
      //   })
      //   .catch((err) => {
      //     setArticles(sampleNews);
      //   });

      //turn off loader
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <main className="main">
      {/* <button onClick={showOrHideNav}>
        {navWidth === "0%" ? " Show Navigation " : " Hide Navigation "}
      </button> */}
      <div className="container">
        {/* <div
          className="navigation"
          style={{ width: navWidth, transform: `translateX(${navTransform})` }}
        >
          <h1>Navigation Section</h1>
        </div> */}

        {!isLoading ? (
          <div className="cards">
            {articles.map((article) => (
              <Card key={article.title} {...article} />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </main>
  );
};

export default Main;
