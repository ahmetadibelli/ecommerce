import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getProducts } from "../../fakeProductService";
import CarItem from "./CarsItem";
import { getCars } from "../../actions/carActions";

const Products = () => {
  const dispatch = useDispatch();
  const { loading, cars } = useSelector((state) => state.carList);
  const [products, setProducts] = useState(getProducts());
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const page = +params.get("page") || 1;

  const total = products.length;
  const range = 4;
  const startAt = (page - 1) * range;
  const endAt = total / range + startAt + 1;

  useEffect(() => {
    if (!cars.length) {
      dispatch(getCars());
    }
  }, [dispatch, cars]);

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
      {loading && (
        <div className="col-md-6" style={{ height: "35rem" }}>
          <h5>Loading...</h5>
        </div>
      )}
      {!loading &&
        cars.map((car) => (
          <CarItem key={car._id} car={car} submitOrder={submitOrderHandler} />
        ))}
    </div>
  );
};

export default Products;
