import { useEffect, useState } from "react";
import { RecipesProvider } from "../../context/RecipesContext";
import { Grid, Typography, Avatar, Box, Button } from "@mui/material";
import { OrangeButton } from "../../assets/styles/Buttons";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserFollowerStructure = ({ follower }) => {
  const { recipes } = RecipesProvider();
  const { user } = UserAuth();
  const [followerRecipes, setFollowerRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredFollowerRecipes = recipes.filter(
      (recipe) => recipe.addedBy.userId === follower.id
    );
    setFollowerRecipes(filteredFollowerRecipes);
  }, [recipes]);
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
            onClick={() => navigate(`/${follower.normalizedName}`)}
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
          {follower.id !== user.uid && <OrangeButton>Obserwuj</OrangeButton>}
        </Box>
      </Grid>
    </>
  );
};

export default UserFollowerStructure;
