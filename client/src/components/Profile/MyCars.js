import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarsItem from "../Cars/CarsItem";
import { getUserCars } from "../../actions/carActions";

const MyCars = () => {
  const dispatch = useDispatch();
  const { loading, cars } = useSelector((state) => state.userCarlist);
  useEffect(() => {
    dispatch(getUserCars());
  }, [dispatch]);
  const submitOrder = () => {
    // console.log("hi");
  };
  return (
    <div className="col-md-10">
      <div className="row">
        {loading ? (
          <h3>Loading...</h3>
        ) : !cars.length ? (
          <h3>No cars found</h3>
        ) : (
          cars.map((car) => (
            <CarsItem
              isEdit
              car={car}
              key={car._id}
              submitOrder={submitOrder}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MyCars;
