import React from "react";
import BannerStyle from "../../styled/Banner";

const Banner = () => {
  return (
    <BannerStyle>
      <span>Quyền lợi cộng đồng</span>
      <h2>
        Giờ đây, tiết kiệm 5% tại cửa hàng khi mua hàng với thẻ thành viên*{" "}
        <br />
        <br /> Tiết kiệm cho các tùy chọn giao hàng được chọn trực tuyến và tại
        cửa hàng**
      </h2>
      <div className="banner-button">
        <a href="/">Tham gia miễn phí</a>
        <a href="/">Tìm hiểu thêm</a>
      </div>
      <span>
        Bạn đã là thành viên? <a href="/ikea">Đăng nhập</a>
      </span>
      <p>
        *Giảm giá 5% và tiết kiệm khi giao hàng chỉ dành cho các thành viên Gia
        đình Furnituno. Xem các điều khoản và điều kiện.
      </p>
    </BannerStyle>
  );
};

export default Banner;
