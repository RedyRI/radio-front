import React, { Component } from 'react'
import './styles/Ondacero.css'
export class Ondacero extends Component {
  render() {
    return (
      <div
        className="Ondacero"
        style={{
          backgroundImage: `radial-gradient(${this.props.backgroundColor.first} 30%,${this.props.backgroundColor.second} 100%)`,
        }}
      >
        <img className="Ondacero_logo" src={this.props.logo} alt="" />
      </div>
    );
  }
}

export default Ondacero