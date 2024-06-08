import { Container, Box, Grid, CircularProgress } from "@mui/material";
import { DashboardSection } from "../assets/styles/DashboardStyles";
import UserDetails from "../components/dashboard/UserDetails";
import { UserAuth } from "../context/AuthContext";
import { RecipesProvider } from "../context/RecipesContext";
import { useNavigate } from "react-router-dom";
import DashboardRecipesStructure from "../components/dashboard/DashboardRecipesStructure";
import { SpinnerContainer } from "../assets/styles/Containers";
import Followers from "../components/dashboard/Followers";
import Following from "../components/dashboard/Following";

export const Dashboard = () => {
  const { user, userData } = UserAuth();
  const { recipesAddedByUser, recipesLikedByUser } = RecipesProvider();
  const creationTime = new Date(
    parseInt(user.metadata.createdAt)
  ).toLocaleDateString();

  const navigate = useNavigate();

  const handleAddRecipe = () => navigate("/add-recipe");
  return (
    <>
      {userData ? (
        <DashboardSection>
          <Container>
            <Box sx={{ width: "100%" }}>
              <Grid container columnSpacing={8} rowSpacing={8}>
                {userData && (
                  <Grid sx={{ margin: "0 auto" }} item xs={12}>
                    <UserDetails
                      avatarSrc={user.photoURL}
                      created={creationTime}
                      userName={user.displayName}
                      userEmail={user.email}
                      followersCount={userData.followers.length}
                      recipesCount={recipesAddedByUser.length}
                      addNewRecipe={handleAddRecipe}
                    />
                  </Grid>
                )}

                <Grid item xs={12} md={6}>
                  <DashboardRecipesStructure
                    title="Dodane przepisy"
                    array={recipesAddedByUser}
                    emptyMessage="Nie dodałeś żadnego przepisu"
                    addedRecipes={true}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <DashboardRecipesStructure
                    title="Polubione przepisy"
                    array={recipesLikedByUser}
                    emptyMessage="Nie polubiłeś żadnego przepisu"
                    addedRecipes={false}
                  />
                </Grid>

                <Grid item xs={12} md={8} sx={{ margin: "0 auto" }}>
                  <Following followingArray={userData.following} />
                </Grid>

                <Grid item xs={12} md={8} sx={{ margin: "0 auto" }}>
                  <Followers followersArray={userData.followers} />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </DashboardSection>
      ) : (
        <SpinnerContainer>
          <CircularProgress />
        </SpinnerContainer>
      )}
    </>
  );
};
