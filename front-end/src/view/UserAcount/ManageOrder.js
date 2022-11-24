import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import ManageOrderStyle from "../../styled/ManageAcount/ManageOrder";
import NavManageAcount from "../../component/NavManageAcount/NavManageAcount";
import UserAcountInfor from "../../data/UserAcountInfor";
import { Col, Row, Tabs } from "antd";
import NoOrder from "../../component/ManageOrder/NoOrder";
import Order from "../../component/ManageOrder/Order";
import { DataOrder } from "../../data/DataOrder";
import { useDispatch, useSelector } from "react-redux";
import {
  orderList,
  orderStatus,
} from "../../redux-toolkit/reducer/orderSliceReducer";
import {
  selectOrderList,
  selectOrderStatus,
} from "../../redux-toolkit/selector/selector";

function ManageOrder() {
  const [btnActive, setBtnActive] = useState("nav-btn");
  const [tabStatus, setTabStatus] = useState(null);

  const dataOrder = useSelector(selectOrderStatus);
  const orderListData = useSelector(selectOrderList);

  const getOrderrListData = (status) => {
    dispatch(orderStatus(status)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(orderList());
      }
    });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    getOrderrListData("Chờ vận chuyển");
  }, []);

  useEffect(() => {
    switch (Number(tabStatus)) {
      case 1:
        getOrderrListData("Chờ vận chuyển");
        break;
      case 2:
        getOrderrListData("Chờ nhận hàng");
        break;
      case 3:
        getOrderrListData("Chờ xác nhận");
        break;
      case 4:
        getOrderrListData("Chờ đánh giá");
        break;
      case 5:
        getOrderrListData("Hoàn thành");
        break;
      case 6:
        getOrderrListData("Hủy");
        break;

      default:
        getOrderrListData("Chờ vận chuyển");
        break;
    }
  }, [tabStatus]);

  return (
    <ManageOrderStyle>
      <div className="left" style={{ width: "30%" }}>
        <NavManageAcount></NavManageAcount>
      </div>
      <div className="right">
        <div className="right-top">
          {/* <div className="n">
            <span className="num1">{UserAcountInfor[1].unpaidOrder}</span>
            <span className="num2">{UserAcountInfor[1].orderProcess}</span>
            <span className="num3">{UserAcountInfor[1].orderShipping}</span>
            <span className="num4">{UserAcountInfor[1].orderReceived}</span>
          </div> */}
          <div className="title">Quản lý đơn hàng</div>
          <div className="tabb">
            <Tabs
              defaultActiveKey="1"
              onChange={(value) => setTabStatus(value)}
            >
              <Tabs.TabPane tab={`Chờ vận chuyển ${""}`} key="1">
                {dataOrder?.length !== 0 ? (
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
                        {orderListData?.map((data, index) => (
                          <Order orderData={data} no={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NoOrder />
                )}
              </Tabs.TabPane>
              <Tabs.TabPane tab="Chờ nhận hàng" key="2">
                {DataOrder?.length !== 0 ? (
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
                        {orderListData?.map((data, index) => (
                          <Order orderData={data} no={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NoOrder />
                )}
              </Tabs.TabPane>
              <Tabs.TabPane tab="Chờ xác nhận" key="3">
                {DataOrder?.length !== 0 ? (
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
                        {orderListData?.map((data, index) => (
                          <Order orderData={data} no={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NoOrder />
                )}
              </Tabs.TabPane>
              <Tabs.TabPane tab="Chờ đánh giá" key="4">
                {DataOrder?.length !== 0 ? (
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
                        {orderListData?.map((data, index) => (
                          <Order orderData={data} no={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NoOrder />
                )}
              </Tabs.TabPane>
              <Tabs.TabPane tab="Hoàn thành" key="5">
                {DataOrder?.length !== 0 ? (
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
                        {orderListData?.map((data, index) => (
                          <Order orderData={data} no={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NoOrder />
                )}
              </Tabs.TabPane>
              <Tabs.TabPane tab="Hủy" key="6">
                {DataOrder?.length !== 0 ? (
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
                        {orderListData?.map((data, index) => (
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
