import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { signout } from "../../actions/authActions";

const Navigation = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const isAdmin = user.role === 1;
  const isLoggedin = token;

  const { pathname } = useLocation();

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(signout());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-car"></i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                to="/"
              >
                Home
              </Link>
            </li>
            {isLoggedin && (
              <>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      pathname === "/profile" ? "active" : ""
                    }`}
                    to="/profile"
                  >
                    {user.fullName}
                  </Link>
                </li>
                {isAdmin && (
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        pathname === "/dashboard" ? "active" : ""
                      }`}
                      to="/dashboard"
                    >
                      {user.fullName}
                    </Link>
                  </li>
                )}
                <li className="nav-item">
                  <Link
                    onClick={logoutHandler}
                    className={`nav-link ${
                      pathname === "/logout" ? "active" : ""
                    }`}
                    to="/logout"
                  >
                    Logout
                  </Link>
                </li>
              </>
            )}

            {!isLoggedin && (
              <>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      pathname === "/signin" ? "active" : ""
                    }`}
                    to="/signin"
                  >
                    Signin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      pathname === "/signup" ? "active" : ""
                    }`}
                    to="/signup"
                  >
                    signup
                  </Link>
                </li>
              </>
            )}
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
