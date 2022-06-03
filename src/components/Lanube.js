import React, { Component } from 'react'
import Card from './Card'

export class Lanube extends Component {
  render() {
    return (
      <div className="Lanube">
        <Card
          logo="https://www.radiolanube.com/images/logo-lanuberadio.png"
          backgroundImage="https://www.radiolanube.com/images/nubes.jpg"
          radio="Radio la nube"
        />
      </div>
    );
  }
}

export default Lanube