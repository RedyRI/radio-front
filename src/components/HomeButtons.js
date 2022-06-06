import React, { Component } from 'react'
import playstore from "../assets/images/google_play.png";
import appstore from "../assets/images/appstore_ios.png";

import './Styles/HomeButtons.css'
export class HomeButtons extends Component {
  render() {
    return (
      <div className="Home_buttons">
        <a
          href="https://play.google.com/store/apps/details?id=com.touch.apppandafm&hl=es-419"
          target="_blank"
        >
          <img src={playstore} alt="imagen de playstore de google" />
        </a>
        <a
          href="https://apps.apple.com/us/app/epa-fm/id1617706817"
          target="_blank"
        >
          <img src={appstore} alt="imagen de appstore de apple" />
        </a>
      </div>
    );
  }
}

export default HomeButtons