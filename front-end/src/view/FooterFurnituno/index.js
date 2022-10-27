import React from "react";
import FooterIKEAStyle from "../../styled/FooterIKEA";

import facebook from "../../assets/social-media-icon/facebook.svg";
import instagram from "../../assets/social-media-icon/instagram.svg";
import printest from "../../assets/social-media-icon/printest.svg";
import twitter from "../../assets/social-media-icon/twitter.svg";
import youtube from "../../assets/social-media-icon/youtube.svg";

const FooterIKEA = () => {
  return (
    <FooterIKEAStyle>
      <div className="footer-container">
        <div className="footer-links">
          <div className="features-links">
            <h3>Tham gia cộng đồng Furnituno </h3>
            <p>
              Hãy biến những ý tưởng của bạn thành hiện thực với các chương
              trình giảm giá, truyền cảm hứng đặc biệt và rất nhiều điều tốt
              trong cửa hàng. Tất cả đều miễn phí.
            </p>
            <p className="see-more">Xem thêm</p>
            <div>
              <a href="/ikea">
                <span>Tham gia hoặc đăng nhập</span>
              </a>
            </div>
          </div>
          <div className="links-group">
            <ul>
              <li>
                <h3>Thông tin chung</h3>
                <ul>
                  <li>Giới thiệu về CTY</li>
                  <li>Tin tuyển dụng</li>
                  <li>Liên hệ góp ý</li>
                  <li>Khách hàng</li>
                </ul>
              </li>
              <li>
                <h3>Hỗ trợ khách hàng</h3>
                <ul>
                  <li>Hướng dẫn mua hàng trực tuyến</li>
                  <li>Hướng dẫn thanh toán</li>
                  <li>Hướng dẫn mua hàng trả góp</li>
                  <li>In hóa đơn điện tử</li>
                  <li>Tra cứu bảo hành</li>
                </ul>
              </li>
              <li>
                <h3>Chính sách chung</h3>
                <ul>
                  <li>Chính sách vẫn chuyển</li>
                  <li>Chính sách bảo hành</li>
                  <li>Chính sách cho doanh nghiệp</li>
                  <li>Chính sách hàng chính hãng</li>
                  <li>Bảo mật thông tin khách hàng</li>
                </ul>
              </li>
              <li>
                <h3>Cửa hàng & Liên hệ</h3>
                <ul>
                  <li>Email: noithat@gmail.com</li>
                  <li>Chi nhánh 1: Hà Nội</li>
                  <li>Chi nhánh 2: New York</li>
                  <li>Chi nhánh 3: London</li>
                  <li>Hotline: 4953</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-icons">
          <div className="social-media-links">
            <ul>
              <li>
                <img alt="" src={facebook} />
              </li>
              <li>
                <img alt="" src={instagram} />
              </li>
              <li>
                <img alt="" src={printest} />
              </li>
              <li>
                <img alt="" src={twitter} />
              </li>
              <li>
                <img alt="" src={youtube} />
              </li>
            </ul>
          </div>
          <div className="payment-options">
            <ul>
              <li>
                <img
                  alt=""
                  src="https://www.ikea.com/global/assets/logos/external-payment-providers/visa.svg"
                />
              </li>
              <li>
                <img
                  alt=""
                  src="https://www.ikea.com/global/assets/logos/external-payment-providers/master-card.svg"
                />
              </li>
              <li>
                <img
                  alt=""
                  src="https://www.ikea.com/global/assets/logos/external-payment-providers/discover.svg"
                />
              </li>
              <li>
                <img
                  alt=""
                  src="https://www.ikea.com/global/assets/logos/external-payment-providers/american-express.svg"
                />
              </li>
              <li>
                <img
                  alt=""
                  src="https://www.ikea.com/global/assets/logos/external-payment-providers/ikea-credit-card.svg"
                />
              </li>
              <li>
                <img
                  alt=""
                  src="https://www.ikea.com/global/assets/logos/external-payment-providers/paypal.svg"
                />
              </li>
              <li>
                <img
                  alt=""
                  src="https://www.ikea.com/global/assets/logos/external-payment-providers/apple-pay.svg"
                />
              </li>
              <li>
                <img
                  alt=""
                  src="https://www.ikea.com/global/assets/logos/external-payment-providers/union-pay.svg"
                />
              </li>
              <li>
                <img
                  alt=""
                  src="https://www.ikea.com/global/assets/logos/external-payment-providers/jcb.svg"
                />
              </li>
              <li>
                <img
                  alt=""
                  src="https://www.ikea.com/global/assets/logos/external-payment-providers/diners-club.svg"
                />
              </li>
              <li>
                <img
                  alt=""
                  src="https://www.ikea.com/global/assets/logos/external-payment-providers/ikea-gift-card.svg"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="copy-right">
          <span>© Copyright by Sinha2k. 2022</span>
          <span>Cookie policy</span>
          <span>Cookie settings</span>
        </div>
      </div>
    </FooterIKEAStyle>
  );
};

export default FooterIKEA;
