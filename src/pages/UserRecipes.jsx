import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  collection,
  getDocs,
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

export const UserRecipes = () => {
  const { username } = useParams();
  const { user } = UserAuth();
  const { recipes } = RecipesProvider();
  const [userData, setUserData] = useState(null);
  const [userRecipes, setUserRecipes] = useState([]);
  const [likedByUser, setLikedByUser] = useState([]);
  const [isFollowed, setIsFollowed] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const navigate = useNavigate();

  //get data of the user
  useEffect(() => {
    const getUserData = async () => {
      setSelectedTab('added')
      setUserData(null);
      const q = query(
        collection(db, "users"),
        where("normalizedName", "==", username)
      );

      //check if logged user is following the recipe creator
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        if (user && doc.data().followers) {
          setUserData({ ...doc.data(), id: doc.id });
        } else {
          setUserData({ ...doc.data(), id: doc.id, followers: [] });
        }

        if (user && doc.data().followers) {
          setIsFollowed(
            doc.data().followers.some((follower) => follower.id === user.uid)
          );
        } else {
          setIsFollowed(false);
        }
      });
    };

    getUserData();
  }, [username]);

  //then catch user recipes
  useEffect(() => {
    const getUserRecipes = () => {
      if (userData) {
        setUserRecipes(
          recipes.filter((recipe) => recipe.addedBy.user === userData.username)
        );
      }
    };

    const getRecipesLikedByUser = () => {
      if (userData) {
        setLikedByUser(
          recipes.filter((recipe) => recipe.likedBy.includes(userData.id))
        );
      }
    };

    getRecipesLikedByUser();
    getUserRecipes();
  }, [userData, username]);

  useEffect(() => {
    
  })

  //handle follow/unfollow
  const handleFollow = async () => {
    const tempUserData = { ...userData };
    const docOfRecipeCreator = doc(db, "users", userData.id);
    const loggedUserRef = doc(db, "users", user.uid);
    const loggedUserData = await getDoc(loggedUserRef);
    if (
      tempUserData.followers &&
      tempUserData.followers.find((follower) => follower.id === user.uid)
    ) {
      const filteredUserData = tempUserData.followers.filter(
        (follower) => follower.id !== user.uid
      );
      await updateDoc(docOfRecipeCreator, {
        followers: filteredUserData,
      });
      tempUserData.followers = filteredUserData;
      setUserData(tempUserData);
      setIsFollowed(false);

      await updateDoc(loggedUserRef, {
        following: arrayRemove({
          ...userData,
        }),
      });
    } else {
      await updateDoc(docOfRecipeCreator, {
        followers: arrayUnion({
          ...loggedUserData.data(),
          id: loggedUserData.id,
        }),
      });
      tempUserData.followers.push({
        ...loggedUserData.data(),
        id: loggedUserData.id,
      });
      setUserData(tempUserData);
      setIsFollowed(true);

      await updateDoc(loggedUserRef, {
        following: arrayUnion({
          ...userData,
        }),
      });
    }
  };

  return (
    <section id="user_data">
      {userData && (
        <Container>
          <Grid container sx={{ margin: "10px 0" }} rowSpacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", alignItems: "flex-end", gap: "8px" }}>
                <Avatar
                  src={userData.profilePhoto}
                  sx={{ width: "140px", height: "140px" }}
                />
                <Box>
                  <Typography variant="h4">{userData.username}</Typography>
                  <Typography>Przepisy: {userRecipes.length}</Typography>
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
                {user && userData.id !== user.uid && (
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
              <UserRecipesAdded userRecipes={userRecipes} />
            )}
            {selectedTab === "liked" && (
              <UserRecipesLiked likedByUser={likedByUser} />
            )}
            {selectedTab === "following" && (
              <UserFollowing following={userData.following} />
            )}
            {selectedTab === "followers" && (
              <UserFollowers followers={userData.followers} />
            )}
          </Grid>
        </Container>
      )}
    </section>
  );
};
