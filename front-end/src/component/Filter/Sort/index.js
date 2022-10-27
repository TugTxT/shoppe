import React, { useState } from "react";
import styled from "styled-components";

const SortStyle = styled.div`
  div {
    label {
      display: flex;
      justify-content: space-between;
      padding: 1rem 0;
      cursor: pointer;
      span {
        font-size: 0.875rem;
      }
      .radio {
        position: relative;
        display: flex;
        align-items: flex-start;
        input[type="radio"] {
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
          box-sizing: border-box;
          font-size: 1rem;
          &:checked ~ .radio-symbol::after {
            content: "";
            width: 1rem;
            height: 1rem;
            display: block;
            background: #111;
            border-radius: 50%;
          }
          &:checked ~ .radio-symbol {
            border-color: #111;
          }
          &:hover ~ .radio-symbol {
            border-color: #111;
          }
        }
        .radio-symbol {
          width: 1.5rem;
          height: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border: 1px solid #929292;
          border-radius: 64px;
          flex-shrink: 0;
        }
      }
    }
  }
`;

const Sort = ({ value }) => {
  const [sortValue, setSortValue] = useState("Best match");

  return (
    <SortStyle>
      <div>
        {value.map((item, index) => (
          <label key={index} className="radio-button">
            <span>{item}</span>
            <div className="radio">
              <input
                onChange={(e) => setSortValue(e.target.value)}
                value={item}
                checked={sortValue === item}
                type="radio"
              />
              <span className="radio-symbol"></span>
            </div>
          </label>
        ))}
      </div>
    </SortStyle>
  );
};

export default Sort;
