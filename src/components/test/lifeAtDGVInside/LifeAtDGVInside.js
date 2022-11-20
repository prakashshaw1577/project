import "./LifeAtDGVInside.css";
import Slider from "react-slick";
// import LightBox from "slick-lightbox";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const data = [
  {
    img: "img_1.png",
  },
  {
    img: "img_2.png",
  },
  {
    img: "img_3.png",
  },
  {
    img: "img_4.png",
  },
  {
    img: "img_1.png",
  },
];

// console.log(Object.keys(data[0]));

const LifeAtDGVInside = () => {
  const [isClickCeleb, setIsClickCeleb] = useState(false);
  //   const [celebPopup, setCelebPopup] = useState([]);

  const popup = {
    slidesToShow: 1,
    slidesToScroll: 1,

    variableWidth: true,
    adaptiveHeight: true,
  };
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          variableWidth: true,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          variableWidth: true,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          variableWidth: true,
          adaptiveHeight: true,
        },
      },
    ],
  };

  return (
    <div>
      <div
        className={isClickCeleb ? "celebration-img-popup" : "celeb-close"}
        style={{ display: isClickCeleb ? "block" : "none" }}
      >
        <div className="cancel-button" onClick={() => setIsClickCeleb(false)}>
          X
        </div>

        <Slider className="popup-image" {...popup}>
          {data.map((item, index) => {
            return (
              <div className="slick-image-popup" key={index}>
                <img
                  src={require(`../lifeAtDGV/images/${item.img}`)}
                  alt="DGV_image"
                />
              </div>
            );
          })}
        </Slider>
      </div>

      <div
        className="life-at-DGV-section"
        style={{
          position: isClickCeleb ? "fixed" : "unset",
        }}
      >
        <div className="wrapper">
          <h1 className="heading">Life at DGV</h1>
        </div>

        <div className="celebration-section">
          <div className="wrapper">
            <h2>Celerbration Name</h2>
            <Slider {...settings}>
              {data.map((item, index) => {
                return (
                  <div
                    className="slick-image"
                    key={index}
                    onClick={() => {
                      setIsClickCeleb(true);
                    }}
                  >
                    <img
                      src={require(`../lifeAtDGV/images/${item.img}`)}
                      alt="DGV_image"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>

        <div className="celebration-section">
          <div className="wrapper">
            <h2>Celerbration Name</h2>
            <Slider {...settings}>
              {data.map((item, index) => {
                return (
                  <div
                    className="slick-image"
                    key={index}
                    onClick={() => {
                      setIsClickCeleb(true);
                    }}
                  >
                    <img
                      src={require(`../lifeAtDGV/images/${item.img}`)}
                      alt="DGV_image"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>

        <div className="celebration-section">
          <div className="wrapper">
            <h2>Celerbration Name</h2>
            <Slider {...settings}>
              {data.map((item, index) => {
                return (
                  <div
                    className="slick-image"
                    key={index}
                    onClick={() => {
                      setIsClickCeleb(true);
                    }}
                  >
                    <img
                      src={require(`../lifeAtDGV/images/${item.img}`)}
                      alt="DGV_image"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeAtDGVInside;
