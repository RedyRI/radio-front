import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Styles/Slides.css";
import { Link, NavLink } from "react-router-dom";
export class Slides extends Component {
  prefix = "http://localhost:3001/images/";
  state = {
    items: [
      {
        img: `${this.prefix}logo_ondacero.png`,
        content: "slide 1",
        id: "1",
        to: "/radiopage/ondacero",
      },
      {
        img: `${this.prefix}logo_cumbiamix.png`,
        content: "slide 2",
        id: "2",
        to: "/radiopage/cumbiamix",
      },
      {
        img: `${this.prefix}logo_lanube.png`,
        content: "slide 3",
        id: "3",
        to: "/radiopage/lanube",
      },
      {
        img: `${this.prefix}logo_oncesesenta.png`,
        content: "slide 4",
        id: "4",
        to: "/radiopage/oncesesenta",
      },
      {
        img: `${this.prefix}logo_pana.png`,
        content: "slide 5",
        id: "5",
        to: "/radiopage/panamericana",
      },
      {
        img: `${this.prefix}logo_lavaca.png`,
        content: "slide 6",
        id: "6",
        to: "/radiopage/lavaca",
      },
      {
        img: `${this.prefix}logo_radiocomas.png`,
        content: "slide 7",
        id: "7",
        to: "/radiopage/radiocomas",
      },
      {
        img: `${this.prefix}logo_vivafm.jpg`,
        content: "slide 8",
        id: "8",
        to: "/radiopage/vivafm",
      },
      {
        img: `${this.prefix}logo_exitosa.png`,
        content: "slide 9",
        id: "9",
        to: "/radiopage/exitosa",
      },
      // {
      //   img: `${this.prefix}logo_oncesesenta.png`,
      //   content: "slide 10",
      //   id: "10",
      //   to: "/",
      // },
      // {
      //   img: `${this.prefix}logo_cumbiamix.png`,
      //   content: "slide 11",
      //   id: "11",
      //   to: "/",
      // },
      // {
      //   img: `${this.prefix}logo_pana.png`,
      //   content: "slide 12",
      //   id: "12",
      //   to: "/",
      // },
    ],
  };
  handleClick = (e) => {};

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
                <SwiperSlide>
                  <Link
                    onClick={this.handleClick}
                    className="img_cont"
                    to={`${item.to}`}
                  >
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
