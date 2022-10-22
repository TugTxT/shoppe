import styled from "styled-components";

const Footer = styled.footer`
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-top: 5rem;
  .top_content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
      font-size: 1.5625rem;
      line-height: 120%;
      font-weight: 700;
      margin: 0;
      letter-spacing: -0.03375rem;
      text-align: center;
      padding: 0 2em;
    }
    img {
      width: 9.5625rem;
      margin: 2.5rem auto 5rem;
      height: auto;
    }
  }
  .room_container {
    display: flex;
    justify-content: center;
    position: relative;
    overflow-x: hidden;
    .room_images {
      display: flex;
      justify-content: center;
      position: relative;
      width: 114.258125em;
      .room_image {
        height: 18.75em;
        width: auto;
      }
      .room_image_lights {
        height: 18.75em;
        width: auto;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        filter: hue-rotate(0deg);
        transition: opacity 0.5s, filter 4s 1s;
        z-index: 1;
        pointer-events: none;
        filter: hue-rotate(360deg);
        opacity: 1;
      }
    }
    .light_switch {
      position: absolute;
      width: 114.258125em;
      button {
        position: absolute;
        font-size: inherit;
        width: 1.5em;
        height: 1.5em;
        cursor: pointer;
        border: 0 none;
        padding: 0;
        background: transparent;
        &:nth-child(1) {
          top: 10em;
          left: 28.5em;
        }
        &:nth-child(2) {
          top: 13em;
          left: 80em;
        }
        img {
          &:nth-child(2) {
            position: absolute;
            top: 0;
            left: 0;
            transform: scale(2.75);
            opacity: 0;
            &:hover {
              transform: scale(2.75);
              opacity: 1;
            }
          }
        }
      }
    }
  }
  .bottom_content {
    background-color: #0058a3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5rem 2rem 2rem;
    box-sizing: border-box;
    align-items: center;
    color: #ffffff;
    a {
      text-decoration: none;
      color: #ffffff;
      &:hover {
        text-decoration: underline;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      max-width: 98vw;
      margin-bottom: 5rem;
      a {
        font-size: 1.5625rem;
        line-height: 162.5%;
        margin: 1rem 0;
        letter-spacing: 0;
        padding: 0 1.5rem 0 1.5rem;
        margin: 0;
        position: relative;
        &::after {
          content: "";
          pointer-events: none;
          position: absolute;
          width: 0.125rem;
          height: 60%;
          top: 25%;
          background: #ffffff;
          opacity: 0.3;
          right: -0.0625rem;
        }
      }
    }
    .end_copy {
      width: 100%;
      max-width: 114.258125em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .cookie_privacy {
        width: 20rem;
        display: flex;
        justify-content: space-around;
        text-align: center;
        font-size: 1rem;
        a {
          position: relative;
          &:nth-child(1) {
            &::after {
              content: "";
              pointer-events: none;
              position: absolute;
              width: 0.125rem;
              height: 100%;
              top: 10%;
              background: #ffffff;
              opacity: 0.3;
              right: -1rem;
            }
          }
        }
      }
      .copyright {
        p {
          opacity: 0.7;
          margin-right: 4rem;
        }
      }
    }
  }
`;
export default Footer;
