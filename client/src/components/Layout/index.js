import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { updateUser } from "../../actions/authActions";
import { getJWT } from "../../helpers/jwtHandler";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (getJWT()) {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = localStorage.getItem("jwt");
      dispatch(updateUser(user, token));
    }
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <main className="container my-4">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
