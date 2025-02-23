import React, { useEffect, useState } from "react";
import BreadCrumbs from "..//BreadCrumbs/BreadCrumbs";
import { useParams } from "react-router-dom";
import ProductCardItem from "./ProductCardItem";
import Loading from "../Loading/Loading";
import Reviews from "../ProductReviews/Reviews";

const ProductCard = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const resp = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await resp.json();
        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`);
        }
        setProduct(data);
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
    getProduct();
  }, []);

  return (
    <div>
      <BreadCrumbs name={product.title} />
      {!loading && <ProductCardItem item={product} />}
      {loading && <Loading />}
      {error && error}
      <Reviews reviews={product.reviews} />
    </div>
  );
};

export default ProductCard;
