import React from "react";
import ShopHero from "../components/ShopHero/ShopHero";
import ShopCards from "../components/ShopCards/ShopCards";
import Filters from "../components/Filters/Filters";
import Banner from "../components/ShopBanner/Banner";

const Shop = () => {
  return (
    <div className="container mt">
      <ShopHero />
      <Filters />
      <ShopCards />
      <Banner />
    </div>
  );
};

export default Shop;
