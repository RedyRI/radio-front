import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import menu from "../assets/images/menu.png";
import settings from "../assets/images/settings.png";

import './Styles/Navbar.css'
export class Navbar extends Component {
  render() {
    return (
      <div className={"Navbar "}>
        <ul className="Navbar__menu">
          <li className="Navbar__menu-item">
            <Link className="Navbar__menu-item-link" to="/radiopage/home">
              Inicio
            </Link>
          </li>
          <li className="Navbar__menu-item">
            <Link className="Navbar__menu-item-link" to="/radiopage/cumbiamix">
              Cumbia Mix
            </Link>
          </li>
          <li className="Navbar__menu-item">
            <Link className="Navbar__menu-item-link" to="/radiopage/lanube">
              La Nube
            </Link>
          </li>
          <li className="Navbar__menu-item">
            <Link
              className="Navbar__menu-item-link"
              to="/radiopage/oncesesenta"
            >
              Radio 1160
            </Link>
          </li>
        </ul>
        <div className="Navbar_options">
          <div className="Navbar_options-menu">
            <img src={menu} alt="" />
          </div>
          <div className="Navbar_options-settings">
            <img src={settings} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar