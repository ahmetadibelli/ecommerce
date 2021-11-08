import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="col-md-2">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile/cars">
            My cars
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
