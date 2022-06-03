import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import menu from "../assets/images/menu.png";
import settings from "../assets/images/settings.png";

import './Styles/Navbar.css'
export class Navbar extends Component {
  state = {
    fullWidth: 'inactive'
  }
  handleClick = (e) => {
    let next = this.state.fullWidth == 'active' ? 'inactive' : 'active';
    console.log('clicked');
    this.setState({
      fullWidth:next,
    })
  }
  render() {
    return (
      <div className={"Navbar " + this.state.fullWidth}>
        <ul className="Navbar__menu">
          <li className="Navbar__menu-item">
            <Link className="Navbar__menu-item-link" to="/">
              Inicio
            </Link>
          </li>
          <li className="Navbar__menu-item">
            <Link className="Navbar__menu-item-link" to="/cumbiamix">
              Cumbia Mix
            </Link>
          </li>
          <li className="Navbar__menu-item">
            <Link className="Navbar__menu-item-link" to="/lanube">
              La Nube
            </Link>
          </li>
          <li className="Navbar__menu-item">
            <Link className="Navbar__menu-item-link" to="/oncesesenta">
              Radio 1160
            </Link>
          </li>
        </ul>
        <div className="Navbar_options">
          <div onClick={this.handleClick} className="Navbar_options-menu">
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