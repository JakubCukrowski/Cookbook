import styled from "styled-components";

export const AuthorImageWrapper = styled.div`
    border-radius: 50%;
    position: relative;
    &::after {
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 50%;
        position: absolute;
        background-color: rgba(255, 255, 255, 0.3);
    }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;
