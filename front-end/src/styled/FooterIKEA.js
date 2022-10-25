import styled from "styled-components";

const FooterIKEA = styled.footer`
  background-color: #f5f5f5;
  padding: 4rem 0 0 0;
  margin-top: 4rem;
  .footer-container {
    display: flex;
    flex-direction: column;
    max-width: 112rem;
    margin-top: 1.25rem;
    padding: 0 3rem 0 7rem;
    font-size: 0.875rem;
    h3 {
      margin-top: 0;
    }
    .footer-links {
      display: flex;
      flex-direction: row;
      flex: 1 1 auto;
      width: 100%;
      .features-links {
        flex-basis: 30%;
        margin-bottom: 4rem;
        padding: 0 8% 0 0;
        p {
          color: #484848;
        }
        .see-more {
          text-decoration: underline;
          cursor: pointer;
        }
        div {
          a {
            text-decoration: none;
            display: inline-block;
            color: #fff;
            padding: 0.75rem 1.25rem 0.75rem 1.25rem;
            border-radius: 20px;
            border: 0 rgba(0, 0, 0, 0);
            font-size: 0.75rem;
            font-weight: 700;
            line-height: 1.5;
            background-color: #000;
            &:hover {
              background: rgba(51, 51, 51, 1);
            }
          }
        }
      }
      .links-group {
        flex-basis: 70%;
        margin-bottom: 4rem;
        ul {
          display: flex;
          margin: 0;
          padding: 0;
          width: 100%;
          li {
            list-style: none;
            flex: 0 0 25%;
            ul {
              display: flex;
              flex-direction: column;
              li {
                list-style: none;
                line-height: 1.571;
                margin-bottom: 0.85rem;
                cursor: pointer;
                color: #484848;
                &:hover {
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }
    }
    .footer-icons {
      .social-media-links {
        margin: 0 1.25rem 1.25rem 0;
        flex: 0 0 auto;
        max-width: 100%;
        ul {
          margin: 0;
          padding: 0;
          display: flex;
          position: relative;
          top: 50%;
          transform: perspective(1px) translateY(-50%);
          list-style-position: outside;
          li {
            list-style: none;
            padding: 0;
            display: inline-block;
            margin-right: 1.25rem;
            margin-bottom: 0.75rem;
            img {
              border: 1px solid #dfdfdf;
              padding: 0.25rem;
              height: auto;
              font-weight: bold;
              text-align: center;
              display: inline-flex;
              border-radius: 64px;
              cursor: pointer;
              &:hover {
                border-color: #929292;
              }
            }
          }
        }
      }

      .payment-options {
        margin: 0 1.25rem 1.25rem 0;
        flex: 0 0 auto;
        max-width: 100%;
        ul {
          margin: 0;
          padding: 0;
          display: flex;
          position: relative;
          top: 50%;
          transform: perspective(1px) translateY(-50%);
          li {
            list-style: none;
            padding: 0;
            display: inline-block;
            margin-right: 1.25rem;
            margin-bottom: 0.75rem;
            img {
              border-radius: 3px;
              border: 1px solid #dfdfdf;
              padding: 0.25rem;
              height: auto;
            }
          }
        }
      }
    }
  }
  .copy-right {
    font-size: 0.75rem;
    color: #484848;
    position: relative;
    width: 100%;
    span:nth-child(2) {
      position: absolute;
      right: 100px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    span:nth-child(3) {
      position: absolute;
      right: 0px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default FooterIKEA;
