import React from "react";

import styled from "styled-components";

const LoadingStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    border-radius: 50%;
    animation: progress 0.5s infinite;
    transition: 0.5s ease-in-out;
    @keyframes progress {
      0% {
        transform: translateY(7px);
      }
      50% {
        transform: translateY(0px);
      }
      100% {
        transform: translateY(7px);
      }
    }
  }
`;

const Loading = ({ width, height, background }) => {
  return (
    <LoadingStyled>
      <div
        style={{
          width: `${width}`,
          height: `${height}`,
          background: `${background}`,
        }}
      ></div>
    </LoadingStyled>
  );
};

export default Loading;
