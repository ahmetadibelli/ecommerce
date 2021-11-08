import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CarsItem from "../Cars/CarsItem";
import { searchCar } from "../../actions/carActions";

const Search = () => {
  const dispatch = useDispatch();
  const { loading, cars } = useSelector((state) => state.searchCarList);
  const { search } = useLocation();
  const title = search.split("=")[1];

  useEffect(() => {
    dispatch(searchCar(title));
  }, [dispatch, title]);

  // console.log(title);
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className="row">
      <h3>Search "{title}"</h3>
      {!cars.length ? (
        <h3>No cars found!</h3>
      ) : (
        cars.map((car) => <CarsItem key={car._id} car={car} />)
      )}
    </div>
  );
};

export default Search;
