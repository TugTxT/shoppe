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
        <div className="acount-info">
          <UserOutlined /> Thông tin tài khoản{" "}
          <ArrowRightOutlined className="arrow-icon" />
        </div>
        <div className="address">
          <EnvironmentOutlined /> Địa chỉ và liên hệ
          <ArrowRightOutlined className="arrow-icon" />
        </div>
        <div className="purchase-history">
          <ShoppingCartOutlined /> Lịch sử mua hàng
          <ArrowRightOutlined className="arrow-icon" />
        </div>
        <div className="warranty">
          <FileProtectOutlined />
          Tra cứu bảo hành <ArrowRightOutlined className="arrow-icon" />
        </div>
        <div className="favorite">
          <HeartOutlined /> Yêu thích
          <ArrowRightOutlined className="arrow-icon" />
        </div>
        <div className="logout">
          <LogoutOutlined /> Đăng xuất
          <ArrowRightOutlined className="arrow-icon" />
        </div>
      </div>
    </NavManageAcountStyle>
  );
}

export default NavManageAcount;
