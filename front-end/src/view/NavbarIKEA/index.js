import React from "react";
import NavbarIKEAStyle from "../../styled/NavbarIKEA";
import truck from "../../assets/svgIcons/truck.svg";
import shopping_bag from "../../assets/svgIcons/shopping_bag.svg";
import heart from "../../assets/svgIcons/heart.svg";
import zip_code from "../../assets/svgIcons/zip-code.svg";
import atlanta from "../../assets/svgIcons/atlanta.svg";

import {
  CameraOutlined,
  MenuOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";

const NavbarIKEA = () => {
  return (
    <NavbarIKEAStyle>
      <div className="menu-hambuger-container">
        <div className="menu-hambuger-inner">
          <div className="menu-hambuger">
            <span>
              <MenuOutlined />
            </span>
            <span>Menu</span>
          </div>
        </div>
      </div>
      <header>
        <div className="header-container">
          <div className="header-container-inner">
            <div className="header-container-main">
              <div className="header-logo">
                <a href="/ikea">
                  <img
                    alt=""
                    src="https://www.ikea.com/us/en/static/ikea-logo.f7d9229f806b59ec64cb.svg"
                  />
                </a>
              </div>
              <div className="header-search">
                <div className="search-field">
                  <span style={{ left: "30px" }}>
                    <SearchOutlined />
                  </span>
                  <input placeholder="What are you looking for?" />
                  <span style={{ right: "40px" }}>
                    <CameraOutlined />
                  </span>
                </div>
              </div>
              <ul className="header-icons">
                <li>
                  <a href="/ikea">
                    <span>
                      <UserOutlined />
                    </span>
                    <span>Hej! Log in or sign up</span>
                  </a>
                </li>
                <li>
                  <span>
                    <img alt="" src={truck} />
                  </span>
                </li>
                <li>
                  <span>
                    <img alt="" src={heart} />
                  </span>
                </li>
                <li>
                  <span>
                    <img alt="" src={shopping_bag} />
                    <span>0</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className="navbar">
        <nav>
          <ul className="nav-list">
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Home Accessories</a>
            </li>
            <li>
              <a href="/">Rooms</a>
            </li>
            <li>
              <a href="/">Designs</a>
            </li>
            <li>
              <a href="/">Deals</a>
            </li>
          </ul>
          <div className="navigation-container">
            <div className="nav-item">
              <img alt="" src={atlanta} />
              <span>Atlanta</span>
            </div>
            <div className="nav-item">
              <img alt="" src={zip_code} />
              <span>Enter ZIP Code</span>
            </div>
          </div>
        </nav>
      </div>
    </NavbarIKEAStyle>
  );
};

export default NavbarIKEA;
