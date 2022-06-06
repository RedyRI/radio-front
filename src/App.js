import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeButtons from "./components/HomeButtons";
import Emisoras from "./pages/Emisoras";
import Home from "./pages/Home";
import Slides from "./components/Slides";
import "./App.css";
import NotFound from "./pages/NotFound";
import Ondacero from "./pages/Ondacero";
import RadioPage from "./components/RadioPage";

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
          <div className="App_buttons">
            <HomeButtons />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/radiopage/:radio" element={<RadioPage />} />
            <Route path="/emisoras" element={<Emisoras />} />
            <Route
              path="/ondacero"
              element={
                <Ondacero
                  backgroundColor={{ first: "#FEE248", second: "#FFA01C" }}
                  logo="http://localhost:3001/images/logo_ondacero.png"
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

export default App;
