import React from "react";
import BannerStyle from "../../styled/Banner";

const Banner = () => {
  return (
    <BannerStyle>
      <span>IKEA Family Benefits</span>
      <h2>
        Now save 5% in-store on eligible purchases* <br />
        <br /> Plus, save on select delivery options online and in-store**
      </h2>
      <div className="banner-button">
        <a href="/">Join for free</a>
        <a href="/">Learn more</a>
      </div>
      <span>
        Already a member? <a href="/ikea">Login</a>
      </span>
      <p>
        *5% off and delivery savings are for IKEA Family members only;
        exclusions apply. See full terms and conditions
      </p>
    </BannerStyle>
  );
};

export default Banner;
