import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotificationDiv = styled.div`
  background-color: #f4f4f4;
  position: relative;
  margin-top: 20px;
  width: 100%;

  &.unread {
    background-color: #c4c4c4;
    border: 1px solid black;

    &::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: red;
      top: 50%;
      right: 5%;
      transform: translateY(-50%);
      z-index: 20000;
      border-radius: 50%;
    }
  }
`;

export const NotificationLink = styled(Link)`
  text-decoration: none;
  color: black;
  position: relative;
  display: block;
  padding: 10px;
  padding-right: 40px;
`;
