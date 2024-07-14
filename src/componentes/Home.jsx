import React from "react";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer.jsx";
import ModalLogin from "./Home/Login.jsx";
import Reviews from "./Layouts/Reviews";

export const Home = () => {
  return (
    <>
      <Navbar />
      <ModalLogin />
      <Reviews />
      <Footer />
    </>
  );
};
