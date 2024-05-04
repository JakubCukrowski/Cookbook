import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const StyledNavbar = styled(Navbar)`
  background-color: #e19f25;
`;

export const StyledLink = styled(Link)`
  font-family: "Gloria Hallelujah", cursive;
  font-size: 1.4rem;
  text-decoration: none;
  color: white;
`;

export const StyledNavbarColapse = styled(Navbar.Collapse)`
  @media (min-width: 992px) {
    flex-basis: 0;
    flex-grow: 0;

    .nav-item {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const LoggedUserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const NavbarLink = styled(Link)`
  color: white;
`;

export const StyledNavbarToggle = styled(Navbar.Toggle)`
  border-color: white;

  span {
    color: white;
  }
`;

export const NotificationsButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 24px;
  color: white;
  transition: 0.3s;
  margin-right: 20px;
  margin-left: auto;
  position: relative;
  padding: 0;

  @media (min-width: 992px) {
    margin-right: 6px;
  }

  &:hover {
    color: black;
    transform: scale(1.1);
  }
`;

export const NotificationsTracker = styled.div`
  position: absolute;
  top: 0;
  left: 10px;
  background-color: red;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

export const NotificationsCenter = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: white;
  right: 0;
  top: 0;
  transition: all 0.5s ease-in-out;
  padding: 10px 0;

  & * {
    animation-duration: 1.2s;
    animation-name: show;
  }

  @keyframes show {
    from {
      display: none;
    }

    0% {
      opacity: 0;
    }

    90% {
      opacity: 1;
    }
  }

  &.hidden {
    height: 0;
    padding: 0;

    & * {
      display: none;
    }

    @media (min-width: 992px) {
      width: 0;
      height: 100vh;
      opacity: 0;
    }
  }

  @media (min-width: 992px) {
    position: fixed;
    width: 35%;
    right: 0;
    bottom: 0;
    padding: 20px;
    border-left: 1px solid gray;
    z-index: 50000;
  }
`;

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
