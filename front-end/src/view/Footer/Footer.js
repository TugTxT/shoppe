import React, { useState } from "react";
import FooterStyle from "../../styled/Footer";
import logo from "../../assets/images/logo.png";
const Footer = () => {
  const [switchLight, setSwitchLight] = useState(false);
  return (
    <FooterStyle>
      <div className="top_content">
        <h3>Niềm cảm hứng bất tận cho ngôi nhà của bạn</h3>
        <img alt="" src={logo} />
      </div>
      <div className="room_container">
        <div className="room_images">
          <img
            className="room_image"
            alt=""
            src="https://www.ikea.com/global/en/images/footer-daylight.svg"
          />
          {switchLight ? (
            <img
              className="room_image_lights"
              alt=""
              src="https://www.ikea.com/global/en/images/footer-nighttime.svg"
            />
          ) : (
            ""
          )}
        </div>
        <div className="light_switch">
          <button onClick={() => setSwitchLight(!switchLight)}>
            <img
              alt=""
              src="https://www.ikea.com/global/en/images/smart-home.svg"
            />
            <img
              alt=""
              src="https://www.ikea.com/global/en/images/smart-home_hover.svg"
            />
          </button>
          <button onClick={() => setSwitchLight(!switchLight)}>
            <img
              alt=""
              src="https://www.ikea.com/global/en/images/smart-home.svg"
            />
            <img
              alt=""
              src="https://www.ikea.com/global/en/images/smart-home_hover.svg"
            />
          </button>
        </div>
      </div>
      <div className="bottom_content">
        <div className="links">
          <a href="/">Mua sắm đa quốc gia</a>
          <a href="/">Về chúng tôi</a>
          <a href="/">Làm việc với chúng tôi</a>
          <a href="/">Đạo đức & Sự toàn vẹn</a>
        </div>
        <div className="end_copy">
          <div className="cookie_privacy">
            <a href="/">Cookie Information</a>
            <a href="/">Policy statement</a>
          </div>
          <div className="copyright">
            <p>© Copyright by Sinha2k . th 10 - 2022</p>
          </div>
          <div className="co_worker">
            <a href="/">Đăng nhập</a>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
