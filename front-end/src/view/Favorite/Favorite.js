import React from "react";
import FavoriteStyle from "../../styled/Favorite";
import NavManageAcount from "../../component/NavManageAcount/NavManageAcount";
import { HeartOutlined } from "@ant-design/icons";
import Cart from "../../data/Cart";
import CardFavorite from "../../component/CardFavorite/CardFavorite";

function Favorite() {
  return (
    <FavoriteStyle>
      <div className="left" style={{ width: "30%" }}>
        <NavManageAcount></NavManageAcount>
      </div>
      <div className="right">
        <div className="right-top">
          <div className="title">Yêu thích</div>
          <h5>Tất cả các sản phẩm b yêu thích sẽ ở đây!</h5>
        </div>
        {Cart.length !== 0 ? (
          <div className="right-bot1">
            {Cart?.map((data) => (
              <CardFavorite cardFavorite={data} />
            ))}
          </div>
        ) : (
          <div className="right-bot">
            <HeartOutlined className="icon" />
            <h4>Bạn chưa yêu thích sản phẩm nào thì phải?</h4>
          </div>
        )}
      </div>
    </FavoriteStyle>
  );
}

export default Favorite;
