import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./view/Homepage/Homepage";
import { Provider } from "react-redux";
import Navbar from "./view/Navbar/Navbar";
import Footer from "./view/Footer/Footer";
import NavbarIKEA from "./view/NavbarFurnituno";
import HomepageIKEA from "./view/HomepageFurnituno";
import Banner from "./view/Banner/Banner";
import Login from "./view/Login/Login";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Register from "./view/Register/Register";
import SetPassword from "./view/SetPassword/SetPassword";
import AcountInfor from "./view/UserAcount/AcountInfor";
import Address from "./view/UserAcount/Address";
import ManageOrder from "./view/UserAcount/ManageOrder";
import Warranty from "./view/Warranty/Warranty";
import Favorite from "./view/Favorite/Favorite";
import FooterIKEA from "./view/FooterFurnituno";
import ProductsPage from "./view/Products";
import ProductDetail from "./view/ProductDetail";

import CartPage from "./view/Cart";
import Wishlist from "./view/Wishlist";
import store from "./redux-toolkit/store";
import ForgotPass from "./view/ForgotPass/ForgotPass";

function App() {
  return (
    <Provider store={store}>
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
          <Route
            path="/furnituno/product/:id"
            element={
              <div className="App">
                <NavbarIKEA />
                <ProductDetail />
                <FooterIKEA />
              </div>
            }
          />
          <Route
            path="/furnituno/cart"
            element={
              <div className="App">
                <NavbarIKEA />
                <CartPage />
                <FooterIKEA />
              </div>
            }
          />
          <Route
            path="/furnituno/wish-list"
            element={
              <div className="App">
                <NavbarIKEA />
                <Wishlist />
                <FooterIKEA />
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
                <FooterIKEA />
              </div>
            }
          />
          <Route
            path="/address"
            element={
              <div className="App">
                <NavbarIKEA />
                <Address />
                <FooterIKEA />
              </div>
            }
          />
          <Route
            path="/manageOrder"
            element={
              <div className="App">
                <NavbarIKEA />
                <ManageOrder />
                <FooterIKEA />
              </div>
            }
          />
          <Route
            path="/warranty"
            element={
              <div className="App">
                <NavbarIKEA />
                <Warranty />
                <FooterIKEA />
              </div>
            }
          />
          <Route
            path="/favorite"
            element={
              <div className="App">
                <NavbarIKEA />
                <Favorite />
                <FooterIKEA />
              </div>
            }
          />
          <Route
            path="/set-password"
            element={
              <div className="App">
                <NavbarIKEA />
                <SetPassword />
              </div>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <div className="App">
                <NavbarIKEA />
                <ForgotPass />
              </div>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
