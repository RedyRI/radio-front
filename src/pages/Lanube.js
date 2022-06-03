import React, { Component } from 'react'
import "./styles/Lanube.css";


export class Lanube extends Component {
  render() {
    console.log(this);
    return (
      <div
        className="Lanube"
        style={{
          backgroundImage: `url('${this.props.backgroundImage}')`,
        }}
      >
        <img className="Lanube_logo" src={this.props.logo} alt="" />
      </div>
    );
  }
}

export default Lanube