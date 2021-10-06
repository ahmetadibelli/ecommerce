import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCart, removeToCart } from "../../actions/cartActions";
import Reviews from "../Reviews/Reviews";

const CarDetails = () => {
  const params = useParams();
  console.log(params.id);
  const dispatch = useDispatch();
  const { car } = useSelector((state) => state.detailCar);
  const { cars } = useSelector((state) => state.cart);

  const addCartHandler = (car) => {
    dispatch(addCart(car));
  };
  const removeToCartHandler = (id) => {
    dispatch(removeToCart(id));
  };

  const isAdded = cars.findIndex((thisCar) => thisCar._id === car._id) > -1;

  return (
    <>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-md-4">
              <img
                className="img-fluid"
                src={car.image}
                alt="car"
                height="400"
              />
            </div>
            <div className="col-md-8">
              <h4 className="card-title">{car.name}</h4>
              <h6 className="card-subtitle mb-2 text-muted">
                Category: {car.category.name}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Price:{car.price}
              </h6>
              <h6 className="card-subtitle mb-2" style={{ color: "#f39c12" }}>
                Rating: <i className="fas fa-star"></i> {car.ratingsAverage}
              </h6>
              <p className="lead">{car.comment}</p>
              <div className="d-grid">
                {isAdded ? (
                  <button
                    onClick={removeToCartHandler.bind(null, car._id)}
                    className="btn btn-danger mt-3 btn-block"
                  >
                    <i className="fas fa-minus-circle mr-2 d-inline-block"></i>
                    Remove from cart
                  </button>
                ) : (
                  <button
                    onClick={addCartHandler.bind(null, car)}
                    className="btn btn-primary mt-3 btn-block"
                  >
                    <i className="fas fa-shopping-cart"></i> Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Reviews />
        </div>
      </div>
    </>
  );
};

export default CarDetails;
