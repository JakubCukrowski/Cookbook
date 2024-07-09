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
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { RecipesProvider } from "../context/RecipesContext";
import {
  Avatar,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { OrangeButton } from "../assets/styles/Buttons";
import MessageIcon from "@mui/icons-material/Message";
import AddIcon from "@mui/icons-material/Add";
import UserRecipesAdded from "../components/user_recipes_page/UserRecipesAdded";
import UserRecipesLiked from "../components/user_recipes_page/UserRecipesLiked";
import UserFollowing from "../components/user_recipes_page/UserFollowing";
import UserFollowers from "../components/user_recipes_page/UserFollowers";

export const UserDetails = () => {
  const { username } = useParams();
  const { user, userData, updateUserData } = UserAuth(); //userData refers to logged user
  const { recipes } = RecipesProvider();
  const [visitedUserRecipes, setVisitedUserRecipes] = useState([]); // refers to the user we are currently visiting
  const [visitedUserData, setVisitedUserData] = useState([]);
  const [likedByVisitedUser, setLikedByVisitedUser] = useState([]);
  const [isFollowed, setIsFollowed] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
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
          (follower) => follower.name === user.displayName
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

    getVisitedUserRecipes();
    getRecipesLikedByVisitedUser();
  }, [visitedUserData]);

  const handleFollow = async () => {
    const visitedUserRef = doc(db, "users", visitedUserData.id);
    const loggedUserRef = doc(db, "users", user.uid);
    const tempUserData = userData;
    if (!isFollowed) {
      setIsFollowed(true);
      await updateDoc(visitedUserRef, {
        followers: arrayUnion({
          name: user.displayName,
          profilePhoto: user.photoURL,
          userId: user.uid,
        }),
      });

      await updateDoc(loggedUserRef, {
        following: arrayUnion({
          name: visitedUserData.username,
          userId: visitedUserData.id,
          profilePhoto: visitedUserData.profilePhoto,
        }),
      });

      tempUserData.following.push({
        name: visitedUserData.username,
        userId: visitedUserData.id,
        profilePhoto: visitedUserData.profilePhoto,
      });

      updateUserData(tempUserData)
    }

    if (isFollowed) {
      setIsFollowed(false);
      await updateDoc(visitedUserRef, {
        followers: arrayRemove({
          name: user.displayName,
          profilePhoto: user.photoURL,
          userId: user.uid,
        }),
      });

      await updateDoc(loggedUserRef, {
        following: arrayRemove({
          name: visitedUserData.username,
          userId: visitedUserData.id,
          profilePhoto: visitedUserData.profilePhoto,
        }),
      });

      const userDataFollowing = tempUserData.following
      const unfollow = userDataFollowing.filter(userFollowed => userFollowed.userId !== visitedUserData.id)
      tempUserData.following = unfollow
      updateUserData(tempUserData)
    }
  };

  return (
    <section id="user_details">
      {visitedUserData && (
        <Container>
          <Grid container sx={{ margin: "10px 0" }} rowSpacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", alignItems: "flex-end", gap: "8px" }}>
                <Avatar
                  src={visitedUserData.profilePhoto}
                  sx={{ width: "140px", height: "140px" }}
                />
                <Box>
                  <Typography variant="h4">
                    {visitedUserData.username}
                  </Typography>
                  <Typography>Przepisy: {visitedUserRecipes.length}</Typography>
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
                {user && visitedUserData.id !== user.uid && (
                  <>
                    <OrangeButton onClick={handleFollow}>
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
                  </>
                )}

                {user && userData === user.uid && (
                  <OrangeButton onClick={() => navigate("/dashboard")}>
                    Panel użytkownika
                  </OrangeButton>
                )}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <List
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: "#e19f25",
                  color: "white",
                  borderRadius: "4px",
                }}
              >
                <ListItemButton
                  onClick={() => setSelectedTab("added")}
                  selected={selectedTab === "added"}
                >
                  <ListItemText primary="Dodane przepisy" />
                </ListItemButton>
                <ListItemButton
                  selected={selectedTab === "liked"}
                  onClick={() => setSelectedTab("liked")}
                >
                  <ListItemText primary="Polubione przepisy" />
                </ListItemButton>
                <ListItemButton
                  selected={selectedTab === "following"}
                  onClick={() => setSelectedTab("following")}
                >
                  <ListItemText primary="Obserwowani" />
                </ListItemButton>
                <ListItemButton
                  selected={selectedTab === "followers"}
                  onClick={() => setSelectedTab("followers")}
                >
                  <ListItemText primary="Obserwujący" />
                </ListItemButton>
              </List>
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
                selectedTab={selectedTab}
              />
            )}
            {selectedTab === "followers" && (
              <UserFollowers
                visitedUserData={visitedUserData}
                username={username}
                selectedTab={selectedTab}
              />
            )}
          </Grid>
        </Container>
      )}
    </section>
  );
};
