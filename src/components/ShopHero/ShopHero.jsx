import React from "react";
import logo from "../../assets/imgs/logo.svg";
import "./ShopHero.css";

const ShopHero = () => {
  return (
    <div className="shopHero">
      <img src={logo} alt="logo" />
      <p>Shop</p>
    </div>
  );
};

export default ShopHero;
