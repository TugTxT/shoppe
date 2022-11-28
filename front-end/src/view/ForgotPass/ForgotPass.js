import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ForgotPassStyle from "../../styled/ForgotPass";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ArrowLeftOutlined,
  ExclamationCircleOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { forgotPass } from "../../redux-toolkit/reducer/userSliceReducer";
// import { selectStatusForgotPass } from "../../redux-toolkit/selector/selector";
const schema = yup.object().shape({
  userName: yup.string().required(" Vui lòng điền username !"),
});
function ForgotPass() {
  // const status = useSelector(selectStatusForgotPass);
  // console.log(status);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    dispatch(forgotPass(data));
    console.log(data);
  };
  return (
    <ForgotPassStyle>
      <div className="left">
        <div className="left-head">
          <div className="icon-arrow">
            <ArrowLeftOutlined />
          </div>
          <Link to={"/"}>
            <img
              alt="IKEA"
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.15752-9/307425108_653553736176279_2774900988508384418_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=IVpOxwBG4mcAX-YNXz4&_nc_ht=scontent.fsgn2-4.fna&oh=03_AdSsNXeNpxVXlVB0c1pMka0fMI2ly5KLf6QaCeeUpft_Dw&oe=6382C306"
              color="#0058a3"
              className="logo"
            />
          </Link>
        </div>
        <div className="left-note">
          <h1>
            <span className="text1">Quên mật khẩu </span>
            <span className="text2">tài khoản FURNITUNO của bạn.</span>
            <p>
              Vui lòng nhập tên tài khoản và token sẽ được gửi về email của bạn!
            </p>
          </h1>
        </div>
      </div>
      <div className="right">
        <form onSubmit={handleSubmit(submitForm)} className={"form"}>
          <label>Tên đăng nhập</label>
          <input
            type={"text"}
            name={"userName"}
            className={
              errors.userName?.type !== undefined ? "email-false" : "email-true"
            }
            {...register("userName", { required: true })}
          />
          {errors.userName?.type !== undefined && (
            <p className="warning">
              <ExclamationCircleOutlined />
              {errors.userName?.message}
            </p>
          )}

          <div style={{ position: "relative" }}>
            <input type={"submit"} value="Tiếp tục" />
          </div>
        </form>
      </div>
    </ForgotPassStyle>
  );
}

export default ForgotPass;
