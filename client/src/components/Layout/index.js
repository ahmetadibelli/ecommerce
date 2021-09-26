import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className="container my-4">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
