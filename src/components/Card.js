
import React, { Component } from 'react'
import './Styles/Card.css'
export class Card extends Component {
  render() {
    return (
        <div
    className="Card"
    style={{
      backgroundColor: `${this.props.backgroundColor}`,
    }}
  >
    <img
      className="Card_img"
      src={this.props.logo}
      alt=""
    />
  </div>
    )
  }
}

export default Card

