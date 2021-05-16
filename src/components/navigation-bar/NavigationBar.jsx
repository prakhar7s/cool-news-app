import React from "react";

import "./NavigationBar.scss";

import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import GradeTwoToneIcon from "@material-ui/icons/GradeTwoTone";
import KeyboardArrowRightOutlinedIcon from "@material-ui/icons/KeyboardArrowRightOutlined";
const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="expand-button">
        <span>Cool News App</span>
        <KeyboardArrowRightOutlinedIcon />
      </div>

      <div className="links">
        <div className="link-item">
          <HomeTwoToneIcon />
          <span>Home</span>
        </div>

        <div className="link-item">
          <GradeTwoToneIcon />
          <span>Saved Items</span>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
