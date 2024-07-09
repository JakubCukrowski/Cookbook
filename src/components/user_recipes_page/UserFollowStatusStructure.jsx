import { useEffect, useState } from "react";
import { RecipesProvider } from "../../context/RecipesContext";
import { Grid, Typography, Avatar, Box, Button } from "@mui/material";
import { OrangeButton } from "../../assets/styles/Buttons";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { normalizedString } from "../../helpers/helpers";

const UserFollowStatusStructure = ({ follower, username, visitedUserData, handleFollow }) => {
  const { recipes } = RecipesProvider();
  const { user, userData } = UserAuth();
  const [followerRecipes, setFollowerRecipes] = useState([]);
  const navigate = useNavigate();
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const filteredFollowerRecipes = recipes.filter(
      (recipe) => recipe.addedBy.userId === follower.id
    );
    setFollowerRecipes(filteredFollowerRecipes);

    if (user && userData.following) {
      setIsFollowing(
        userData.following.some(
          (userFollowing) => userFollowing.id === follower.id
        )
      );
    }
  }, [recipes, username]);

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
            onClick={() => navigate(`/${normalizedString(follower.username)}`)}
          >
            <Box sx={{ display: "flex", gap: "6px", alignItems: "flex-end" }}>
              <Avatar
                sx={{ width: "100px", height: "100px" }}
                src={follower.profilePhoto}
                alt="follower_photo"
              />
              <Box>
                <Typography variant="h6">{follower.username}</Typography>
                <Typography>Przepisy {followerRecipes.length}</Typography>
              </Box>
            </Box>
          </Button>

          {user &&
            user.uid !== visitedUserData.id &&
            user.uid !== follower.id &&
            !isFollowing && (
              <OrangeButton onClick={() => handleFollow(follower, userData, isFollowing, setIsFollowing)}>Obserwuj</OrangeButton>
            )}

          {user &&
            user.uid !== visitedUserData.id &&
            user.uid !== follower.id &&
            isFollowing && <Typography>Obserwujesz</Typography>}

          {user &&
            user.uid !== visitedUserData.id &&
            user.uid === follower.id && (
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
