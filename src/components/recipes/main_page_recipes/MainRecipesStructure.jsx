import { useNavigate } from "react-router-dom";
import { Container, Grid, Typography, Box, Divider } from "@mui/material";
import { OrangeButton } from "../../../assets/styles/Buttons";
import { RecipeStructure } from "../../RecipeStructure";
import { CustomDivider } from "../../../assets/styles/CustomDivider";

const MainRecipesStructure = ({
  sectionId,
  recipesGroupTitle,
  recipesArray,
  onButtonClick,
}) => {
  const navigate = useNavigate();
  return (
    <section id={sectionId} style={{ margin: '10px 0'}}>
      <Container maxWidth="xl">
        <Grid container rowSpacing={3}>
          <Grid item xs={12}>
            <CustomDivider variant="middle">
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {recipesGroupTitle}
              </Typography>
            </CustomDivider>
          </Grid>
          <Grid container item columnSpacing={8} rowSpacing={3}>
            {recipesArray.slice(0, 4).map((recipe, index) => (
              <RecipeStructure
                key={index}
                recipe={recipe}
                onClick={() => navigate(`/recipes/${recipe.id}`)}
              />
            ))}
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <OrangeButton onClick={onButtonClick}>Zobacz więcej</OrangeButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default MainRecipesStructure;
