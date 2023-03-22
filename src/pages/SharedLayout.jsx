import React from "react";
//import Outlet
import { Outlet } from "react-router-dom";
//import components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
