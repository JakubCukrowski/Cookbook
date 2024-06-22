import { Grid, Typography } from "@mui/material";
import { RecipeStructure } from "../RecipeStructure";
import { useNavigate } from "react-router-dom";

const UserRecipesStructure = ({title, array, emptyMessage}) => {
  const navigate = useNavigate();

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          {title}
        </Typography>
      </Grid>
      {array.length > 0 ? (
        array.map((recipe, index) => (
          <RecipeStructure
            key={index}
            recipe={recipe}
            onClick={() => navigate(`/recipes/${recipe.id}`)}
          />
        ))
      ) : (
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            {emptyMessage}
          </Typography>
        </Grid>
      )}
    </>
  );
};

export default UserRecipesStructure;