import React, { useState } from "react";
import NavbarIKEAStyle from "../../styled/NavbarIKEA";
import truck from "../../assets/svgIcons/truck.svg";
import shopping_bag from "../../assets/svgIcons/shopping_bag.svg";
import heart from "../../assets/svgIcons/heart.svg";
import zip_code from "../../assets/svgIcons/zip-code.svg";
import atlanta from "../../assets/svgIcons/atlanta.svg";

import {
  CameraOutlined,
  CloseOutlined,
  GlobalOutlined,
  MenuOutlined,
  RightOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";

const NavbarIKEA = () => {
  const [appear, setAppear] = useState(false);

  const [navbar, setNavbar] = useState("");

  const [sliderBar, setSliderBar] = useState(false);

  const [y, setY] = useState(window.scrollY);

  const appearNavbar = (e) => {
    if (window.scrollY > 500) {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setNavbar("active");
      } else if (y < window.scrollY) {
        if (navbar) {
          setNavbar("hide");
        }
      }
      setY(window.scrollY);
    } else {
      setNavbar("");
    }
  };

  window.addEventListener("scroll", (e) => appearNavbar(e));

  return (
    <NavbarIKEAStyle>
      <div className="menu-hambuger-container">
        <div className="menu-hambuger-inner">
          <div className="menu-hambuger">
            <span>
              <MenuOutlined onClick={() => setAppear(true)} />
            </span>
            <span>Menu</span>
          </div>
        </div>
      </div>

      <header
        className={`${
          window.scrollY > 500
            ? navbar === "active"
              ? "active"
              : navbar === "hide"
              ? "hide"
              : ""
            : ""
        }`}
      >
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
                <li onClick={() => setSliderBar(true)}>
                  <span>
                    <UserOutlined />
                  </span>
                  <span>Hej! Log in or sign up</span>
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

      <div
        onClick={() => {
          setAppear(false);
          setSliderBar(false);
        }}
        className={`sidebar-layer ${appear || sliderBar ? "appear" : ""}`}
      ></div>
      <aside className={`${appear ? "appear" : ""}`}>
        <div className="sidebar-top">
          <span>
            <CloseOutlined onClick={() => setAppear(false)} />
          </span>
          <div className="sidebar-logo">
            <a href="/ikea">
              <img
                alt=""
                src="https://www.ikea.com/us/en/static/ikea-logo.f7d9229f806b59ec64cb.svg"
              />
            </a>
          </div>
        </div>
        <div className="sidebar-body">
          <nav>
            <ul>
              {[
                "Products",
                "Home Accessories",
                "Rooms",
                "Designs",
                "Deals",
              ].map((item, index) => (
                <li key={index}>
                  <a href={`/ikea/${item}`}>{item}</a>
                </li>
              ))}
            </ul>
            <ul>
              {[
                "New at IKEA",
                "Ideas & Inspiration",
                "Gift Ideas",
                "IKEA Family",
                "IKEA Gift Registry",
                "IKEA food & swedish restaurant",
              ].map((item, index) => (
                <li key={index}>
                  <a href={`/ikea/${item}`}>{item}</a>
                </li>
              ))}
            </ul>
            <ul>
              {[
                "My profile",
                "My orders",
                "Find your IKEA location",
                "IKEA Gift Card",
                "IKEA Credit Card",
                "IKEA For Business",
                "Customer Service",
                "Services",
              ].map((item, index) => (
                <li key={index}>
                  <a href={`/ikea/${item}`}>{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="side-button">
          <a href="/ikea">
            <GlobalOutlined />
            <span>Change country</span>
          </a>
        </div>
      </aside>

      <div
        style={{
          transform: `${sliderBar ? "translate(0px)" : "translate(480px)"}`,
        }}
        className="function-slider"
      >
        <section className="slider-header">
          <CloseOutlined onClick={() => setSliderBar(false)} />
          <div className="header-content">
            <h2>Hej</h2>
            <a href="/login">
              <span>Sign in</span>
            </a>
          </div>
          <div className="header-link">
            <a href="/sign-up">
              <span>Create an IKEA account</span>
              <RightOutlined />
            </a>
          </div>
        </section>
        <section className="slider-body">
          <ul>
            {[
              "My designs & rooms",
              "Purchase history",
              "Shopping list",
              "Planners",
              "Track your order",
            ].map((item, index) => (
              <li key={index}>
                <a href={`/ikea/${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </NavbarIKEAStyle>
  );
};

export default NavbarIKEA;
