import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import "./Cards.css";

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch("https://dummyjson.com/products", {
          headers: {
            "content-type": "application/json",
            accept: "application/json",
          },
        });

        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`);
        }
        const data = await resp.json();
        setProducts(data.products.splice(0, 8));
      } catch (err) {
        setError(
          err.message === "Failed to fetch"
            ? "No Internet Connection!"
            : err.message
        );
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="cardsContainer mt">
      <h1>Our Products</h1>
      {loading && <Loading />}
      {error && error}
      <div className="cards">
        {products?.map((item, index) => (
          <Card
            id={item.id}
            key={index}
            title={item.title}
            category={item.category}
            price={item.price}
            rate={item.rating}
            src={item.thumbnail}
            alt={item.title}
          />
        ))}
      </div>
      <button onClick={() => navigate("/shop?page=1")} className="outlineBtn">
        Show More
      </button>
    </div>
  );
};

export default Cards;
