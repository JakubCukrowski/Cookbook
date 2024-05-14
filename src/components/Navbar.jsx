import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { Notifications } from "./Notifications";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import {
  AppBar,
  Container,
  Drawer,
  Tooltip,
  Box,
  Avatar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Badge,
  Fab,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { StyledHomeLink, StyledLink } from "../assets/styles/StyledLink";
import { HideOnScroll } from "./HideOnScroll";
import { ScrollTop } from "./ScrollTop";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { SearchBar } from "./ui/SearchBar";

export const CustomNavbar = () => {
  const { user, signout } = UserAuth();
  const navigate = useNavigate();
  const [loggedOut, setLoggedOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [userData, setUserData] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
          } else {
            setNotifications((prev) => prev);
          }
        });
      }
    };

    getNotifications();
  }, [user]);

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

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const redirectToDashboard = () => {
    handleCloseUserMenu();
    navigate("/dashboard");
  };

  const handleSignOut = async () => {
    try {
      handleCloseUserMenu();
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

  return (
    <>
      <HideOnScroll>
        <AppBar position="sticky" sx={{ backgroundColor: "#e19f25" }}>
          <Container maxWidth="xxl">
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
              <StyledHomeLink to="/">Przepisowa pasja</StyledHomeLink>

              <Box>
                {user ? (
                  <>
                    <IconButton
                      size="large"
                      aria-label="show 17 new notifications"
                      color="inherit"
                      sx={{ marginRight: "20px" }}
                      onClick={() => setNotificationsOpen((prev) => !prev)}
                    >
                      <Badge
                        badgeContent={
                          notifications.filter(
                            (notification) => !notification.read
                          ).length
                        }
                        color="error"
                      >
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                    <Tooltip title="Menu">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src={user.photoURL} />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <MenuItem onClick={redirectToDashboard}>
                        Panel użytkownika
                      </MenuItem>
                      <MenuItem onClick={handleSignOut}>Wyloguj się</MenuItem>
                    </Menu>
                  </>
                ) : (
                  <StyledLink color="white" to="/signin">
                    Zaloguj się
                  </StyledLink>
                )}
              </Box>
              <Drawer
                open={notificationsOpen}
                onClose={() => setNotificationsOpen(false)}
                anchor="right"
              >
                {user && (
                  <Notifications
                    userData={userData}
                    notifications={notifications}
                    updateNotifications={updateNotifications}
                    hideNotifications={updateNotificationsOpen}
                  />
                )}
              </Drawer>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <ScrollTop>
        <Fab onClick={() => window.scrollTo(0, 0)} size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};
