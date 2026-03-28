import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-1"></main>
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
