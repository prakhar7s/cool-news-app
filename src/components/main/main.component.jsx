import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../card/card.component";
import Loader from "../Loader/Loader";
import { sampleNews } from "../../assets/sample-data";

import "./main.styles.scss";

const Main = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const { REACT_APP_NEWS_API_KEY } = process.env;
    var url = `https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&apiKey=${REACT_APP_NEWS_API_KEY}`;

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
      <div className="container">
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
