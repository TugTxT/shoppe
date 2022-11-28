import styled from "styled-components";

const NavManageAcountStyle = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 100px;
  .left {
    margin-top: 5%;
  }
  .avt {
    width: 400px;
    display: flex;
    position: relative;
  }
  .avt::after {
    content: "";
    position: absolute;
    width: 75%;
    border: 0.5px solid #b7a4a4;
    bottom: -27%;
  }
  .avt-img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }
  .avt-info {
    margin-left: 5px;
  }
  /* .avt-phone {
    z-index: 10;
    position: absolute;
    left: 0px;
  } */
  /* input[type="file" i] {
    border-radius: 64px;
    transition-duration: 0.25s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.4, 1);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-height: 3.5rem;
    padding: 0 2rem;
    width: 90%;
    color: rgb(255, 255, 255);
    font-size: 1.25rem;
    cursor: pointer;
  } */
  .avt-name {
    font-weight: 700;
    font-size: 1rem;
    z-index: 10;
    position: absolute;
    left: 90px;
  }
  .acount-info {
    margin-top: 10%;
  }
  .arrow-icon {
    position: absolute;
    right: 23%;
  }
  .address,
  .acount-info {
    display: flex;
    align-items: center;
    position: relative;
    padding: 0.3rem 0rem;
  }
  .anticon {
    padding-right: 2%;
  }
  .address::after {
    content: "";
    position: absolute;
    width: 75%;
    border: 0.5px solid #b7a4a4;
    bottom: -75%;
  }
  .purchase-history,
  .warranty,
  .logout {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10%;
    padding: 0.3rem 0rem;
  }
  .favorite {
    display: flex;
    align-items: center;
    position: relative;
    padding: 0.3rem 0rem;
  }
  .purchase-history::after {
    content: "";
    position: absolute;
    width: 75%;
    border: 0.5px solid #b7a4a4;
    bottom: -75%;
  }
  .favorite::after {
    content: "";
    position: absolute;
    width: 75%;
    border: 0.5px solid #b7a4a4;
    bottom: -75%;
  }
  a {
    color: black;
  }
`;
export default NavManageAcountStyle;
