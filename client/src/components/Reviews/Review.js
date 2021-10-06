import React from "react";
import { useSelector } from "react-redux";
import Moment from "react-moment";

const Review = ({ review }) => {
  const {
    user: { fullName },
  } = useSelector((state) => state.auth);
  return (
    <li>
      <div className="d-flex">
        <div className="left">
          <span>
            <img
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
              className="profile-pict-img img-fluid"
              alt=""
            />
          </span>
        </div>
        <div className="right">
          <h4>
            {review.user.fullName || fullName}
            <span className="gig-rating text-body-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1792 1792"
                width="15"
                height="15"
              >
                <path
                  fill="currentColor"
                  d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                ></path>
              </svg>
              {review.rating}
            </span>
          </h4>

          <div className="review-description">
            <p>{review.review}</p>
          </div>
          <span className="publish py-3 d-inline-block w-100">
            Published <Moment fromNow>{review.createdAt}</Moment>
          </span>
        </div>
      </div>
    </li>
  );
};

export default Review;
