import React, { useState } from "react";
import AcountInforStyle from "../../styled/ManageAcount/AcountInfor";
import UserAcountInfor from "../../data/UserAcountInfor";
import { Link } from "react-router-dom";
import NavManageAcount from "../../component/NavManageAcount/NavManageAcount";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  acountInfor,
  updateUser,
} from "../../redux-toolkit/reducer/userSliceReducer";
import { selectUser } from "../../redux-toolkit/selector/selector";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function AcountInfor() {
  const [reload, setReLoad] = useState(false);

  const schema = yup.object().shape({
    userName: yup.string().required(" Vui lòng nhập tên tài khoản!"),
    email: yup
      .string()
      .email(" Định dạng email chưa đúng")
      .required(" Vui lòng nhập email !"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    console.log("data", data);
    dispatch(updateUser(data));

    setReLoad(!reload);
  };

  const dispatch = useDispatch();

  const dataUser = useSelector(selectUser);

  useEffect(() => {
    dispatch(acountInfor());
    console.log(dataUser);
  }, [reload]);

  return (
    <AcountInforStyle>
      <div className="left" style={{ width: "30%" }}>
        <NavManageAcount></NavManageAcount>
      </div>
      <div className="right">
        <div className="title">Thông tin tài khoản</div>
        <form className="form" onSubmit={handleSubmit(submitForm)}>
          <div className="f">
            <div className="i">
              <label>Họ và tên</label>
              <input
                type={"text"}
                className="name"
                defaultValue={dataUser?.fullName}
                {...register("fullName")}
              />
            </div>
            <div className="i">
              <label>Tên đăng nhập</label>
              <input
                type={"text"}
                className="phone"
                value={dataUser?.userName}
                {...register("userName")}
              />
            </div>
          </div>
          <div className="f">
            <div className="i">
              <label>Email</label>
              <input
                type={"email"}
                className="email"
                defaultValue={dataUser?.email}
                {...register("email")}
              />
            </div>
            {/* <div className="i">
              <label>Ngày sinh</label>
              <input
                type={"date"}
                className="dateOfBird"
                defaultValue={UserAcountInfor[1].dateOfBird}
              />
            </div> */}
          </div>
          {/* <div className="i">
            <label>Giới tính</label>
            <select className="sex">
              <option value={"male"}>Nam</option>
              <option value={"female"}>Nữ</option>
              <option value={"other"}>Khác</option>
            </select>
          </div> */}
          <div>
            <label>Đổi mật khẩu</label>
            <div className="re-pass">
              <div>
                <p>Mật khẩu hiện tại</p>
                <input
                  type={"text"}
                  defaultValue={""}
                  placeholder={"*********"}
                ></input>
              </div>
              <div>
                <p>Mật khẩu mới</p>
                <input
                  type={"text"}
                  value={UserAcountInfor[1].password}
                ></input>
              </div>
            </div>
          </div>
          <div>
            <input type={"submit"} value={"Lưu"} />
          </div>
        </form>
      </div>
    </AcountInforStyle>
  );
}

export default AcountInfor;
