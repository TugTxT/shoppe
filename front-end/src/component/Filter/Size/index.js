import React, { useState } from "react";
import styled from "styled-components";

import { UpOutlined } from "@ant-design/icons";

const Style = styled.div`
  .size-options {
    padding: 0;
    margin: 0;
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
    list-style: none;
    width: 100%;
    li {
      list-style: none;
      margin: 0;
      padding: 0;
      .size-heading {
        button {
          display: flex;
          overflow: hidden;
          cursor: pointer;
          flex-direction: row;
          padding: 1.5rem 0;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          min-height: 5.5rem;
          color: #111;
          background: none;
          text-decoration: none;
          border: none;
          outline: none;
          font-weight: 700;
          &:hover {
            span {
              text-decoration: underline;
            }
          }
          span {
            &:nth-child(1) {
              text-align: left;
              flex-grow: 1;
              line-height: 0;
              margin-right: 60px;
            }
          }
        }
      }
      .size-body {
        padding: 0;
        height: auto;
        visibility: visible;
        label {
          display: flex;
          padding: 1rem 0;
          align-items: center;
          cursor: pointer;
          margin-right: 3px;
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
                margin-right: 1.25rem;
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
    }
  }
`;

const Size = ({ value, setFilterValue, filterValue }) => {
  const [sizeValue, setSizeValue] = useState({});

  const [sizeShow, setSizeShow] = useState({
    "Chiều rộng": "",
    "Chiều cao": "",
    "Chiều sâu": "",
    "Chiều dài": "",
  });

  const [sizeCheckbox, setSizeCheckbox] = useState({
    "Chiều rộng": [],
    "Chiều cao": [],
    "Chiều sâu": [],
    "Chiều dài": [],
  });

  const sizeArray = (max) => {
    let array = [];
    for (let i = 0; i <= max; i += max / 4) {
      let item = { minimum: i, maximum: i + (max / 4 - 1) };
      array.push(item);
    }
    return array;
  };

  const updateSizeValue = (props, array, size, checked) => {
    let filterArray = filterValue.size;
    let newItem = { name: props, minimum: size.minimum, maximum: size.maximum };
    if (checked) {
      filterArray.push(newItem);
    } else {
      const element = filterArray.find(
        (item) => item.name === props && item.maximum === size.maximum
      );
      filterArray = filterArray.filter((item) => item !== element);
    }
    setFilterValue({
      ...filterValue,
      size: filterArray,
    });
    function sortByMinimum(a, b) {
      return a.minimum - b.minimum;
    }
    function sortByMaximum(a, b) {
      return b.maximum - a.maximum;
    }
    if (array.length === 0) {
      const { [props]: removedProperty, ...newItem } = sizeValue;
      setSizeValue(newItem);
    } else {
      setSizeValue({
        ...sizeValue,
        [props]: {
          minimum: array.sort(sortByMinimum)[0].minimum,
          maximum: array.sort(sortByMaximum)[0].maximum,
        },
      });
    }
  };

  return (
    <Style>
      <ul className="size-options">
        {value.map((item) => (
          <li key={item.id}>
            <div className="size-heading">
              <button
                onClick={() =>
                  sizeShow[item.name]
                    ? setSizeShow({ ...sizeShow, [item.name]: "" })
                    : setSizeShow({ ...sizeShow, [item.name]: item.name })
                }
              >
                <span>{item.name}</span>
                <UpOutlined
                  style={
                    sizeShow[item.name] ? { transform: "rotate(180deg)" } : {}
                  }
                />
              </button>
            </div>
            <div
              style={
                sizeShow[item.name]
                  ? { height: "auto", display: "block" }
                  : { height: "0%", display: "none" }
              }
              className="size-body"
            >
              {sizeArray(item.maximum).map((size, index) => (
                <label key={index}>
                  <span className="label-text">
                    <span>
                      {size.minimum === item.maximum
                        ? `${size.minimum}+"`
                        : `${size.minimum} - ${size.maximum}"`}
                    </span>
                    <span>1000</span>
                  </span>
                  <div className="checked-button">
                    <input
                      checked={filterValue["size"].find(
                        (el) =>
                          el.name === item.name &&
                          el.maximum === size["maximum"]
                      )}
                      onChange={(e) => {
                        let newArray = sizeCheckbox[item.name];
                        let checked = e.target.checked;
                        if (checked) {
                          setSizeCheckbox({
                            ...sizeCheckbox,
                            [item.name]: [...sizeCheckbox[item.name], size],
                          });
                          newArray.push(size);
                        } else {
                          setSizeCheckbox({
                            ...sizeCheckbox,
                            [item.name]: sizeCheckbox[item.name].filter(
                              (s) => s.maximum !== size.maximum
                            ),
                          });
                          newArray = newArray.filter(
                            (s) => s.maximum !== size.maximum
                          );
                        }
                        updateSizeValue(item.name, newArray, size, checked);
                      }}
                      type="checkbox"
                    />
                    <span className="checkbox-symbol"></span>
                  </div>
                </label>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Style>
  );
};

export default Size;
