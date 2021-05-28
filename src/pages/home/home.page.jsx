import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import Main from "../../components/main/main.component";
import NavigationBar from "../../components/navigation-bar/NavigationBar";
import NotFound from "../../components/not-found/NotFound";
import SavedNews from "../../components/SavedNews/SavedNews";

import "./Home.scss";

const NewsAppRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact component={Main} />
        <Route path="/saved" exact component={SavedNews} />
        <Route path="*" component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};

const Home = () => (
  <div className="home">
    <Header />
    <NavigationBar />
    <NewsAppRoutes />
    {/* <Redirect exact from="/" to="/home" /> */}
    <Footer />
  </div>
);

export default Home;
