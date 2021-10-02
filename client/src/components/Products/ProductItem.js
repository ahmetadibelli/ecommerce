import React, { useState } from "react";

const ProductItem = ({ product, toggleLike, submitOrder }) => {
  const [amount, setAmount] = useState(1);
  const orderHandler = () => {
    setAmount(1);
    if (amount > product.numberInStock) {
      alert("The order will not be delivered!");
      return;
    }
    submitOrder(amount, product._id);
  };

  return (
    <div className="col-md-3 col-sm-6 col-12">
      <div className="card">
        <img
          className="card-img"
          src={product.imgUrl}
          alt={product.productName}
          height="300"
        />

        <div className="card-body">
          <h4 className="card-title">{product.productName}</h4>
          <h6 className="card-subtitle mb-2 text-muted">
            Category: {product.category}
          </h6>
          <p className="lead">It is a long established fact that a reader...</p>
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
