import React from "react";
import { Route, Switch } from "react-router";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import Main from "../../components/main/main.component";
import NavigationBar from "../../components/navigation-bar/NavigationBar";
import SavedNews from "../../components/SavedNews/SavedNews";

import "./Home.scss";

const NewsAppRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/home" exact component={Main} />
        <Route path="/saved" exact component={SavedNews} />
      </Switch>
    </React.Fragment>
  );
};

const Home = () => (
  <div className="home">
    <Header />
    <NavigationBar />
    <NewsAppRoutes />
    <Footer />
  </div>
);

export default Home;
