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
  margin-right: 4px;
  margin-left: auto;
  position: relative;

  &:hover {
    color: black;
    transform: scale(1.1);
  }
`;

export const NotificationsTracker = styled.div`
  position: absolute;
  top: 0;
  right: 0;
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
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: white;
  right: 0;
  bottom: 0;
  transition: all 0.5s ease-in-out;
  padding: 10px 0;

  & * {
    animation-duration: 0.4s;
    animation-name: show;
  }

  @keyframes show {
    from {
      opacity: 1;
    }

    75% {
      opacity: 0;
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
  margin-top: 20px;
  padding: 10px;
  background-color: #f4f4f4;

  &.unread {
    background-color: #e8e8e8;
    border: 1px solid gray;
    position: relative;
  }
`;

export const NotificationLink = styled(Link)`
  text-decoration: none;
  color: black;
  position: relative;

  &.unread {
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
