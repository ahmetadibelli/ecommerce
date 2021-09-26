import React from "react";
import { Link, useLocation } from "react-router-dom";
const Pagination = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const page = +params.get("page") || 1;
  // console.log(page, params);
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
            <li className={`page-item ${page === 1 ? "active" : ""}`}>
              <Link to="/?page=1" className={`page-link`}>
                1
              </Link>
            </li>
            <li className={`page-item ${page === 2 ? "active" : ""}`}>
              <Link to="/?page=2" className="page-link">
                2
              </Link>
            </li>
            <li className={`page-item ${page === 3 ? "active" : ""}`}>
              <Link to="/?page=3" className="page-link">
                3
              </Link>
            </li>
            <li className={`page-item ${page === 3 ? "disabled" : ""}`}>
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
