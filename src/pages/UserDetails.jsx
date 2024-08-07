import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  collection,
  query,
  where,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { RecipesProvider } from "../context/RecipesContext";
import { Avatar, Grid, Snackbar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { OrangeButton } from "../assets/styles/Buttons";
import MessageIcon from "@mui/icons-material/Message";
import AddIcon from "@mui/icons-material/Add";
import UserRecipesAdded from "../components/user_recipes_page/UserRecipesAdded";
import UserRecipesLiked from "../components/user_recipes_page/UserRecipesLiked";
import UserFollowing from "../components/user_recipes_page/UserFollowing";
import UserFollowers from "../components/user_recipes_page/UserFollowers";
import CustomSignUpModal from "../components/user_recipes_page/CustomSignUpModal";
import { NotFound } from "./NotFound";
import UserDetailsButtons from "../components/user_recipes_page/UserDetailsButtons";

export const UserDetails = () => {
  const { username } = useParams();
  const { user, userData, updateUserData } = UserAuth(); //userData refers to logged user
  const { recipes } = RecipesProvider();
  const [visitedUserRecipes, setVisitedUserRecipes] = useState([]); // refers to the user we are currently visiting
  const [visitedUserData, setVisitedUserData] = useState([]);
  const [likedByVisitedUser, setLikedByVisitedUser] = useState([]);
  const [isFollowed, setIsFollowed] = useState(false);
  const [isLogged, setIsLogged] = useState(null);
  const [selectedTab, setSelectedTab] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getVisitedUserData = async () => {
      setSelectedTab("added");
      if (username) {
        const q = query(
          collection(db, "users"),
          where("normalizedName", "==", username)
        );
        const unsub = onSnapshot(q, (querySnapshot) => {
          if (querySnapshot.empty) setIsEmpty(true);
          querySnapshot.forEach((doc) => {
            setVisitedUserData({ ...doc.data(), id: doc.id });
          });
        });
      }
    };

    getVisitedUserData();
  }, [username]);

  useEffect(() => {
    if (user) {
      setIsFollowed(
        visitedUserData.followers?.some(
          (follower) => follower.username === user.displayName
        )
      );
    }

    const getVisitedUserRecipes = () => {
      if (visitedUserData) {
        const filteredRecipes = recipes.filter(
          (recipe) => recipe.addedBy.userId === visitedUserData.id
        );
        setVisitedUserRecipes(filteredRecipes);
      }
    };

    const getRecipesLikedByVisitedUser = () => {
      if (visitedUserData) {
        const filterLikedRecipes = [...recipes].filter((recipe) =>
          recipe.likedBy.includes(visitedUserData.id)
        );
        setLikedByVisitedUser(filterLikedRecipes);
      }
    };

    const redirectToDashboard = () => {
      if (user && user.displayName === visitedUserData.username) {
        return navigate("/dashboard");
      }
    };

    redirectToDashboard();
    getVisitedUserRecipes();
    getRecipesLikedByVisitedUser();
  }, [visitedUserData]);

  const handleFollow = async (
    userToHandle,
    loggedUserData,
    state,
    updateState
  ) => {
    const userRef = doc(db, "users", userToHandle.id);
    const loggedUserRef = doc(db, "users", user.uid);
    const tempUserData = loggedUserData;

    if (!tempUserData.following) {
      tempUserData.following = [];
    }

    if (!state) {
      updateState(true);
      await updateDoc(userRef, {
        followers: arrayUnion({
          username: user.displayName,
          profilePhoto: user.photoURL,
          id: user.uid,
        }),
      });

      await updateDoc(loggedUserRef, {
        following: arrayUnion({
          username: userToHandle.username,
          id: userToHandle.id,
          profilePhoto: userToHandle.profilePhoto,
        }),
      });

      const tempFollowing = tempUserData.following;
      tempFollowing.push({
        username: userToHandle.username,
        id: userToHandle.id,
        profilePhoto: userToHandle.profilePhoto,
      });
      tempUserData.following = tempFollowing;

      updateUserData(tempUserData);
    }

    if (state) {
      updateState(false);
      await updateDoc(userRef, {
        followers: arrayRemove({
          username: user.displayName,
          profilePhoto: user.photoURL,
          id: user.uid,
        }),
      });

      await updateDoc(loggedUserRef, {
        following: arrayRemove({
          username: userToHandle.username,
          id: userToHandle.id,
          profilePhoto: userToHandle.profilePhoto,
        }),
      });

      const userDataFollowing = tempUserData.following;
      const unfollow = userDataFollowing.filter(
        (userFollowed) => userFollowed.id !== userToHandle.id
      );
      tempUserData.following = unfollow;
      updateUserData(tempUserData);
    }
  };

  const handleFollowUser = (
    userToHandle,
    loggedUserData,
    state,
    updateState
  ) => {
    handleFollow(userToHandle, loggedUserData, state, updateState);
    setIsOpen((prev) => !prev);
  };

  const updateSelectedTab = (value) => {
    setSelectedTab(value);
  };

  return (
    <>
      {isEmpty ? (
        <NotFound />
      ) : (
        <section id="user_details">
          <Snackbar
            autoHideDuration={4000}
            open={isOpen}
            onClose={(event, reason) => {
              if (reason === "clickaway") {
                return;
              }

              setIsOpen((prev) => !prev);
            }}
            message={
              isFollowed
                ? `Obserwujesz użytkownika ${visitedUserData.username}`
                : `Przestałeś obserwować użytkownika ${visitedUserData.username}`
            }
          />
          <CustomSignUpModal
            isOpen={isLogged === false}
            isClose={() => setIsLogged(null)}
          />
          {visitedUserData && (
            <Container>
              <Grid container sx={{ margin: "10px 0" }} rowSpacing={4}>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-end", gap: "8px" }}
                  >
                    <Avatar
                      src={visitedUserData.profilePhoto}
                      sx={{ width: "140px", height: "140px" }}
                    />
                    <Box>
                      <Typography variant="h4">
                        {visitedUserData.username}
                      </Typography>
                      <Typography>
                        Przepisy: {visitedUserRecipes.length}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                      width: "100%",
                    }}
                  >
                    <OrangeButton
                      disabled={isOpen}
                      onClick={
                        user && visitedUserData.id !== user.uid
                          ? () =>
                              handleFollowUser(
                                visitedUserData,
                                userData,
                                isFollowed,
                                setIsFollowed
                              )
                          : () => setIsLogged(false)
                      }
                    >
                      {isFollowed ? (
                        "Przestań obserwować"
                      ) : (
                        <>
                          <AddIcon />
                          Obserwuj
                        </>
                      )}
                    </OrangeButton>
                    <OrangeButton>
                      <MessageIcon /> Napisz wiadomość
                    </OrangeButton>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <UserDetailsButtons
                    updateSelectedTab={updateSelectedTab}
                    selectedTab={selectedTab}
                  />
                </Grid>
                {selectedTab === "added" && (
                  <UserRecipesAdded
                    userRecipes={visitedUserRecipes}
                    username={username}
                  />
                )}
                {selectedTab === "liked" && (
                  <UserRecipesLiked
                    likedByUser={likedByVisitedUser}
                    username={username}
                  />
                )}
                {selectedTab === "following" && (
                  <UserFollowing
                    visitedUserData={visitedUserData}
                    username={username}
                    handleFollow={handleFollow}
                  />
                )}
                {selectedTab === "followers" && (
                  <UserFollowers
                    visitedUserData={visitedUserData}
                    username={username}
                    handleFollow={handleFollow}
                  />
                )}
              </Grid>
            </Container>
          )}
        </section>
      )}
    </>
  );
};
