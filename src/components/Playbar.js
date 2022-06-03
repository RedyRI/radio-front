import React, { Component } from 'react'
import coverTest from '../assets/images/cover_test.jpg'
import playbtn from '../assets/images/play_btn.png'
import './Styles/Playbar.css'
export class Playbar extends Component {
  state = {
    volumeLevel: 50,
  }
  handleMouseDown = (e) => {
    console.log(e.target.value);
    window.getSelection().removeAllRanges();
    console.log(e.target.value);
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      volumeLevel: e.target.value
    })
  }

  render() {
    return (
      <div className="container-fluid Playbar">
        <div className="Playbar_info">
          <div className="Playbar_info-image">
            <img src={coverTest} alt="" />
          </div>
          <div className="Playbar_info-songname">
            <h6>Nombre de cancion</h6>
            <span>Nombre de artista</span>
          </div>
        </div>
        <div className="Playbar_controls">
          <div className="Playbar_controls-playbtn">
            <img src={playbtn} alt="icono de play" />
          </div>
          <div className="Playbar_controls-volume">
            <input
              autoComplete="off"
              onMouseDown={this.handleMouseDown}
              onChange={this.handleChange}
              type="range"
              min="0"
              max="100"
            />
            <div id="etiqueta">{this.state.volumeLevel}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Playbar