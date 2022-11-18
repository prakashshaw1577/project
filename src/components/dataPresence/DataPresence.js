import React from "react";
import "./DataPresence.css";
import gujratMap from "../../Images/gujarat_map.png";

const DataPresence = () => {
  const data = [
    {
      img: "milk_union.png",
      des: "No. of Union",
      num: "14",
    },
    {
      img: "milk_car.png",
      des: "No. of Society",
      num: "868",
    },
    {
      img: "cow.png",
      des: "No. of Cattles Listed",
      num: "100",
    },
    {
      img: "farmer.png",
      des: "No. of farmers",
      num: "100000",
    },
    {
      img: "rupee.png",
      des: "Loan Distributed (INR)",
      num: "10000000",
    },
  ];

  return (
    <div className="data-presence">
      <div className="container">
        <div className="heading">
          <h1>Our Presence</h1>
          <p>
            We have partnered with <span>14 dairy unions</span> out of a total
            of <span>18 dairy unions</span> in <span>Gujarat</span>
          </p>
        </div>
        <div className="wrapper">
          <div className="gujrat-img">
            <img src={gujratMap} alt="Gujrat Map" />
          </div>

          <div className="data-box">
            {data.map((item, i) => {
              return (
                <div className="partner-data" key={i}>
                  <div className="icon-img">
                    <img src={require(`../../Images/${item.img}`)} alt="icon" />
                  </div>
                  <p>{item.des}</p>
                  <h1 className="count">{item.num}</h1>
                </div>
              );
            })}
            {/* <div className="partner-data">
              <div className="icon-img">
                <img src={icon1} alt="" />
              </div>
              <p>No. of Union</p>
              <h1 className="count">14</h1>
            </div>
            <div className="partner-data">
              <div className="icon-img">
                <img src={icon2} alt="" />
              </div>
              <p>No. of Society</p>
              <h1 className="count">868</h1>
            </div>
            <div className="partner-data">
              <div className="icon-img">
                <img src={icon3} alt="" />
              </div>
              <p>No. of cattles listed</p>
              <h1 className="count">100</h1>
            </div>

            <div className="partner-data">
              <div className="icon-img">
                <img src={icon4} alt="" />
              </div>
              <p>No. of farmers</p>
              <h1 className="count">100000</h1>
            </div>
            <div className="partner-data">
              <div className="icon-img">
                <img src={icon5} alt="" />
              </div>
              <p>Loan Distributed (INR)</p>
              <h1 className="count">10000000</h1>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPresence;
