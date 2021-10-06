import React, { useState, useRef } from "react";
import Rating from "react-rating";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../../actions/reviewActions";
import "./style.css";

const ReviewModal = ({ carId, onClose }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.createReview);
  const [rating, setRating] = useState(1);
  const text = useRef(null);
  const submitHandler = (e) => {
    const value = text.current.value;
    if (!value) {
      alert("Please write your review");
      return;
    }
    const body = {
      review: value,
      rating,
      car: carId,
    };
    dispatch(create(body, onClose));
  };
  return (
    <div className="reviewModal">
      <div className="reviewModal__content d-inline-block">
        <span className="close-icon" onClick={onClose}>
          <i className="fas fa-times"></i>
        </span>
        <h3>Review</h3>
        <div className="mb-3">
          <label className="form-label">Rating</label>
          <div>
            <h5>{rating}/5</h5>
            <Rating
              onChange={(val) => setRating(val)}
              initialRating={rating}
              className="d-block startColor"
              emptySymbol={<i className="far fa-star"></i>}
              fullSymbol={<i className="fas fa-star"></i>}
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="text">
            Text
          </label>
          <textarea
            ref={text}
            id="text"
            placeholder="Review"
            className="form-control"
          />
        </div>
        <button
          disabled={loading}
          onClick={submitHandler}
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewModal;
