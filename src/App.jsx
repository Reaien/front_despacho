import Navbar from "./componentes/Navbar";
import { SearchBar } from "./componentes/SearchBar";
import Footer from "./componentes/Footer";
import { TableCompras } from "./componentes/TableCompras";
import { PruebaCards } from "./componentes/PruebaCards";
import Reviews from "./componentes/Reviews";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <SearchBar />
      <div>
        <PruebaCards />
      </div>
      <div>
        <Reviews />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
