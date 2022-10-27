import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./view/Homepage/Homepage";
import Navbar from "./view/Navbar/Navbar";
import Footer from "./view/Footer/Footer";
import NavbarIKEA from "./view/NavbarFurnituno";
import HomepageIKEA from "./view/HomepageFurnituno";
import Banner from "./view/Banner/Banner";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FooterIKEA from "./view/FooterFurnituno";
import ProductsPage from "./view/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Navbar />
              <Homepage />
              <Footer />
            </div>
          }
        />
        <Route
          path="/furnituno"
          element={
            <div className="App">
              <NavbarIKEA />
              <Banner />
              <HomepageIKEA />
              <FooterIKEA />
            </div>
          }
        />
        <Route
          path="/furnituno/all-products"
          element={
            <div className="App">
              <NavbarIKEA />
              <ProductsPage />
              <FooterIKEA />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
