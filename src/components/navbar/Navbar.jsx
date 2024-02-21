import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { StyledLink, StyledNavbar, StyledNavbarColapse } from "./StyledNavbar";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { LoggedUserImage } from "./LoggedUserImage";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { BootstrapModal } from "../BootstrapModal";
import { useEffect, useState } from "react";

export const CustomNavbar = () => {
  const { user, signout } = UserAuth();
  const navigate = useNavigate();
  const [loggedOut, setLoggedOut] = useState(false);
  const [progress, setProgress] = useState(0);

  const pathname = window.location.pathname

  const handleSignOut = async () => {
    try {
      await signout();
      setLoggedOut(true);
      navigate("/");

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

  return (
    <>
      <StyledNavbar
        fixed={pathname === "/" ? "top" : ""}
        sticky={pathname !== "/" ? "top" : ""}
        variant="dark"
        bg="dark"
        expand="lg"
      >
        <Container fluid>
          <StyledLink to={"/"}>Przepisowa pasja</StyledLink>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <StyledNavbarColapse id="navbar-dark-example">
            <Nav>
              {user !== null ? (
                <>
                  <Nav.Item>
                    <Link className="nav-link" to="/dashboard">
                      Zalogowany: {user.displayName}{" "}
                      <LoggedUserImage
                        src={user.photoURL}
                        alt="profile_image"
                      />
                    </Link>
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
