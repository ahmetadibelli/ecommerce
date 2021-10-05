import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "../../actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();

  const { cars } = useSelector((state) => state.cart);
  const removeToCartHandler = (id) => {
    dispatch(removeToCart(id));
  };
  return (
    <div className="row">
      <div className="col-md-8 mx-auto">
        <h1>Cart</h1>
        {!cars.length ? (
          <h3>No car found</h3>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car, i) => (
                <tr key={car._id}>
                  <th scope="row">{i + 1}</th>
                  <td>{car.name}</td>
                  <td>{car.category.name}</td>
                  <td>{car.price}</td>
                  <td>
                    <button
                      onClick={removeToCartHandler.bind(null, car._id)}
                      className="btn btn-danger btn-sm"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Cart;
