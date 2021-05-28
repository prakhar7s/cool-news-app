import React, { Component } from "react";
import { sampleNews } from "../assets/sample-data";

export const NewsContext = React.createContext();

class NewsContextProvider extends Component {
  constructor(props) {
    super(props);
    this.sortedNewsOnTime = this.sortedNewsOnTime.bind(this);
    this.getCache = this.getCache.bind(this);
    const cached = this.getCache();

    this.state = {
      articles: this.sortedNewsOnTime(sampleNews),
      filteredArticles: this.sortedNewsOnTime(sampleNews),
      savedNews: cached.savedNews,
      filteredSavedNews: cached.savedNews,
      currentTab: "HOME",
      query: "",
      isLoading: true,
      darkMode: true,
    };
  }

  toggleMode = () => {
    this.setState({ darkMode: !this.state.darkMode });
  };

  disableLoading = () => {
    this.setState({ isLoading: false });
  };

  enableLoading = () => {
    this.setState({ isLoading: true });
  };

  resetSearchQuery = () => {
    this.setState({ query: "" });
  };

  updateCache = () => {
    localStorage.setItem(
      "coolNewsApp",
      JSON.stringify({ savedNews: this.state.savedNews })
    );
  };

  getCache = () => {
    const data = localStorage.getItem("coolNewsApp");
    return data != undefined ? { ...JSON.parse(data) } : { savedNews: [] };
  };

  toggleSaveNews = (news) => {
    const isAlreadyPresent = this.state.savedNews.some(
      (savedNews) => savedNews.newsID === news.newsID
    );

    if (isAlreadyPresent) {
      const temp = this.state.savedNews.filter(
        (savedNews) => savedNews.newsID !== news.newsID
      );
      this.setState(
        {
          savedNews: temp,
          filteredSavedNews: temp,
        },
        () => this.updateCache(this.state)
      );
    } else {
      this.setState(
        {
          savedNews: [...this.state.savedNews, news],
          filteredSavedNews: [...this.state.savedNews, news],
        },
        () => this.updateCache(this.state)
      );
    }
  };

  changeCurrentTab = (newTab) => {
    this.setState({ currentTab: newTab });
  };

  filterArticlesOnSearch = (query = "") => {
    const isHome = this.state.currentTab === "HOME";
    const articles = isHome ? "articles" : "savedNews";
    const filteredArticles = isHome ? "filteredArticles" : "filteredSavedNews";

    this.enableLoading();

    if (query.length === 0) {
      this.setState({
        [filteredArticles]: this.state[articles],
        query,
      });

      setTimeout(() => {
        this.disableLoading();
      }, 200);

      return;
    }
    const temp = this.state[articles].filter((article) => {
      return (
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.author.toLowerCase().includes(query.toLowerCase())
      );
    });

    this.setState({ [filteredArticles]: temp, query });

    setTimeout(() => {
      this.disableLoading();
    }, 400);
  };

  sortedNewsOnTime = (news) => {
    return news.sort((t1, t2) => {
      return new Date(t2.publishedAt) - new Date(t1.publishedAt);
    });
  };

  render() {
    return (
      <NewsContext.Provider
        value={{
          ...this.state,
          changeCurrentTab: this.changeCurrentTab,
          toggleSaveNews: this.toggleSaveNews,
          filterArticlesOnSearch: this.filterArticlesOnSearch,
          resetSearchQuery: this.resetSearchQuery,
          enableLoading: this.enableLoading,
          disableLoading: this.disableLoading,
          toggleMode: this.toggleMode,
        }}
      >
        {this.props.children}
      </NewsContext.Provider>
    );
  }
}

export default NewsContextProvider;
