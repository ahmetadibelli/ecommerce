import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllReviews } from "../../actions/reviewActions";
import Review from "./Review";
import ReviewModal from "./ReviewModal";

const Reviews = () => {
  const { push } = useHistory();
  const [showReviewModal, setShowReviewModal] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  const { reviews, loading } = useSelector((state) => state.allCarReviews);
  const { token } = useSelector((state) => state.auth);

  const toggleReviewModal = () => {
    if (!token) {
      push("/signin");
      return;
    }
    setShowReviewModal((state) => !state);
  };

  useEffect(() => {
    dispatch(getAllReviews(params.id));
  }, [dispatch, params]);

  if (loading) {
    return (
      <div id="reviews" className="review-section">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="m-0">Loading...</h4>
        </div>
      </div>
    );
  }

  return (
    <>
      <div id="reviews" className="review-section">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="m-0">{reviews.length} Reviews</h4>
          <button className="btn btn-secondary" onClick={toggleReviewModal}>
            Add Review
          </button>
        </div>
      </div>

      <div className="review-list">
        <ul>
          {reviews.map((review) => (
            <Review review={review} key={review._id} />
          ))}
        </ul>
      </div>
      {showReviewModal && (
        <ReviewModal carId={params.id} onClose={toggleReviewModal} />
      )}
    </>
  );
};

export default Reviews;
