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
import AcountInfor from "./view/UserAcount/AcountInfor";
import Address from "./view/UserAcount/Address";
import ManageOrder from "./view/UserAcount/ManageOrder";

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
        <Route
          path="/acount-infor"
          element={
            <div className="App">
              <NavbarIKEA />
              <AcountInfor />
            </div>
          }
        />
        <Route
          path="/address"
          element={
            <div className="App">
              <NavbarIKEA />
              <Address />
            </div>
          }
        />
        <Route
          path="/manageOrder"
          element={
            <div className="App">
              <NavbarIKEA />
              <ManageOrder />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
