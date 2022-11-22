import React from "react";
import CardFavoriteStyle from "./style";

function CardFavorite({ cardFavorite }) {
  return (
    <CardFavoriteStyle>
      <div className="infor">
        <img src={cardFavorite.product.attachment} />
        {console.log(cardFavorite)}
      </div>
    </CardFavoriteStyle>
  );
}

export default CardFavorite;
