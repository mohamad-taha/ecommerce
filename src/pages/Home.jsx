import React from "react";
import Hero from "../components/Hero/Hero";
import Cards from "../components/Cards/Cards";
import CategoryCard from "../components/CategoryCard/CategoryCard";

const Home = () => {
  return (
    <div className="container">
      <Hero />
      <CategoryCard />
      <Cards />
    </div>
  );
};

export default Home;
