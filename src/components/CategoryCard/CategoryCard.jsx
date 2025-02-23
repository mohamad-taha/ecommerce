import React from "react";
import Category from "./Category";
import makeup from "../../assets/imgs/makeup.webp";
import furniture from "../../assets/imgs/furniture.webp";
import fragrances from "../../assets/imgs/fragrances.jpg";
import "./Category.css";

const CategoryCard = () => {
  return (
    <div className="mt">
      <div className="categoriesContainer">
        <h1>Browse Categories</h1>
        <div className="cards">
          <Category name="beauty" img={makeup} />
          <Category name="fragrances" img={fragrances} />
          <Category name="furniture" img={furniture} />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
