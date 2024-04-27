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
} from "./NavbarStyles";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { BootstrapModal } from "../BootstrapModal";
import { useEffect, useState } from "react";
import { Notifications } from "./Notifications";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const CustomNavbar = () => {
  const { user, signout } = UserAuth();
  const navigate = useNavigate();
  const [loggedOut, setLoggedOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const pathname = window.location.pathname;

//get logged user notifications
  useEffect(() => {
    const getNotifications = async () => {
      //get user data
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      setNotifications(docSnap.data().notifications);
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
                <NotificationsTracker>{notifications.filter(notification => !notification.read).length}</NotificationsTracker>
              </NotificationsButton>
              <NotificationsCenter
                className={notificationsOpen ? "" : "hidden"}
              >
                {user && (
                  <Notifications notifications={notifications} hideNotifications={updateNotificationsOpen} />
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
                  {/* <Nav.Item>
                    <NotificationsButton
                      onClick={() => setNotificationsOpen((prev) => !prev)}
                    >
                      <FontAwesomeIcon icon={faBell} />
                    </NotificationsButton>
                    <NotificationsCenter
                      className={notificationsOpen ? "" : "hidden"}
                    >
                      {user && <Notifications hideNotifications={updateNotificationsOpen}/>}
                    </NotificationsCenter>
                  </Nav.Item> */}
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
