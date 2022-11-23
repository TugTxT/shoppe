import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import ManageOrderStyle from "../../styled/ManageAcount/ManageOrder";
import NavManageAcount from "../../component/NavManageAcount/NavManageAcount";
import UserAcountInfor from "../../data/UserAcountInfor";
import { Col, Row, Tabs } from "antd";
import NoOrder from "../../component/ManageOrder/NoOrder";
import Order from "../../component/ManageOrder/Order";
import { DataOrder } from "../../data/DataOrder";
import { useDispatch } from "react-redux";
import { orderStatus } from "../../redux-toolkit/reducer/orderSliceReducer";

function ManageOrder() {
  const [btnActive, setBtnActive] = useState("nav-btn");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(orderStatus());
    // console.log(dataUser);
  }, []);

  return (
    <ManageOrderStyle>
      <div className="left" style={{ width: "30%" }}>
        <NavManageAcount></NavManageAcount>
      </div>
      <div className="right">
        <div className="right-top">
          <div className="n">
            <span className="num1">{UserAcountInfor[1].unpaidOrder}</span>
            <span className="num2">{UserAcountInfor[1].orderProcess}</span>
            <span className="num3">{UserAcountInfor[1].orderShipping}</span>
            <span className="num4">{UserAcountInfor[1].orderReceived}</span>
          </div>
          <div className="title">Quản lý đơn hàng</div>
          <div className="tabb">
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="Chờ thanh toán" key="1">
                {DataOrder.length !== 0 ? (
                  <div className="bg">
                    <div className="tabl">
                      <div className="row">
                        <Row>
                          <Col span={2}>
                            <div className="t no">STT</div>
                          </Col>
                          <Col span={8}>
                            <div className="t name">Sản phẩm</div>
                          </Col>
                          <Col span={3}>
                            <div className="t quantity">Số lượng</div>
                          </Col>
                          <Col span={4}>
                            <div className="t price">Giá</div>
                          </Col>
                          <Col span={3}>
                            <div className="t discount">Khuyến mại</div>
                          </Col>
                          <div className="c">
                            <Col span={4}>
                              <div className="t total">Tổng</div>
                            </Col>
                          </div>
                        </Row>
                      </div>
                      <div>
                        {DataOrder?.map((data, index) => (
                          <Order orderData={data} no={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NoOrder />
                )}
              </Tabs.TabPane>
              <Tabs.TabPane tab="Đang xử lý" key="2">
                {DataOrder.length !== 0 ? (
                  <div className="bg">
                    <div className="tabl">
                      <div className="row">
                        <Row>
                          <Col span={2}>
                            <div className="t no">STT</div>
                          </Col>
                          <Col span={8}>
                            <div className="t name">Sản phẩm</div>
                          </Col>
                          <Col span={3}>
                            <div className="t quantity">Số lượng</div>
                          </Col>
                          <Col span={4}>
                            <div className="t price">Giá</div>
                          </Col>
                          <Col span={3}>
                            <div className="t discount">Khuyến mại</div>
                          </Col>
                          <div className="c">
                            <Col span={4}>
                              <div className="t total">Tổng</div>
                            </Col>
                          </div>
                        </Row>
                      </div>
                      <div>
                        {DataOrder?.map((data, index) => (
                          <Order orderData={data} no={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NoOrder />
                )}
              </Tabs.TabPane>
              <Tabs.TabPane tab="Đang vận chuyển" key="3">
                {DataOrder.length !== 0 ? (
                  <div className="bg">
                    <div className="tabl">
                      <div className="row">
                        <Row>
                          <Col span={2}>
                            <div className="t no">STT</div>
                          </Col>
                          <Col span={8}>
                            <div className="t name">Sản phẩm</div>
                          </Col>
                          <Col span={3}>
                            <div className="t quantity">Số lượng</div>
                          </Col>
                          <Col span={4}>
                            <div className="t price">Giá</div>
                          </Col>
                          <Col span={3}>
                            <div className="t discount">Khuyến mại</div>
                          </Col>
                          <div className="c">
                            <Col span={4}>
                              <div className="t total">Tổng</div>
                            </Col>
                          </div>
                        </Row>
                      </div>
                      <div>
                        {DataOrder?.map((data, index) => (
                          <Order orderData={data} no={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NoOrder />
                )}
              </Tabs.TabPane>
              <Tabs.TabPane tab="Đã nhận" key="4">
                {DataOrder.length !== 0 ? (
                  <div className="bg">
                    <div className="tabl">
                      <div className="row">
                        <Row>
                          <Col span={2}>
                            <div className="t no">STT</div>
                          </Col>
                          <Col span={8}>
                            <div className="t name">Sản phẩm</div>
                          </Col>
                          <Col span={3}>
                            <div className="t quantity">Số lượng</div>
                          </Col>
                          <Col span={4}>
                            <div className="t price">Giá</div>
                          </Col>
                          <Col span={3}>
                            <div className="t discount">Khuyến mại</div>
                          </Col>
                          <div className="c">
                            <Col span={4}>
                              <div className="t total">Tổng</div>
                            </Col>
                          </div>
                        </Row>
                      </div>
                      <div>
                        {DataOrder?.map((data, index) => (
                          <Order orderData={data} no={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NoOrder />
                )}
              </Tabs.TabPane>
            </Tabs>
          </div>
        </div>
        {/* <div className="right-bot">
          <NoOrder></NoOrder>
        </div> */}
      </div>
    </ManageOrderStyle>
  );
}

export default ManageOrder;
