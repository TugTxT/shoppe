import React, { useEffect, useState } from "react";
import NavManageAcountStyle from "./style";

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
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux-toolkit/selector/selector";
import { storage } from "../../Firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { updateUser } from "../../redux-toolkit/reducer/userSliceReducer";

function NavManageAcount() {
  const User = useSelector(selectUser);
  const dispatch = useDispatch();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState();

  const userName = User?.userName;
  const email = User?.email;
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      console.log(snapshot);
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(url);
      });
    });
  };
  useEffect(() => {
    if (
      imageUrls !== undefined &&
      userName !== undefined &&
      email !== undefined
    ) {
      dispatch(updateUser({ userName, email, avatar: imageUrls }));
      console.log(imageUrls);
    }
  }, [imageUrls]);

  console.log(User);
  const handleLogout = () => {
    if (window.confirm("Bạn có chắc muốn đăng xuất?")) {
      localStorage.removeItem("token");
      window.location = "/";
    }
  };
  return (
    <NavManageAcountStyle>
      <div className="left">
        <div className="avt">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img className="avt-img" src={User?.avatar} />
            <input
              type="file"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <button onClick={uploadFile}> Tải lên</button>
            {/* {imageUrls.map((url) => {
              return <img src={url} />;
            })} */}
          </div>
          <div className="avt-info">
            <div className="avt-name">{User.fullName || ""}</div>
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
        <div className="logout lo" onClick={handleLogout}>
          <LogoutOutlined /> Đăng xuất
          <ArrowRightOutlined className="arrow-icon" />
        </div>
      </div>
    </NavManageAcountStyle>
  );
}

export default NavManageAcount;
