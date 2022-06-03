import React, { Component } from 'react'
import Card from '../components/Card'
import logo from '../assets/images/logoEPA.png'

import './styles/Home.css'
export class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Card backgroundColor='black' logo={logo}/>
      </div>
    );
  }
}
export default Home;