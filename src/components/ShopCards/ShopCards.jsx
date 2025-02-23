import React, { useEffect, useState, useContext } from "react";
import Card from "../Cards/Card";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import "./ShopCards.css";

const ShopCards = () => {
  const { query, option } = useContext(Context);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const productsPerPage = 18;

  const paginate = (pageNumber) => {
    setPage(pageNumber);
    navigate(`/shop?page=${pageNumber}`);
  };

  useEffect(() => {
    setPage(1);
  }, [option]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let url = `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
          (page - 1) * productsPerPage
        }`;

        if (option && option !== "all") {
          url = `https://dummyjson.com/products/category/${option}?limit=${productsPerPage}&skip=${
            (page - 1) * productsPerPage
          }`;
        }

        if (query !== "") {
          url = `https://dummyjson.com/products/search?q=${query}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTotal(data.total || data.products.length);
        setProducts(data.products);
      } catch (error) {
        setError(
          error.message === "Failed to fetch"
            ? "No Internet Connection!"
            : error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, option, query]);

  return (
    <>
      <div className="cardsContainer">
        {loading && <Loading />}
        {error && error}
        <div className="cards">
          {!loading &&
            products.length > 0 &&
            products.map((item, index) => (
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
        {!loading && products.length === 0 && <p>No Products Found!</p>}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(total / productsPerPage) }, (_, i) => (
          <button
            className="pageBtn"
            key={i + 1}
            onClick={() => paginate(i + 1)}
            style={{
              backgroundColor: page === i + 1 ? "var(--primary)" : "#ddd",
              color: page === i + 1 ? "#fff" : "#000",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default ShopCards;
