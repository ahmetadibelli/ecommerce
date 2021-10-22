import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";
import { signout } from "../../actions/authActions";

const Navigation = () => {
  const toggleButton = useRef(null);
  const dispatch = useDispatch();
  const input = useRef(null);
  const { user, token } = useSelector((state) => state.auth);
  const { cars } = useSelector((state) => state.cart);
  const isAdmin = user.role === 1;
  const isLoggedin = token;

  const { pathname } = useLocation();
  const { push } = useHistory();

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(signout());
  };
  const searchHandler = (e) => {
    e.preventDefault();
    const value = input.current.value;
    if (!value) return;
    push(`/search?title=${value}`);
  };

  const onLinkClickhandler = () => {
    if (
      window.innerWidth <= 991 &&
      !toggleButton.current.classList.contains("collapsed")
    ) {
      const clickEvent = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: false,
      });
      toggleButton.current.dispatchEvent(clickEvent);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link onClick={onLinkClickhandler} className="navbar-brand" to="/">
          <i className="fas fa-car"></i>
        </Link>
        <Link className="cartIcon cart-mobile" to="/cart">
          <span className="itemAmount">{cars.length}</span>
          <i className="fas fa-cart-plus"></i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref={toggleButton}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li onClick={onLinkClickhandler} className="nav-item">
              <Link
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                to="/"
              >
                Home
              </Link>
            </li>
            {isLoggedin && (
              <>
                <li onClick={onLinkClickhandler} className="nav-item">
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
                      onClick={onLinkClickhandler}
                      className={`nav-link ${
                        pathname === "/dashboard" ? "active" : ""
                      }`}
                      to="/dashboard"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
                <li className="nav-item">
                  <Link
                    onClick={onLinkClickhandler}
                    className={`nav-link ${
                      pathname === "/add-car" ? "active" : ""
                    }`}
                    to="/add-car"
                  >
                    Add Car
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={logoutHandler}
                    className={`nav-link ${
                      pathname === "/logout" ? "active" : ""
                    }`}
                    to="/logout"
                  >
                    Log out
                  </Link>
                </li>
              </>
            )}

            {!isLoggedin && (
              <>
                <li className="nav-item">
                  <Link
                    onClick={onLinkClickhandler}
                    className={`nav-link ${
                      pathname === "/signin" ? "active" : ""
                    }`}
                    to="/signin"
                  >
                    Sign in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={onLinkClickhandler}
                    className={`nav-link ${
                      pathname === "/signup" ? "active" : ""
                    }`}
                    to="/signup"
                  >
                    sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
          <form className="d-flex" onSubmit={searchHandler}>
            <input
              ref={input}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              onClick={onLinkClickhandler}
              className="btn btn-outline-success"
              type="submit"
            >
              Search
            </button>
          </form>

          <Link className="cartIcon cart-desktop" to="/cart">
            <span className="itemAmount">{cars.length}</span>
            <i className="fas fa-cart-plus"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
