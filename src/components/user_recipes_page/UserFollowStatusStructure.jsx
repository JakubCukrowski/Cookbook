import { useEffect, useState } from "react";
import { RecipesProvider } from "../../context/RecipesContext";
import { Grid, Typography, Avatar, Box, Button } from "@mui/material";
import { OrangeButton } from "../../assets/styles/Buttons";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { normalizedString } from "../../helpers/helpers";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../firebase";

const UserFollowStatusStructure = ({ follower, username, visitedUserData }) => {
  const { recipes } = RecipesProvider();
  const { user, userData, updateUserData } = UserAuth();
  const [followerRecipes, setFollowerRecipes] = useState([]);
  const navigate = useNavigate();
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const filteredFollowerRecipes = recipes.filter(
      (recipe) => recipe.addedBy.userId === follower.userId
    );
    setFollowerRecipes(filteredFollowerRecipes);

    if (user && userData.following) {
      setIsFollowing(
        userData.following.some(
          (userFollowing) => userFollowing.userId === follower.userId
        )
      );
    }
  }, [recipes, username]);

  const handleFollow = async () => {
    const userToFollowRef = doc(db, "users", follower.userId);
    const loggedUserRef = doc(db, "users", user.uid);
    const tempUserData = userData;

    setIsFollowing(true);
    await updateDoc(userToFollowRef, {
      followers: arrayUnion({
        name: user.displayName,
        profilePhoto: user.photoURL,
        userId: user.uid,
      }),
    });

    await updateDoc(loggedUserRef, {
      following: arrayUnion({
        name: follower.name,
        userId: follower.userId,
        profilePhoto: follower.profilePhoto,
      }),
    });

    tempUserData.following.push({
      name: follower.name,
      userId: follower.userId,
      profilePhoto: follower.profilePhoto,
    });

    const tempFollowing = tempUserData.following
    tempFollowing.push({
      name: follower.name,
      userId: follower.userId,
      profilePhoto: follower.profilePhoto,
    })
    tempUserData.following = tempFollowing

    updateUserData(tempUserData)
  };

  return (
    <>
      <Grid item xs={12} md={7} sx={{ margin: "0 auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 40px",
            boxShadow: "0 0 6px 2px #e19f2540",
          }}
        >
          <Button
            sx={{ textTransform: "none", textAlign: "left" }}
            onClick={() => navigate(`/${normalizedString(follower.name)}`)}
          >
            <Box sx={{ display: "flex", gap: "6px", alignItems: "flex-end" }}>
              <Avatar
                sx={{ width: "100px", height: "100px" }}
                src={follower.profilePhoto}
                alt="follower_photo"
              />
              <Box>
                <Typography variant="h6">{follower.name}</Typography>
                <Typography>Przepisy {followerRecipes.length}</Typography>
              </Box>
            </Box>
          </Button>

          {user &&
            user.uid !== visitedUserData.id &&
            user.uid !== follower.userId &&
            !isFollowing && (
              <OrangeButton onClick={handleFollow}>Obserwuj</OrangeButton>
            )}

          {user &&
            user.uid !== visitedUserData.id &&
            user.uid !== follower.userId &&
            isFollowing && <Typography>Obserwujesz</Typography>}

          {user &&
            user.uid !== visitedUserData.id &&
            user.uid === follower.userId && (
              <OrangeButton onClick={() => navigate("/dashboard")}>
                Twój profil
              </OrangeButton>
            )}
        </Box>
      </Grid>
    </>
  );
};

export default UserFollowStatusStructure;
