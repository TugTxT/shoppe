import React, { useState } from "react";
import ProductsStyle from "../../styled/Products";
import Filters from "../../data/Filter";
import { Wrapper as PopperWrapper } from "../../component/util/Popper/index";

import Tippy from "@tippyjs/react/headless";
import { DownOutlined } from "@ant-design/icons";
import Sort from "../../component/Filter/Sort";
import Size from "../../component/Filter/Size";

const ProductsPage = () => {
  const [active, setActive] = useState("product");

  const [filter, setFilter] = useState("");

  const [filterValue, setFilterValue] = useState({
    sort: "",
    size: [],
    color: "",
    instock: false,
    price: 0,
    categories: "",
    material: "",
  });

  return (
    <ProductsStyle>
      <div className="products-page-title">
        <h1>Tất cả sản phẩm</h1>
      </div>
      <div className="products-page-body">
        <div className="filter-products">
          <div className="filter-information">
            <div>
              <span>100 sản phẩm</span>
              <div className="text-toggle">
                <div
                  className={`${active === "product" ? "active" : ""}`}
                  onClick={() => setActive("product")}
                >
                  Sản phẩm
                </div>
                <div
                  className={`${active === "room" ? "active" : ""}`}
                  onClick={() => setActive("room")}
                >
                  Phòng
                </div>
              </div>
            </div>
          </div>
          <div className="filter-bar">
            {Filters.map((item) => (
              <Tippy
                key={item.id}
                interactive={true}
                offset={[40, 10]}
                visible={filter === item.name}
                placement="bottom"
                render={(attrs) => {
                  switch (item.name) {
                    case "Sắp xếp":
                      return (
                        <div {...attrs}>
                          <PopperWrapper>
                            <Sort value={item.value} />
                          </PopperWrapper>
                        </div>
                      );
                    case "Kích thước":
                      return (
                        <div {...attrs}>
                          <PopperWrapper>
                            <Size value={item.value} />
                          </PopperWrapper>
                        </div>
                      );

                    default:
                      return <div {...attrs}></div>;
                  }
                }}
              >
                <button
                  className={`filter-bar-button ${
                    filter === item.name ? "active" : ""
                  }`}
                  onClick={() =>
                    !filter || filter !== item.name
                      ? setFilter(item.name)
                      : setFilter("")
                  }
                  key={item.id}
                >
                  <span>{item.name}</span>
                  <DownOutlined />
                </button>
              </Tippy>
            ))}
          </div>
        </div>
      </div>
    </ProductsStyle>
  );
};

export default ProductsPage;
