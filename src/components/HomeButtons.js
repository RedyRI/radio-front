import React, { Component } from 'react'
import playstore from "../assets/images/google_play.png";
import appstore from "../assets/images/appstore_ios.png";

import './Styles/HomeButtons.css'
export class HomeButtons extends Component {
  render() {
    return (
      <div className="Home_buttons">
        <a href="/">
          <img src={playstore} alt="imagen de playstore de google" />
        </a>
        <a href="/">
          <img src={appstore} alt="imagen de appstore de apple" />
        </a>
      </div>
    );
  }
}

export default HomeButtons