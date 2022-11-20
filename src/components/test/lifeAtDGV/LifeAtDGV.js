import React from "react";
import "./LifeAtDGV.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LifeAtDGV = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    variableWidth: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3,
          // arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          // arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <div className="life-at-DGV">
        <div className="wrapper">
          <h1>Life at DGV</h1>
          <div className="slick-slider-img">
            <Slider {...settings}>
              <div className="slick-image">
                <img src={require("./images/img_1.png")} alt="DGV_image" />
              </div>
              <div className="slick-image">
                <img src={require("./images/img_2.png")} alt="DGV_image" />
              </div>
              <div className="slick-image">
                <img src={require("./images/img_3.png")} alt="DGV_image" />
              </div>
              <div className="slick-image">
                <img src={require("./images/img_4.png")} alt="DGV_image" />
              </div>
            </Slider>
          </div>
          <a href="#a">More</a>
        </div>
      </div>
    </div>
  );
};

export default LifeAtDGV;
