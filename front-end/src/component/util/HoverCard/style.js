import styled from "styled-components";

const HoverCard = styled.div`
  display: inline-flex;
  background-color: #fff;
  min-width: 135px;
  max-width: 180px;
  a {
    text-decoration: none;
    color: black;
    display: inline-flex;
    flex-direction: column;
    padding: 10px 6px 10px 15px;
    width: 100%;
    &:hover {
      h3 {
        text-decoration: underline;
      }
    }
    .card-content {
      display: inline-flex;
      justify-content: space-between;
      .card-content-left {
        display: inline-flex;
        flex-direction: column;
        margin-top: 0.25rem;
        max-width: 135px;
        h3 {
          margin: 0;
          font-size: 0.875rem;
          line-height: 1.571;
          display: block;
          font-weight: 700;
          text-transform: uppercase;
          color: #111;
        }
        span {
          color: #484848;
          font-size: 0.875rem;
          line-height: 1.571;
          font-weight: 400;
          letter-spacing: 0;
        }
      }
    }
    .card-footer {
      display: inline-flex;
      flex-wrap: wrap;
      padding: 0 0 0.375rem 0;
      align-items: center;
      margin-top: 5px;
      span {
        font-size: 0.6875rem;
        display: inline-block;
        font-weight: bold;
        color: #000;
        vertical-align: text-top;
        text-align: start;
        margin-right: 2px;
        &:nth-child(2) {
          line-height: 1.1875;
          font-size: 1.375rem;
          margin-top: 2px;
        }
      }
    }
  }
`;

export default HoverCard;
