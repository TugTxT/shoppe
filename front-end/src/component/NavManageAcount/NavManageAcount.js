import React, { useState } from "react";
import NavManageAcountStyle from "./style";
import UserAcountInfor from "../../data/UserAcountInfor";
import { Link } from "react-router-dom";
import {
  ArrowRightOutlined,
  EnvironmentOutlined,
  FileProtectOutlined,
  HeartOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

function NavManageAcount() {
  const handleLogout = () => {
    window.confirm("Bạn có chắc muốn đăng xuất?");
    localStorage.removeItem("token");
  };
  return (
    <NavManageAcountStyle>
      <div className="left">
        <div className="avt">
          <div>
            <img className="avt-img" src={UserAcountInfor[1].img} />
          </div>
          <div className="avt-info">
            <div className="avt-name">{UserAcountInfor[1].name}</div>
            <div className="avt-phone">{UserAcountInfor[1].phone} </div>
          </div>
        </div>
        <Link to={"/acount-infor"} className="acount-info ai">
          <UserOutlined /> Thông tin tài khoản
          <ArrowRightOutlined className="arrow-icon ai" />
        </Link>
        <Link to={"/address"} className="address ad">
          <EnvironmentOutlined /> Địa chỉ và liên hệ
          <ArrowRightOutlined className="arrow-icon ad" />
        </Link>
        <Link to={"/manageorder"} className="purchase-history mo">
          <ShoppingCartOutlined /> Theo dõi đơn hàng
          <ArrowRightOutlined className="arrow-icon mo" />
        </Link>
        <Link to={"/warranty"} className="warranty wr">
          <FileProtectOutlined />
          Tra cứu bảo hành <ArrowRightOutlined className="arrow-icon" />
        </Link>
        <Link to={"/favorite"} className="favorite fv">
          <HeartOutlined /> Yêu thích
          <ArrowRightOutlined className="arrow-icon" />
        </Link>
        <Link to={"/"} className="logout lo" onClick={handleLogout}>
          <LogoutOutlined /> Đăng xuất
          <ArrowRightOutlined className="arrow-icon" />
        </Link>
      </div>
    </NavManageAcountStyle>
  );
}

export default NavManageAcount;
