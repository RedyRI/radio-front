import React, { Component } from 'react'
import lupa from '../assets/images/lupa.png'
import './Styles/SearchBar.css'

export class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar_input">
          <input type="text" placeholder='Buscar...'/>
          <img src={lupa} alt="icono de lupa" />
        </div>
      </div>
    );
  }
}

export default SearchBar