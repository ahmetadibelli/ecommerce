import React, { useState } from "react";

const ProductItem = ({ car, submitOrder }) => {
  const [amount, setAmount] = useState(1);
  const orderHandler = () => {
    setAmount(1);
    if (amount > car.numberInStock) {
      alert("The order will not be delivered!");
      return;
    }
    submitOrder(amount, car._id);
  };

  return (
    <div className="col-md-3 col-sm-6 col-12">
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
            <button
              onClick={orderHandler}
              className="btn btn-danger mt-3 btn-block"
            >
              <i className="fas fa-shopping-cart"></i> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
