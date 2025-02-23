import React from "react";
import banner1 from "../../assets/imgs/bannerImg1.svg";
import banner2 from "../../assets/imgs/bannerImg2.svg";
import banner3 from "../../assets/imgs/bannerImg3.svg";
import banner4 from "../../assets/imgs/bannerImg4.svg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner mt">
      <div>
        <img src={banner4} alt="true icon" />
        <div>
          <p>High Quality</p>
          <span>crafted from top materials</span>
        </div>
      </div>
      <div>
        <img src={banner1} alt="trophy icon" />
        <div>
          <p>Warranty Protection</p>
          <span>Over 2 years</span>
        </div>
      </div>
      <div>
        <img src={banner2} alt="shipping icon" />
        <div>
          <p>Free Shipping</p>
          <span>Order over 150 $</span>
        </div>
      </div>
      <div>
        <img src={banner3} alt="support icon" />
        <div>
          <p>24 / 7 Support</p>
          <span>Dedicated support</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
