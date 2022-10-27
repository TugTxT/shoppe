import React from "react";
import logo from "../../assets/images/logo-2.png";
import { Navbar as NavbarStyle } from "../../styled/Navbar";
import { NavbarSticky as NavSticky } from "../../styled/Navbar";

import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <NavbarStyle>
      <NavSticky>
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <MenuOutlined />
      </NavSticky>
      <div className="nav_menu"></div>
    </NavbarStyle>
  );
};

export default Navbar;
