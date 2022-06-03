import React, { Component } from 'react'
import './styles/NotFound.css'

export class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        <p>Error 404</p>
        <p>Page Not Found</p>
      </div>
    );
  }
}

export default NotFound