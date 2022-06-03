import React, { Component } from 'react'
import './styles/Cumbiamix.css'


export class Cumbiamix extends Component {
  render() {
    return (
      <div className='Cumbiamix' style={{
        backgroundImage: `url('${this.props.backgroundImage}')`,
      }}>
        <img className='Cumbiamix_logo' src={this.props.logo} alt="" />
      </div>
    )
  }
}

export default Cumbiamix