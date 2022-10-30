import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./view/Homepage/Homepage";
import Navbar from "./view/Navbar/Navbar";
import Footer from "./view/Footer/Footer";
import NavbarIKEA from "./view/NavbarIKEA";
import HomepageIKEA from "./view/HomepageIKEA";
import Banner from "./view/Banner/Banner";
import Login from "./view/Login/Login";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Register from "./view/Register/Register";

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
          path="/ikea"
          element={
            <div className="App">
              <NavbarIKEA />
              <Banner />
              <HomepageIKEA />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="App">
              <Login />
            </div>
          }
        />
        <Route
          path="/register"
          element={
            <div className="App">
              <Register />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
