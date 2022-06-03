import { Component } from 'react'
import { Link } from 'react-router-dom'
import logoepa from '../assets/images/logoEPA.png'
import SearchBar from './SearchBar'
import './Styles/Header.css'

export class Header extends Component {
  render() {
    return (
      <div className='container-fluid Header_cont'>
        <div className="container Header">
          <div className="Header_logo">
            <div className="Header_logo-img">
              <Link to="/">
                <img src={logoepa} alt="EPA FM" />
              </Link>
            </div>
          </div>
          <div className="Header_searchBar">
            <SearchBar />
          </div>
        </div>
      </div>
    )
  }
}

export default Header