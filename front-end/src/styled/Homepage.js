import styled from "styled-components";

const HomePage = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  width: 95vw;
  img {
    border-radius: 0.5rem;
    object-fit: cover;
  }
  a {
    text-decoration: none;
  }
  section {
    height: calc(100vw * 0.66 - 2.5rem);
    min-height: 28.3125rem;
    max-height: calc(100vh - 6.25rem);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(12, 1fr);
    grid-gap: 1.25rem;
    /* width: calc(100vw - 48px); */
    .banner {
      /* width: 66%; */
      position: relative;
      height: 100%;
      grid-column: 1/3;
      grid-row: 1/13;
      img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
      .banner_content {
        position: absolute;
        padding: 1.5rem;
        box-sizing: border-box;
        z-index: 1;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        bottom: 0;
        p {
          font-size: 1rem;
          margin-bottom: -10px;
          text-shadow: 0 0 0.625rem rgb(0 0 0 / 50%);
        }
        h1 {
          font-size: 2.25rem;
          line-height: 120%;
          font-weight: 700;
          margin: 1rem 0;
          letter-spacing: -0.06rem;
        }
      }
    }
    .banner_2 {
      grid-column: 3/3;
      grid-row: 1/8;
      min-height: 9rem;
      border-radius: 0.5rem;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      background: #ffdb00;
      width: 100%;
      min-height: 100%;
      flex-direction: column;
      overflow: hidden;
      a {
        min-height: 6.25rem;
        box-sizing: border-box;
        flex: 1;
        display: flex;
        align-items: center;
        width: 100%;
        color: #111111;
        text-decoration: none;
        z-index: 3;
        padding: 0 3.125rem;
        font-size: 2.25rem;
        line-height: 120%;
        font-weight: 700;
        margin: 1rem 0;
        letter-spacing: -0.06rem;
        margin: 0;
        &:hover .anticon-arrow-right {
          transform: translateX(10px);
        }
        .anticon-arrow-right {
          margin-left: 20px;
          margin-right: 10px;
          transition: 0.5s ease-in-out;
        }
      }
      .banner_item {
        height: 33%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .action_search {
        border-top: 1px solid rgba(17, 17, 17, 0.3);
        padding-left: 20px;
        padding-right: 20px;
        transition: 0.5s ease-in-out;
        .search_store {
          width: 85%;
          background: #fff094;
          border-radius: 0.5rem;
          padding: 0.625rem;
          margin: 1.25rem 0;
          position: relative;
          display: flex;
          align-items: center;
          input {
            font-size: 16px;
            padding: 16px 0 16px 54px;
            height: 48px;
            width: 100%;
            border: none;
            border-radius: 8px;
            outline: none;
            box-sizing: border-box;
            margin: 0;
            background: #ffffff;
          }
          span {
            position: absolute;
            font-size: 20px;
            left: 1.2rem;
            top: 0.75rem;
          }
        }
        label {
          clip: rect(0 0 0 0);
          clip-path: inset(100%);
          height: 0.0625rem;
          overflow: hidden;
          position: absolute;
          white-space: nowrap;
          width: 0.0625rem;
        }
      }
      .action_button {
        z-index: 10;
        cursor: pointer;
        transition: 0.1s ease-in-out;
        border-top: 1px solid rgba(17, 17, 17, 0.3);
        &:hover {
          background: #fff094;
        }
      }
    }
    .banner_3 {
      grid-column: 3/3;
      grid-row: 8/13;
      background-image: url("https://www.ikea.com/global/en/images/clock_1153a706e3.png?f=m");
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
    .open {
      .action_button {
        background: #fff094;
      }
      .anticon-up {
        animation: upToDown 0.5s forwards;
      }
      @keyframes upToDown {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(-180deg);
        }
      }
      .action_search {
        animation: show 0.5s forwards;
      }
      @keyframes show {
        0% {
          display: none;
          opacity: 0;
          height: 0%;
        }
        100% {
          height: 33%;
          display: block;
          opacity: 1;
        }
      }
    }
    .close {
      .anticon-up {
        animation: downToUp 0.5s forwards;
      }
      @keyframes downToUp {
        0% {
          transform: rotate(-180deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
      .action_search {
        animation: hide 0.5s forwards;
      }
      @keyframes hide {
        0% {
          height: 33%;
        }
        100% {
          height: 0%;
          display: none;
          opacity: 0;
        }
      }
    }
  }

  .post_list_display {
    margin-top: 1.5rem;
    display: grid;
    grid-template-areas: "a b" "d c";
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 2.75rem;
    grid-column-gap: 1.25rem;
    color: #111111;
    .post_card:nth-child(3) {
      grid-area: c;
    }
    .post_card {
      width: 100%;
      height: calc(60vw + 2.25rem);
      position: relative;
      img {
        width: 100%;
        height: calc(50vw - 2.25rem);
        object-fit: contain;
      }
      a {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        img {
          width: 100%;
          height: calc(50vw - 2.25rem);
          object-position: 0% 93%;
          object-fit: cover;
        }
        .post_body {
          padding: 1.5rem;
          box-sizing: border-box;
          color: #111111;
          display: flex;
          margin-bottom: 0;
          flex-direction: column;
          justify-content: center;
          p {
            margin: 0;
            font-size: 1rem;
            margin-bottom: 0;
          }
          h2 {
            font-size: 2.25rem;
            font-weight: 700;
            margin: 0;
          }
        }
      }
    }
  }
  .story_list_display {
    display: grid;
    grid-template-areas: "a b";
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1.25rem;
    .story {
      width: 100%;
      height: calc(50vw - 2.25rem);
      position: relative;
      a {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        img {
          width: 100%;
          height: 100%;
          object-position: 0% 93%;
          object-fit: cover;
        }
        video {
          width: 100%;
          height: calc(50vw - 2.25rem);
          object-position: 50% 50%;
          object-fit: cover;
        }
        .story_content {
          padding: 1.5rem;
          box-sizing: border-box;
          color: #ffffff;
          display: flex;
          margin-bottom: 0;
          flex-direction: column;
          justify-content: center;
          position: absolute;
          bottom: 0;
          z-index: 1;
          p {
            margin: 0;
            font-size: 1rem;
            margin-bottom: 0;
            text-shadow: 0 0 0.625rem rgb(0 0 0 / 50%);
          }
          h2 {
            font-size: 2.25rem;
            font-weight: 700;
            margin: 0;
            max-width: 20ch;
          }
        }
        .image_overlay {
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.55) 80px,
            rgba(0, 0, 0, 0) 200px
          );
          z-index: 0;
          position: absolute;
          bottom: 0;
          left: 0;
          height: 100%;
          width: 100%;
          pointer-events: none;
          border-radius: 0.5rem;
        }
      }
      .button_play {
        z-index: 10;
        position: absolute;
        border-radius: 50%;
        padding: 0;
        margin: 0;
        border: 0;
        background: #111111;
        justify-content: center;
        align-items: center;
        display: flex;
        cursor: pointer;
        left: 1.5rem;
        top: 1.5rem;
        width: 5rem;
        height: 5rem;
        color: white;
        img {
          border-radius: 0px;
        }
      }
    }
  }
`;
export default HomePage;
