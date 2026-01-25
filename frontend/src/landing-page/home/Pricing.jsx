import React from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";

function Pricing() {
  const pricingData = [
    {
      img: "media/images/pricing0.svg",
      text: "Free account opening",
    },
    {
      img: "media/images/pricingMF.svg",
      text: "Free equity delivery and direct mutual funds",
    },
    {
      img: "media/images/intradayTrades.svg",
      text: "Intraday and F&O",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row p-4 m-3 align-items-center">
        
        {/* Left Section */}
        <div className="col-md-3 pricingSection">
          <h4 className="fw-bold">Unbeatable pricing</h4>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <Link to="/pricing" className="pricingLink">
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>

        {/* Right Section */}
        <div className="col-md-9">
          <div className="row gy-4">
            {pricingData.map((item, index) => (
              <div
                key={index}
                className="col-md-4 d-flex align-items-center pricingItem"
              >
                <img className="pricingImages" src={item.img} alt={item.text} />
                <p className="ms-2 mb-0">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
