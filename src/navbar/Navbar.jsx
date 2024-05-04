import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {
  StyledLink,
  StyledNavbar,
  StyledNavbarColapse,
  LoggedUserImage,
  NavbarLink,
  StyledNavbarToggle,
  NotificationsButton,
  NotificationsCenter,
  NotificationsTracker,
} from "../assets/styles/NavbarStyles";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { BootstrapModal } from "../components/BootstrapModal";
import { useEffect, useState } from "react";
import { Notifications } from "./Notifications";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export const CustomNavbar = () => {
  const { user, signout } = UserAuth();
  const navigate = useNavigate();
  const [loggedOut, setLoggedOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [userData, setUserData] = useState(null);

  const pathname = window.location.pathname;

  //get logged user notifications and logged user data
  useEffect(() => {
    const getNotifications = async () => {
      //get user data
      if (user) {
        const userRef = doc(db, "users", user.uid);
        //live notifications show/delete
        const unsub = onSnapshot(userRef, (doc) => {
          setUserData(doc.data());
          if (doc.data().notifications !== undefined) {
            setNotifications(
              doc.data().notifications.sort((a, b) => b.addDate - a.addDate)
            );
          }
        });
      }
    };

    getNotifications();
  }, [user]);

  const handleSignOut = async () => {
    try {
      await signout();
      setLoggedOut(true);

      const timeout = setTimeout(() => {
        setLoggedOut(false);
      }, 2000);

      return () => clearTimeout(timeout);
    } catch (error) {
      console.log(error);
    }
  };

  //show modal
  useEffect(() => {
    if (loggedOut) {
      const interval = setInterval(() => {
        setProgress((prev) => prev + 5);
      }, 50);

      return () => clearInterval(interval);
    } else {
      setProgress(0);
    }
  }, [loggedOut]);

  //close notifications
  const updateNotificationsOpen = () => {
    setNotificationsOpen(false);
  };

  //update notifications after read
  const updateNotifications = (value) => {
    setNotifications(value);
  };

  return (
    <>
      <StyledNavbar
        fixed={pathname === "/" ? "top" : ""}
        sticky={pathname !== "/" ? "top" : ""}
        expand="lg"
      >
        <Container fluid>
          <StyledLink to={"/"}>Przepisowa pasja</StyledLink>
          {user && (
            <>
              <NotificationsButton
                onClick={() => setNotificationsOpen((prev) => !prev)}
              >
                <FontAwesomeIcon icon={faBell} />
                {notifications &&
                  notifications.filter((notification) => !notification.read)
                    .length > 0 && (
                    <NotificationsTracker>
                      {
                        notifications.filter(
                          (notification) => !notification.read
                        ).length
                      }
                    </NotificationsTracker>
                  )}
              </NotificationsButton>
              <NotificationsCenter
                className={notificationsOpen ? "" : "hidden"}
              >
                {user && (
                  <Notifications
                    userData={userData}
                    notifications={notifications}
                    updateNotifications={updateNotifications}
                    hideNotifications={updateNotificationsOpen}
                  />
                )}
              </NotificationsCenter>
            </>
          )}
          <StyledNavbarToggle />
          <StyledNavbarColapse id="navbar-dark-example">
            <Nav>
              {user !== null ? (
                <>
                  <Nav.Item>
                    <NavbarLink className="nav-link" to="/dashboard">
                      Zalogowany: {user.displayName}{" "}
                      <LoggedUserImage
                        src={user.photoURL}
                        alt="profile_image"
                      />
                    </NavbarLink>
                  </Nav.Item>
                  <Nav.Item>
                    <Button onClick={handleSignOut} variant="danger">
                      <FontAwesomeIcon icon={faPowerOff} /> Wyloguj
                    </Button>
                  </Nav.Item>
                </>
              ) : (
                <Nav.Item>
                  <Link className="nav-link" to="/signin">
                    Zaloguj się
                  </Link>
                </Nav.Item>
              )}
            </Nav>
          </StyledNavbarColapse>
        </Container>
        {loggedOut ? (
          <BootstrapModal title="Wylogowano pomyślnie" progress={progress} />
        ) : null}
      </StyledNavbar>
    </>
  );
};
