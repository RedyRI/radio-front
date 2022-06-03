import React, { Component } from 'react'
import { BrowserRouter, Link, NavLink, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import HomeButtons from './components/HomeButtons';
import Navbar from './components/Navbar';
import Playbar from './components/Playbar';
import Emisoras from './pages/Emisoras';
import Home from './pages/Home';
import Lanube from './pages/Lanube';
import Card from './components/Card';
import Slides from './components/Slides';
import './App.css'
import NotFound from './pages/NotFound';
import Ondacero from './pages/Ondacero'
import Cumbiamix from './pages/Cumbiamix';
import Oncesesenta from './pages/Oncesesenta';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App_header">
            <Header />
          </div>
          <div className="App_slider">
            <Slides />
          </div>
          <div className="App_navbar">
            <Navbar />
          </div>
          <div className="App_playbar">
            <Playbar />
          </div>
          <div className="App_buttons">
            <HomeButtons />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/:currentPage" element={<Card/>} /> */}
            <Route path="/emisoras" element={<Emisoras />} />
            <Route
              path="/oncesesenta"
              element={
                <Oncesesenta
                  backgroundImage={
                    "http://localhost:3001/images/fondo_oncesesenta.png"
                  }
                  logo={"http://localhost:3001/images/artistas_oncesesenta.png"}
                />
              }
            />
            <Route
              path="/ondacero"
              element={
                <Ondacero
                  backgroundColor={{ first: "#FEE248", second: "#FFA01C" }}
                  logo="http://localhost:3001/images/logo_ondacero.png"
                />
              }
            />
            <Route
              path="/cumbiamix"
              element={
                <Cumbiamix
                  backgroundImage={
                    "http://localhost:3001/images/fondo_cumbiamix.png"
                  }
                  logo={"http://localhost:3001/images/logo_cumbiamix.png"}
                />
              }
            />
            <Route
              path="/lanube"
              element={
                <Lanube
                  backgroundImage={"http://localhost:3001/images/nubes.jpg"}
                  logo={"http://localhost:3001/images/logo_lanube.png"}
                />
              }
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App