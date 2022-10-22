import React, { useState } from "react";
import FooterStyle from "../../styled/Footer";
const Footer = () => {
  const [switchLight, setSwitchLight] = useState(false);
  return (
    <FooterStyle>
      <div className="top_content">
        <h3>A world of inspiration for your home</h3>
        <img alt="" src="https://www.ikea.com/global/en/images/ikea-logo.svg" />
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
          <a href="/">International sales</a>
          <a href="/">About IKEA</a>
          <a href="/">IKEA Museum</a>
          <a href="/">Work with us</a>
          <a href="/">Ethics & Integrity</a>
        </div>
        <div className="end_copy">
          <div className="cookie_privacy">
            <a href="/">Cookie Information</a>
            <a href="/">Privacy statement</a>
          </div>
          <div className="copyright">
            <p>© Inter IKEA Systems B.V. 1999 - 2022</p>
          </div>
          <div className="co_worker">
            <a href="/">Co-worker login</a>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
