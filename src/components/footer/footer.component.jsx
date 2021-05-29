import React, { useContext } from "react";

import { NewsContext } from "../../contexts/NewsContext";

import "./footer.styles.scss";

import CallTwoToneIcon from "@material-ui/icons/CallTwoTone";
import LocationOnTwoToneIcon from "@material-ui/icons/LocationOnTwoTone";
import DraftsTwoToneIcon from "@material-ui/icons/DraftsTwoTone";

const Footer = () => {
  const { darkMode } = useContext(NewsContext);

  return (
    <footer className={`footer${darkMode ? " dark-mode" : ""}`}>
      <div className="upper">
        <div className="box">
          <div className="icon-div">
            <div className="icon">
              <LocationOnTwoToneIcon />
            </div>
          </div>
          <div className="content">
            <div className="heading">Find us</div>
            <div className="details">sdadasd asadsadasd</div>
          </div>
        </div>

        <div className="box">
          <div className="icon-div">
            <div className="icon">
              <CallTwoToneIcon />
            </div>
          </div>
          <div className="content">
            <div className="heading">Call Us</div>
            <div className="details">+91-34244324234</div>
          </div>
        </div>

        <div className="box">
          <div className="icon-div">
            <div className="icon">
              <DraftsTwoToneIcon />
            </div>
          </div>
          <div className="content">
            <div className="heading">Mail Us</div>
            <div className="details">mai@gamil.com</div>
          </div>
        </div>
      </div>

      <div className="copy-right">Copyright © 2021, All Right Reserved</div>
    </footer>
  );
};

export default Footer;
