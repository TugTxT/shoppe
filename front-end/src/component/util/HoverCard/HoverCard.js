import React from "react";
import HoverCardStyle from "./style";

import { RightOutlined } from "@ant-design/icons";

const HoverCard = ({ product }) => {
  return (
    <HoverCardStyle>
      <a href={`/ikea/${product.name}`}>
        <div className="card-content">
          <div className="card-content-left">
            <h3>{product.name}</h3>
            <span>{product.description.slice(0, 15)}...</span>
          </div>
          <div className="card-content-right">
            <RightOutlined style={{ marginTop: "5px" }} />
          </div>
        </div>
        <div className="card-footer">
          <span>$</span>
          <span>{Math.floor(product.price)}</span>
          <span>.{product.price * 100 - Math.floor(product.price) * 100}</span>
        </div>
      </a>
    </HoverCardStyle>
  );
};

export default HoverCard;
