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
            <h3>Join IKEA Family</h3>
            <p>
              Bring your ideas to life with special discounts, inspiration, and
              lots of good things in store. It's all free.
            </p>
            <p className="see-more">See more</p>
            <div>
              <a href="/ikea">
                <span>Join or log in</span>
              </a>
            </div>
          </div>
          <div className="links-group">
            <ul>
              <li>
                <h3>Help</h3>
                <ul>
                  <li>Customer service</li>
                  <li>FAQ</li>
                  <li>My orders</li>
                  <li>Contact Us</li>
                  <li>Product Recalls</li>
                  <li>Return Policy</li>
                  <li>Warranties</li>
                  <li>Feedback</li>
                </ul>
              </li>
              <li>
                <h3>Shop & Learn</h3>
                <ul>
                  <li>Find a Location</li>
                  <li>IKEA Services</li>
                  <li>IKEA Family</li>
                  <li>IKEA Planning Tools</li>
                  <li>IKEA Brochures</li>
                  <li>IKEA Gift Registry</li>
                  <li>Buying giudes</li>
                  <li>Gift Cards</li>
                  <li>IKEA Credit Card Management</li>
                  <li>IKEA Credit Cards</li>
                  <li>Explore the New IKEA App</li>
                </ul>
              </li>
              <li>
                <h3>About IKEA</h3>
                <ul>
                  <li>This is IKEA</li>
                  <li>Careers</li>
                  <li>Newsroom</li>
                  <li>Life at Home</li>
                  <li>A Sustainable Everyday</li>
                  <li>IKEA Foundation</li>
                  <li>Creating Safer Homes Together</li>
                </ul>
              </li>
              <li>
                <h3>Legal</h3>
                <ul>
                  <li>Privacy & Security</li>
                  <li>Privacy policy</li>
                  <li>Terms and conditions</li>
                  <li>IKEA Children’s Product Registration</li>
                  <li>IKEA SMÅLAND Privacy notice</li>
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
