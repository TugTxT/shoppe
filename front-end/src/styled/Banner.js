import styled from "styled-components";

const Banner = styled.div`
  background-color: #007cc1;
  padding: 48px 64px 48px 48px;
  color: white;
  margin-left: 110px;
  margin-right: 40px;
  margin-top: 4rem;
  border-bottom: 15px solid #ffdb00;
  span {
    font-size: 0.875rem;
    a {
      color: #fff;
    }
  }
  h2 {
    font-size: 2.25rem;
    line-height: 0.95;
  }
  .banner-button {
    display: flex;
    a {
      text-decoration: none;
      align-items: center;
      border-radius: 64px;
      display: inline-flex;
      justify-content: center;
      min-height: 3.5rem;
      /* padding: 0 2rem; */
      font-size: 0.875rem;
      font-weight: 700;
      width: 13.5rem;
      margin-bottom: 2rem;
      &:nth-child(1) {
        background-color: #fff;
        color: black;
        /* margin-right: 2rem; */
        border: 2px solid white;
      }
      &:nth-child(2) {
        background-color: transparent;
        color: white;
        border: 1px solid #fff;
        margin-left: 2rem;
      }
    }
  }
  p {
    line-height: 1.563rem;
    margin-top: 1rem;
  }
`;

export default Banner;
