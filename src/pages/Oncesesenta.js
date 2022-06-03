import React, { Component } from "react";
import "./styles/Oncesesenta.css";

export class Oncesesenta extends Component {
  render() {
    console.log(this);
    return (
      <div
        className="Oncesesenta"
        style={{
          backgroundImage: `url('${this.props.backgroundImage}')`,
        }}
      >
        <img className="Oncesesenta_logo" src={this.props.logo} alt="" />
      </div>
    );
  }
}

export default Oncesesenta;
