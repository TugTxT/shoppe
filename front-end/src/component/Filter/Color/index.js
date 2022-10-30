import React from "react";
import styled from "styled-components";

const ColorStyle = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  margin-right: -80px;
  margin-left: -0.625rem;
  /* margin-right: 0.625rem; */
  padding: 0 5px;
  .filter-color-item {
    margin-left: 0.625rem;
    margin-right: 0.625rem;
    width: calc((100% / 3) - 1.25rem);
    margin-bottom: 1.25rem;
    display: flex;
    flex-direction: column;
    position: relative;
    text-align: center;
    font-size: 0.75rem;
    label {
      margin-top: 10px;
      order: 1;
      display: flex;
      flex-direction: column;
      span {
        &:nth-child(1) {
          margin-bottom: 0.75rem;
        }
      }
    }
    input[type="checkbox"] {
      position: absolute;
      top: 0;
      left: 0;
      padding: 0;
      margin: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
      order: 2;
      &:hover ~ .filter-color-visual::after {
        box-sizing: content-box;
        content: "";
        position: absolute;
        top: -3px;
        left: -3px;
        right: -3px;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        border: 1px solid #959595;
        display: inline-block;
        margin: auto;
      }
      &:checked ~ .filter-color-visual::before {
        width: 4rem;
        position: absolute;
        height: 4rem;
        border: 2px solid #111;
        margin: auto;
        content: "";
        border-radius: 50%;
        display: inline-block;
        background-position: center;
        background-repeat: no-repeat;
        top: -4px;
        left: -4px;
        right: -4px;
      }
    }
    .filter-color-visual {
      box-sizing: border-box;
      border: 1px solid #959595;
      width: 3.75rem;
      height: 3.75rem;
      border-radius: 50%;
      pointer-events: none;
      background-size: cover;
      order: 0;
      align-self: center;
    }
  }
`;

const Color = ({ value, setFilterValue, filterValue }) => {
  const handleChangeColor = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFilterValue({
        ...filterValue,
        color: [...filterValue["color"], value],
      });
    } else {
      setFilterValue({
        ...filterValue,
        color: filterValue["color"].filter((item) => item !== value),
      });
    }
  };

  return (
    <ColorStyle>
      {value.map((item, index) => (
        <div key={index} className="filter-color-item">
          <label type="label">
            <span>{item}</span>
            <span>1000</span>
          </label>
          <input
            checked={filterValue["color"].includes(item)}
            value={item}
            onChange={(e) => handleChangeColor(e)}
            type="checkbox"
          />
          <div
            style={{ background: `${item}` }}
            className="filter-color-visual"
          ></div>
        </div>
      ))}
    </ColorStyle>
  );
};

export default Color;
