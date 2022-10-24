import styled from "styled-components";

const NavbarIKEA = styled.div`
  .menu-hambuger-container {
    display: block;
    position: sticky;
    width: 100%;
    z-index: 100;
    pointer-events: none;
    .menu-hambuger-inner {
      position: absolute;
      left: 10px;
      right: 3rem;
      display: flex;
      align-items: flex-start;
      .menu-hambuger {
        position: fixed;
        pointer-events: all;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 90px;
        width: 90px;
        span {
          cursor: pointer;
          &:nth-child(1) {
            padding: 6px;
            border-radius: 50%;
          }
          &:nth-child(1):hover {
            background-color: rgba(245, 245, 245, 1);
          }
        }
        /* span {
          font-size: 0.75rem;
        } */
        /* @media (min-width: 75em) {
          display: grid;
          grid-column-gap: 1.25rem;
          grid-template-columns: repeat(13, minmax(0, 1fr));
        } */
      }
    }
  }
  header {
    z-index: 100;
    background-color: #fff;
    .header-container {
      max-width: 112rem;
      margin: 0 auto;
      padding: 0 1.25rem;
      box-sizing: border-box;
      .header-container-inner {
        .header-container-main {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: calc(100vw - 150px);
          height: 90px;
          padding-left: 90px;
          padding-right: 40px;
          /* border-bottom: solid 1px #dfdfdf;
          padding-bottom: 1rem; */
          .header-logo {
            flex-shrink: 0;
            /* order: 2; */
            display: block;
            padding-top: 0.9375rem;
            padding-bottom: 0.9375rem;
          }
          .header-search {
            width: 53%;
            padding-left: 40px;
            .search-field {
              position: relative;
              flex: 1 1 auto;
              width: 100%;
              display: flex;
              align-items: center;
              span {
                cursor: pointer;
                color: black;
                position: absolute;
                display: flex;
                align-items: center;
              }
              input {
                padding: 0.8rem 0;
                padding-inline-start: 3.25rem;
                padding-inline-end: 3.375rem;
                display: block;
                width: 100%;
                margin: 0 auto;
                font-size: 1rem;
                line-height: 1.5;
                background-color: #f5f5f5;
                border: 2px solid transparent;
                border-radius: 50em;
                outline: 0;
                appearance: none;
                &:hover {
                  background-color: #dfdfdf;
                }
                &:focus-within {
                  border: 2px solid #0058a3;
                  background-color: #fff;
                }
              }
            }
          }
          .header-icons {
            display: flex;
            flex-direction: row;
            order: 5;
            margin-right: -0.625rem;
            list-style: none;
            justify-content: center;
            align-items: center;
            padding-left: 20px;
            li {
              list-style: none;
              margin-left: 10px;
              &:nth-child(2),
              &:nth-child(3),
              &:nth-child(4) {
                margin-left: 10px;
                cursor: pointer;
                span {
                  display: flex;
                  align-items: center;
                  padding: 10px;
                  border-radius: 50%;
                  &:hover {
                    background-color: rgba(245, 245, 245, 1);
                  }
                }
              }
              &:nth-child(4) {
                span {
                  position: relative;
                  span {
                    position: absolute;
                    top: 2px;
                    right: 3px;
                    padding: 4px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    color: white;
                    background-color: #0058a3;
                    font-size: 0.65rem;
                    &:hover {
                      background-color: #0058a3;
                    }
                  }
                }
              }
              a {
                text-decoration: none;
                color: black;
                font-weight: 600;
                line-height: 1.3333333333;
                padding: 10px 17px;
                border-radius: 50em;
                display: flex;
                justify-content: center;
                align-items: center;
                .anticon-user {
                  margin-right: 5px;
                }
                &:hover {
                  background-color: rgba(245, 245, 245, 1);
                }
              }
            }
          }
        }
      }
    }
  }
  .navbar {
    width: 100%;
    box-sizing: border-box;
    padding-left: 110px;
    padding-right: 40px;
    nav {
      /* width: calc(100vw - 130px); */
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: solid 1px #dfdfdf;
      .nav-list {
        margin: 0;
        list-style: none;
        display: flex;
        align-items: center;
        padding-left: 0px;
        li {
          list-style: none;
          a {
            display: block;
            padding: 0.625rem 0.9375rem;
            font-size: 0.875rem;
            font-weight: 700;
            color: #111;
            text-decoration: none;
            /* background-color: rgb(245 245 245); */
            &:hover {
              text-decoration: underline;
            }
          }
          &:nth-child(1) {
            a {
              padding-left: 0px;
            }
          }
        }
      }
      .navigation-container {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.875rem;
        font-weight: 700;
        .nav-item {
          display: flex;
          align-items: center;
          margin-left: 20px;
          cursor: pointer;
          img {
            margin-right: 5px;
          }
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

export default NavbarIKEA;
