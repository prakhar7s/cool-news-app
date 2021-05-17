import React from "react";

import "./NavigationBar.scss";

import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import GradeTwoToneIcon from "@material-ui/icons/GradeTwoTone";
import KeyboardArrowRightOutlinedIcon from "@material-ui/icons/KeyboardArrowRightOutlined";
import { NavLink } from "react-router-dom";
const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="expand-button">
        <span>Cool News App</span>
        <KeyboardArrowRightOutlinedIcon />
      </div>

      <div className="links">
        <NavLink
          to="/home"
          activeClassName="active-nav-link"
          className="link-item"
        >
          <HomeTwoToneIcon />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/saved"
          activeClassName="active-nav-link"
          className="link-item"
        >
          <GradeTwoToneIcon />
          <span>Saved Items</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NavigationBar;
