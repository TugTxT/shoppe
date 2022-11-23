import React, { useState } from "react";
import AcountInforStyle from "../../styled/ManageAcount/AcountInfor";
import UserAcountInfor from "../../data/UserAcountInfor";
import { Link } from "react-router-dom";
import NavManageAcount from "../../component/NavManageAcount/NavManageAcount";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { acountInfor } from "../../redux-toolkit/reducer/userSliceReducer";
import { selectUser } from "../../redux-toolkit/selector/selector";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function AcountInfor() {
  const schema = yup.object().shape({
    userName: yup.string().required(" Vui lòng nhập tên tài khoản!"),
    // dateOfBirth: yup
    //   .date(" Vui lòng chọn ngày sinh!")
    //   .typeError(" Vui lòng chọn ngày sinh!")
    //   .required(" Vui lòng nhập ngày sinh!")
    //   .max(new Date(), " Bạn đến từ tương lai à ?")
    //   .min("1969-11-13", " Bạn sống hơi thọ rồi!"),

    // tel: yup
    //   .string()
    //   .required(" Vui lòng nhập số điện thoại!")
    //   .matches(
    //     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    //     " Số điện thoại không hợp lệ!"
    //   ),

    email: yup
      .string()
      .email(" Định dạng email chưa đúng")
      .required(" Vui lòng nhập email !"),
    // password: yup
    //   .string()
    //   .required(" Vui lòng nhập mật khẩu !")
    //   .min(4, " Mật khẩu từ 4-20 ký tự !")
    //   .max(20, " Mật khẩu từ 4-20 ký tự !"),
    // confirmPassword: yup
    //   .string()
    //   .required(" Vui lòng nhập xác nhận mật khẩu!")
    //   .oneOf([yup.ref("password"), null], " Mật khẩu không khớp"),
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
  };

  const dispatch = useDispatch();

  const dataUser = useSelector(selectUser);

  useEffect(() => {
    dispatch(acountInfor());
    console.log(dataUser);
  }, []);

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
                value={dataUser.fullName}
                {...register("fullName")}
              />
            </div>
            <div className="i">
              <label>Tên đăng nhập</label>
              <input
                type={"text"}
                className="phone"
                value={dataUser.userName}
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
                defaultValue={dataUser.email}
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
