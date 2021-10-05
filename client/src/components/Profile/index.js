import React from "react";
import { useLocation } from "react-router-dom";
import SideNav from "./SideNav";
import Profile from "./Profile";
import MyCars from "./MyCars";

const Index = () => {
  const { pathname } = useLocation();

  let content = <Profile />;
  if (pathname === "/profile/cars") content = <MyCars />;
  return (
    <div className="row">
      <SideNav />
      {content}
    </div>
  );
};

export default Index;
