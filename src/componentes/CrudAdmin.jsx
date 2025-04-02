import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";

import { PruebaCards } from "./CrudAdmin/PruebaCards";
import Reviews from "./Layouts/Reviews";

export const CrudAdmin = () => {
  return (
    <>
      <Navbar />
      <PruebaCards />
      <Reviews />
      <Footer />
    </>
  );
};
