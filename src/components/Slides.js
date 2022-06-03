import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './Styles/Slides.css'
import londa from '../assets/images/logo_ondacero.png'
import { Link, NavLink } from "react-router-dom";
export class Slides extends Component {
  prefix = "http://localhost:3001/images/";
  state = {
    items: [
      {
        img: `${this.prefix}logo_ondacero.png`,
        content: "slide 1",
        id: "1",
        to: "/ondacero",
      },
      {
        img: `${this.prefix}logo_cumbiamix.png`,
        content: "slide 2",
        id: "2",
        to: "/cumbiamix",
      },
      {
        img: `${this.prefix}logo_lanube.png`,
        content: "slide 3",
        id: "3",
        to: "/lanube",
      },
      {
        img: `${this.prefix}logo_oncesesenta.png`,
        content: "slide 4",
        id: "4",
        to: "/oncesesenta",
      },
      {
        img: `${this.prefix}logo_pana.png`,
        content: "slide 5",
        id: "5",
        to: "/",
      },
      {
        img: `${this.prefix}logo_ondacero.png`,
        content: "slide 6",
        id: "6",
      },
      {
        img: `${this.prefix}logoEPA.png`,
        content: "slide 7",
        id: "7",
        to: "/",
      },
      {
        img: `${this.prefix}logo_lanube.png`,
        content: "slide 8",
        id: "8",
        to: "/",
      },
      {
        img: "../assets/images/logo_pana.png",
        img: `${this.prefix}logo_lanube.png`,
        content: "slide 9",
        id: "9",
        to: "/",
      },
      {
        img: `${this.prefix}logo_oncesesenta.png`,
        content: "slide 10",
        id: "10",
        to: "/",
      },
      {
        img: `${this.prefix}logo_cumbiamix.png`,
        content: "slide 11",
        id: "11",
        to: "/",
      },
      {
        img: `${this.prefix}logo_pana.png`,
        content: "slide 12",
        id: "12",
        to: "/",
      },
    ],
  };
  handleClick = (e) => {
    console.log(e.target);
  };

  render() {
    return (
      <div className="slider">
        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {this.state.items.map((item) => {
            return (
              <NavLink className={(data) => console.log(data)}>
                <SwiperSlide onClick={this.handleClick}>
                  <Link to={`${item.to}`}>
                    <img className="slider_img" src={item.img} alt="" />
                  </Link>
                </SwiperSlide>
              </NavLink>
            );
          })}
        </Swiper>
      </div>
    );
  }
}

export default Slides;
