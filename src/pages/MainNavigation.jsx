import React from "react";
import { Outlet } from "react-router-dom";
import UpperBar from "../Components/UpperBar";
import Footer from "../Components/Footer";

const MainNavigation = () => {
  return (
    <>
      <div className="w-[80%]  mx-auto ">
        <UpperBar />
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default MainNavigation;
