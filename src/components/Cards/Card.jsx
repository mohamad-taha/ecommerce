import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import logo from "../../assets/imgs/logo.svg";
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Card = ({ src, alt, title, category, price, rate, id }) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/product/${id}`)}>
      <div className="overlayContent">
        <button className="primaryBtn">Add To Cart</button>
        <button className="outlineBtn">Favorite</button>
      </div>
      <LazyLoadImage
        src={src}
        alt={alt}
        effect="blur"
        placeholder={<img src={logo} alt="card img" />}
      />
      <div>
        <p>{title}</p>
        <p>{category}</p>
      </div>
      <div>
        <span>{price}$</span>
        <span>
          {rate}
          <CiStar fontSize={20} />
        </span>
      </div>
    </div>
  );
};

export default Card;
