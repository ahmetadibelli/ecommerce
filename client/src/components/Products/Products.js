import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { getProducts } from "../../fakeProductService";
import ProductItem from "./ProductItem";
const Products = () => {
  const [products, setProducts] = useState(getProducts());
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const page = +params.get("page") || 1;

  const total = products.length;
  const range = 4;
  const startAt = (page - 1) * range;
  const endAt = total / range + startAt + 1;
  // console.log(startAt, endAt);
  const toggleLikeHandler = (id) => {
    setProducts((state) =>
      state.map((item) =>
        item._id === id ? { ...item, liked: !item.liked } : item
      )
    );
  };
  const submitOrderHandler = (amount, id) => {
    setProducts((state) =>
      state.map((item) =>
        item._id === id
          ? { ...item, numberInStock: item.numberInStock - amount }
          : item
      )
    );
  };
  return (
    <div className="row">
      {products.slice(startAt, endAt).map((product) => (
        <ProductItem
          toggleLike={toggleLikeHandler}
          key={product._id}
          product={product}
          submitOrder={submitOrderHandler}
        />
      ))}
    </div>
  );
};

export default Products;
