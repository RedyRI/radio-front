import React, { Component } from 'react'
import Card from '../components/Card'
import logo from '../assets/images/logoEPA.png'

import './styles/Home.css'
import Navbar from "../components/Navbar";
export class Home extends Component {
  render() {
    return (
      <div className="Home">
        {/* <Navbar parent="home" /> */}
        <Card backgroundColor="black" logo={logo} />
      </div>
    );
  }
}
export default Home;