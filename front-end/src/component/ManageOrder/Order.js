import { Col, Row } from "antd";
import React from "react";
import Orderstyle from "./OrderStyle";

function Order({ orderData, no }) {
  return (
    <Orderstyle>
      <div className="row1">
        <Row>
          <Col span={2}>
            <div className="t1 no">{no}</div>
          </Col>
          <Col span={8}>
            <div className="t1 name1">
              <img src={orderData?.productVariationEnitity?.image} />
              <div>
                {orderData?.productVariationEnitity?.productId?.nameProduct}
              </div>
            </div>
          </Col>
          <Col span={3}>
            <div className="t1 quantity1">{orderData.quantity}</div>
          </Col>
          <Col span={4}>
            <div className="t1 price1">
              {orderData?.productVariationEnitity?.productId?.price}
            </div>
          </Col>
          <Col span={3}>
            <div className="t1 discount1">{orderData.discount || 0}</div>
          </Col>
          <div className="c1">
            <Col span={4}>
              <div className="t1 total1">
                {orderData?.productVariationEnitity?.productId?.price *
                  orderData.quantity +
                  (orderData?.productVariationEnitity?.productId?.price *
                    (orderData?.discount || 0) *
                    orderData.quantity) /
                    100}
              </div>
            </Col>
          </div>
        </Row>
      </div>
    </Orderstyle>
  );
}

export default Order;
