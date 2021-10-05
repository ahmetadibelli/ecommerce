import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeToCart } from "../../actions/cartActions";

const ProductItem = ({ car }) => {
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.cart);
  const addCartHandler = (car) => {
    dispatch(addCart(car));
  };
  const removeToCartHandler = (id) => {
    dispatch(removeToCart(id));
  };

  const isAdded = cars.findIndex((thisCar) => thisCar._id === car._id) > -1;

  return (
    <div className="col-md-3 col-sm-6 col-12 mb-2">
      <div className="card">
        <img className="card-img" src={car.image} alt={car.name} height="300" />

        <div className="card-body">
          <h4 className="card-title">{car.name}</h4>
          <h6 className="card-subtitle mb-2 text-muted">
            Category: {car.category.name}
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">Price: ${car.price}</h6>
          <p className="lead">
            {car.comment.slice(0, 100)}
            {car.comment.length > 100 ? "..." : ""}
          </p>
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
  );
};

export default ProductItem;
