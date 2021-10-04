import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getCars } from "../../actions/carActions";

const Pagination = () => {
  const dispatch = useDispatch();
  const { totalCars } = useSelector((state) => state.carList);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const page = +params.get("page") || 1;
  const pageNumber = totalCars !== 0 ? Math.ceil(totalCars / 4) : 0;
  useEffect(() => {
    dispatch(getCars(page));
  }, [dispatch, page]);
  // console.log(page, params);

  if (totalCars <= 4) return null;
  return (
    <div className="row py-3 ">
      <div className="col">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${page <= 1 ? "disabled" : ""}`}>
              <Link to={`/?page=${page - 1}`} className="page-link">
                Previous
              </Link>
            </li>
            {[...new Array(pageNumber)].map((_, index) => (
              <li
                key={index}
                className={`page-item ${page === index + 1 ? "active" : ""}`}
              >
                <Link to={`/?page=${index + 1}`} className={`page-link`}>
                  {index + 1}
                </Link>
              </li>
            ))}
            <li
              className={`page-item ${page === pageNumber ? "disabled" : ""}`}
            >
              <Link to={`/?page=${page + 1}`} className="page-link">
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
