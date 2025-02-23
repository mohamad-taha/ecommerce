import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <div>
          <small>New Arrival</small>
          <h1>
            Discover Our <br /> New Collection
          </h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="primaryBtn">BUY NOW</button>
      </div>
    </div>
  );
};

export default Hero;
