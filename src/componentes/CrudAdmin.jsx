import React from "react";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";
import { SearchBar } from "./CrudAdmin/SearchBar";
import { PruebaCards } from "./CrudAdmin/PruebaCards";
import Reviews from "./Layouts/Reviews";

export const CrudAdmin = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <PruebaCards />
      <Reviews />
      <Footer />
    </>
  );
};
