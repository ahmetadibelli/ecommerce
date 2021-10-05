import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarItem from "./CarsItem";
import { getCars } from "../../actions/carActions";

const Products = () => {
  const dispatch = useDispatch();
  const { loading, cars } = useSelector((state) => state.carList);

  useEffect(() => {
    if (!cars.length) {
      dispatch(getCars());
    }
  }, [dispatch, cars]);

  return (
    <div className="row">
      {loading && (
        <div className="col-md-6" style={{ height: "35rem" }}>
          <h5>Loading...</h5>
        </div>
      )}
      {!loading && cars.map((car) => <CarItem key={car._id} car={car} />)}
    </div>
  );
};

export default Products;
