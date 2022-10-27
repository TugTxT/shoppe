import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  z-index: 11;
  top: 0;
  align-items: center;
  height: 5rem;
  box-sizing: border-box;
  /* position: fixed; */
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
`;

const NavbarSticky = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 90rem;
  margin: auto;
  box-sizing: border-box;
  padding: 0;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* transition: transform 400ms, opacity 400ms;
    transform: translate3d(0, 0, 0);
    transition-timing-function: cubic-bezier(1, 0.26, 0.51, 0.72); */

  img {
    height: 32px;
  }
  .anticon-menu {
    cursor: pointer;
  }
`;

export { Navbar, NavbarSticky };
