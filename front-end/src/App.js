import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./view/Homepage/Homepage";
import Navbar from "./view/Navbar/Navbar";
import Footer from "./view/Footer/Footer";
import NavbarIKEA from "./view/NavbarIKEA";
import HomepageIKEA from "./view/HomepageIKEA";
import Banner from "./view/Banner/Banner";

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
      </Routes>
    </Router>
  );
}

export default App;
