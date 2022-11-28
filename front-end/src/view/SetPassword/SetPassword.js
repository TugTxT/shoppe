import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SetPasswordStyle from "../../styled/SetPassword";
import { Link } from "react-router-dom";
import {
  ArrowLeftOutlined,
  ExclamationCircleOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setPassword } from "../../redux-toolkit/reducer/userSliceReducer";
const schema = yup.object().shape({
  token: yup.string().required(" Vui lòng nhập token!"),
  newPassword: yup
    .string()
    .required(" Vui lòng nhập mật khẩu !")
    .min(4, " Mật khẩu từ 4-20 ký tự !")
    .max(20, " Mật khẩu từ 4-20 ký tự !"),
  // confirmPassword: yup
  //   .string()
  //   .required(" Vui lòng nhập xác nhận mật khẩu!")
  //   .oneOf([yup.ref("password"), null], " Mật khẩu không khớp"),
});
function SetPassword() {
  const [isChecked, setIsChecked] = useState(false);
  const [hidePass, setHidePass] = useState(true);

  const dispatch = useDispatch();

  const handleChecked = (event) => {
    if (event.target.checked) {
      setIsChecked(true);
      console.log("true");
    } else {
      setIsChecked(false);
      console.log("False");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    console.log("data", data);
    dispatch(setPassword(data));
  };
  return (
    <SetPasswordStyle>
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
            <span className="text1">Đặt mật khẩu </span>
            <span className="text2">tài khoản FurniTuno của bạn.</span>
            <br />
            <p>Nếu bạn đã có tài khoản, hãy </p>
            <Link className="link-login" to={"/login"}>
              đăng nhập
            </Link>
          </h1>
        </div>
        <div className="img">
          <div className="img-left">
            <div className="img1"></div>
            <div className="img2"></div>
            {/* <div className="img3"></div> */}
            {/* <div className="img4"></div> */}
          </div>
          <div className="img-right">
            <div className="img5"></div>
            <div className="img6"></div>
            <div className="img7"></div>
            {/* <div className="img8"></div> */}
          </div>
        </div>
        <div className="left-bot">
          <p>© Inter FurniTuno Systems 2022</p>
        </div>
      </div>
      <div className="right">
        <form className="form" onSubmit={handleSubmit(submitForm)}>
          <label>Token</label>
          <input
            type={"text"}
            {...register("token", { required: true })}
            placeholder={"Token"}
          />
          {errors.token?.type !== undefined && (
            <p className="warning">
              <ExclamationCircleOutlined />
              {errors.token?.message}
            </p>
          )}
          <label>Mật khẩu</label>
          <div className="pass">
            <input
              type={hidePass ? "password" : "text"}
              name={"password"}
              className={"password"}
              {...register("newPassword", { required: true })}
            />
            <div className="hide-pass" onClick={() => setHidePass(!hidePass)}>
              {hidePass ? <EyeInvisibleOutlined /> : <EyeOutlined />}
            </div>
          </div>

          {errors.password?.type !== undefined && (
            <p className="warning">
              <ExclamationCircleOutlined />
              {errors.password?.message}
            </p>
          )}
          {/* <label>Xác nhận mật khẩu</label>
          <div className="pass">
            <input
              type={hidePass ? "password" : "text"}
              name={"password"}
              className={"password"}
              // {...register("confirmPassword", { required: true })}
            />
            <div className="hide-pass" onClick={() => setHidePass(!hidePass)}>
              {hidePass ? <EyeInvisibleOutlined /> : <EyeOutlined />}
            </div>
          </div> */}

          {errors.confirmPassword?.type !== undefined && (
            <p className="warning">
              <ExclamationCircleOutlined />
              {errors.confirmPassword?.message}
            </p>
          )}
          <input
            type={"submit"}
            // className={isChecked ? "btn-submit-disable" : "btn-submit-active"}
            value="Đặt mật khẩu"
          />
        </form>
      </div>
    </SetPasswordStyle>
  );
}

export default SetPassword;
