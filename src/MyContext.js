import React, { Component } from "react";
import { sampleNews } from "./assets/sample-data";

export const MyContext = React.createContext();

class MyProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: this.sortedNewsOnTime(sampleNews),
      filteredArticles: this.sortedNewsOnTime(sampleNews),
      isLoading: false,
      noNewsAvailable: false,
    };
  }
  sortedNewsOnTime = (news) => {
    return news.sort((t1, t2) => {
      return new Date(t2.publishedAt) - new Date(t1.publishedAt);
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          setX: (key, value) => {
            this.setState({ isLoading: true });
            setTimeout(() => {
              if (value.length === 0) {
                this.setState({
                  [key]: value,
                  filteredArticles: this.state.articles,
                  isLoading: false,
                  noNewsAvailable: false,
                });
                return;
              }

              const temp = this.state.articles.filter((news) =>
                news.title.toLowerCase().includes(value.toLowerCase())
              );

              this.setState({
                [key]: value,
                filteredArticles: temp,
                isLoading: false,
                noNewsAvailable: false,
              });
              if (temp.length === 0) {
                this.setState({
                  noNewsAvailable: true,
                });
              }
            }, 500);
          },
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
