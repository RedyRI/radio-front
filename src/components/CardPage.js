import React, { Component } from 'react'
import './Styles/CardPage.css'


export class CardPage extends Component {
  render() {
    return (
      <div className='Card'>{`you are in ${this.props.data.page} page`}</div>
    )
  }
}

export default CardPage