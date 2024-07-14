import React from "react";
import Navbar from "./Layouts/Navbar";
import { Footer } from "./Layouts/Footer.jsx";
import ModalLogin from "./Home/ModalLogin";

export const Home = () => {
  return (
    <>
      <Navbar />
      <ModalLogin />
      <Footer />
    </>
  );
};
