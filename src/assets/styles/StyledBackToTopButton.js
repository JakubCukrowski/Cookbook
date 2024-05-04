import styled from "styled-components";

export const StyledBackToTopButton = styled.button`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: #e19f25;
  border: 1px solid gray;
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 200;
  color: white;
  animation-name: jump;
  animation-duration: 2s;
  animation-direction: alternate;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes jump {
    0% {
      bottom: 80px;
    }

    50% {
      bottom: 40px;
    }

    75% {
      bottom: 80px;
    }

    100% {
      bottom: 40px;
    }
  }
`;
