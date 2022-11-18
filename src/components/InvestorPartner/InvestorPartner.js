import React from "react";
import "./InvestorPartner.css";

const InvestorPartner = () => {
  return (
    <div className="investorPartner">
      <div className="wrapper">
        <div className="investor-heading">
          <h1>Investors</h1>
          <p>
            India’s leading Venture Capitalists believe in DGV’s vision for
            Rural Finance
          </p>
        </div>
        <div className="logo-wrapper">
          <div className="investor-logo">
            <img
              src={require("./images/infoedge_ventures.png")}
              alt="infoedge ventures logo"
            />
          </div>
          <div className="investor-logo">
            <img src={require("./images/omnivore.png")} alt="omnivore logo" />
          </div>
        </div>
        <div className="partner-heading">
          <h1>Partners</h1>
          <p>
            We’re backed by innovative and cutting edge collaborators along with
            leading Dairy Unions
          </p>
        </div>
        <div className="logo-wrapper">
          <div className="partner-logo">
            <img
              src={require("./images/amul_dairy.png")}
              alt="amul dairy logo"
            />
          </div>
          <div className="partner-logo">
            <img
              src={require("./images/federal_bank.png")}
              alt="federal bank logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorPartner;
