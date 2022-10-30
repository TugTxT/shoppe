import React from "react";
import styled from "styled-components";

const PriceStyled = styled.div`
  div {
    label {
      display: flex;
      padding: 1rem 0;
      align-items: center;
      cursor: pointer;
      margin-right: -10px;
      .label-text {
        display: flex;
        justify-content: space-between;
        flex-grow: 10;
        align-items: center;
        span {
          &:nth-child(1) {
            display: flex;
            font-size: 0.875rem;
            flex-basis: 100%;
            padding-left: 0;
            /* margin-right: 1.25rem; */
          }
          &:nth-child(2) {
            margin-right: 1.25rem;
            font-size: 0.75rem;
          }
        }
      }
      .checked-button {
        position: relative;
        display: flex;
        align-items: flex-start;
        width: 1.5rem;
        input[type="checkbox"] {
          position: absolute;
          left: -0.625rem;
          top: -0.625rem;
          width: 2.75rem;
          height: 2.75rem;
          display: inline-block;
          border: 0;
          opacity: 0;
          padding: 0;
          z-index: 1;
          cursor: pointer;
          &:checked ~ .checkbox-symbol::after {
            content: "";
            position: absolute;
            left: 0.25rem;
            top: 0.625rem;
            border: 2px solid currentColor;
            border-left: 0;
            border-top: 0;
            border-right: 0;
            opacity: 0;
            color: #fff;
            width: 0.875rem;
          }
          &:checked ~ .checkbox-symbol::before {
            transform: rotate(45deg);
            content: "";
            box-sizing: content-box;
            display: block;
            border: 2px solid currentColor;
            border-left: 0;
            border-top: 0;
            height: 0.5625rem;
            width: 0.25rem;
            opacity: 1;
            margin-top: -0.25rem;
            color: #fff;
          }
          &:checked ~ .checkbox-symbol {
            background: #111;
          }
          &:hover ~ .checkbox-symbol {
            border-color: #111;
          }
        }
        .checkbox-symbol {
          position: relative;
          border-radius: 4px;
          border: 1px solid #929292;
          width: 1.5rem;
          height: 1.5rem;
          background: #fff;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;

const Price = ({ value, type, setFilterValue, filterValue }) => {
  const priceArray = (max) => {
    let array = [];
    for (let i = 0; i <= max; i += max / 4) {
      let item = { min: i, max: i + (max / 4 - 1) };
      array.push(item);
    }
    return array;
  };

  const handleChangeValue = (e, value, key) => {
    let checked = e.target.checked;
    if (checked) {
      if (key === "Giá") {
        setFilterValue({
          ...filterValue,
          price: [...filterValue["price"], value],
        });
      } else {
        setFilterValue({
          ...filterValue,
          material: [...filterValue["material"], value],
        });
      }
    } else {
      if (key === "Giá") {
        let array = filterValue["price"];
        let element = array.find((ele) => ele.min === value.min);
        setFilterValue({
          ...filterValue,
          price: array.filter((item) => item !== element),
        });
      } else {
        setFilterValue({
          ...filterValue,
          material: filterValue["material"].filter((item) => item !== value),
        });
      }
    }
  };

  return (
    <PriceStyled>
      <div>
        {type === "Giá"
          ? priceArray(value.maximum).map((price, index) => (
              <label key={index}>
                <span className="label-text">
                  <span>
                    {price.min === value.maximum
                      ? `$${price.min}+`
                      : `$${price.min} - ${price.max}`}
                  </span>
                  <span>1000</span>
                </span>
                <div className="checked-button">
                  <input
                    checked={filterValue["price"].find(
                      (el) => el.min === price["min"]
                    )}
                    onChange={(e) => handleChangeValue(e, price, "Giá")}
                    type="checkbox"
                  />
                  <span className="checkbox-symbol"></span>
                </div>
              </label>
            ))
          : value.map((item, index) => (
              <label key={index}>
                <span className="label-text">
                  <span>{item}</span>
                  <span>1000</span>
                </span>
                <div className="checked-button">
                  <input
                    checked={filterValue["material"].includes(item)}
                    onChange={(e) => handleChangeValue(e, item, "Chất liệu")}
                    type="checkbox"
                  />
                  <span className="checkbox-symbol"></span>
                </div>
              </label>
            ))}
      </div>
    </PriceStyled>
  );
};

export default Price;
