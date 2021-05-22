const express = require("express");
const axios = require("axios");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/news", (req, res) => {
  axios
    .get(
      `http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
    )
    .then((ress) => {
      console.log(ress);
      res.send("Hello");
    });
});

app.listen(PORT, () => console.log(`Sever listening at ${PORT}`));
