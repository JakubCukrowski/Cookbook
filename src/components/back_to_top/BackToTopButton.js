import styled from "styled-components";

export const BackToTopButton = styled.button`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: #e19f25;
  border: 1px solid gray;
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 2000;
  color: white;
  animation-name: jump;
  animation-duration: 1s;
  font-size: 24px;

  @keyframes jump {
    0% {
      bottom: 40px;
      rotate: 180deg;
    }

    50% {
        bottom: 20px;
    }

    100% {
      bottom: 40px;
    }
  }
`;
