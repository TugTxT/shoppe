import styled from "styled-components";

const Products = styled.div`
  margin-left: 110px;
  margin-right: 40px;
  .products-page-title {
    margin: 1.875rem 0;
    h1 {
      font-size: 2.25rem;
      line-height: 1.33333;
      overflow-wrap: break-word;
    }
  }
  .products-page-body {
    .filter-products {
      display: flex;
      flex-direction: column;
      .filter-information {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        text-align: center;
        div {
          display: flex;
          align-items: center;
          span {
            color: #929292;
            font-size: 0.75rem;
            white-space: nowrap;
            margin-inline-end: 0.75rem;
          }
          .text-toggle {
            display: flex;
            align-items: center;
            .active {
              border-color: #111;
              z-index: 2;
              position: relative;
            }
            div {
              background: transparent;
              cursor: pointer;
              text-align: center;
              color: #111;
              font-weight: 700;
              line-height: 1.5;
              font-size: 0.75rem;
              padding: 0 0.75rem;
              border: 1px solid #dfdfdf;
              min-height: 1.875rem;
              &:nth-child(1) {
                border-radius: 4px 0px 0px 4px;
              }
              &:nth-child(2) {
                border-radius: 0px 4px 4px 0px;
                margin-inline-start: -1px;
              }
            }
          }
        }
      }
      .filter-bar {
        padding-top: 1.75rem;
        padding-bottom: 1.75rem;
        position: sticky;
        top: 0;
        display: block;
        float: left;
        z-index: 99;
        background: #fff;
        .active {
          border-color: #111;
          background: #dfdfdf;
          .anticon {
            transform: rotate(180deg);
          }
        }
        .filter-bar-button {
          padding-inline-end: 1rem;
          flex-direction: row;
          line-height: 1.3333333333;
          min-height: 2.5rem;
          padding: 0 1.5rem;
          text-align: center;
          display: inline-flex;
          border-radius: 64px;
          cursor: pointer;
          outline: 0;
          vertical-align: top;
          color: #111;
          background: #f5f5f5;
          border: 1px solid transparent;
          justify-content: center;
          align-items: center;
          margin-right: 1rem;
          &:hover {
            background: #dfdfdf;
          }
          span {
            font-size: 0.75rem;
            font-weight: 700;
            &:nth-child(1) {
              margin-right: 10px;
            }
            &:nth-child(2) {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
`;

export default Products;
