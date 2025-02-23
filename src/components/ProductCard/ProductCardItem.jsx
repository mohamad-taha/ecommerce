import React, { useContext } from "react";
import { CiStar } from "react-icons/ci";
import { Context } from "../../context/Context";
import "./ProductCard.css";

const ProductCardItem = ({ item }) => {
  const { count, setCount } = useContext(Context);
  return (
    <div className="productCard">
      <div className="imgsCard">
        <img src={item.thumbnail} alt="product image" />
      </div>
      <div className="contentCard">
        <div>
          <h2>{item.title}</h2>
          <p className="itemBrand">{item.brand}</p>
        </div>
        <small>
          {item.rating} <CiStar />
        </small>
        <p>{item.description}</p>
        <p>{item.price}$</p>
        <div className="actions">
          <div>
            <button
              onClick={() => {
                count > 1 && setCount(count - 1);
              }}
            >
              -
            </button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          <button className="outlineBtn">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardItem;
