import React, { Component } from 'react'
import Card from '../components/Card'
import logo from '../assets/images/logo_cumbiamix.png'
import fondo from '../assets/images/fondo_cumbiamix.png'

export class Emisoras extends Component {
  render() {
    return (
      <div className='Emisoras'>
        <Card logo={logo} backgroundImage={fondo} radio='Cumbia Mix'/>
      </div>
    )
  }
}

export default Emisoras