import { useNavigate } from "react-router-dom";
import { Container, Grid, Typography, Box } from "@mui/material";
import { OrangeButton } from "../../../assets/styles/Buttons";
import { RecipeStructure } from "../../RecipeStructure";
import { CustomDivider } from "../../../assets/styles/CustomDivider";
import { useEffect, useState } from "react";
import { RecipesProvider } from "../../../context/RecipesContext";
import { UserAuth } from "../../../context/AuthContext";
import { Modal } from "@mui/material";
import { ModalContent } from "../../../assets/styles/ModalStyle";

const MainRecipesStructure = ({
  sectionId,
  recipesGroupTitle,
  recipesArray,
  onButtonClick,
}) => {
  const navigate = useNavigate();
  const [noRecipes, setNoRecipes] = useState([]);
  const [notLogged, setNotLogged] = useState(false);
  const { user } = UserAuth();

  useEffect(() => {
    if (recipesArray.length > 0 && recipesArray.length < 4) {
      const noRecipesTemp = [];
      for (let i = 0; i < 4 - recipesArray.length; i++) {
        noRecipesTemp.push(i);
      }

      setNoRecipes(noRecipesTemp);
    }
  }, [recipesArray]);

  return (
    <section id={sectionId} style={{ margin: "10px 0" }}>
      <Container maxWidth="xl">
        <Modal open={notLogged} onClose={() => setNotLogged(false)}>
          <ModalContent sx={{textAlign: "center", lineHeight: 5}}>
            <Typography>
              Musisz być zalogowany, żeby dodać przepis.
            </Typography>
            <OrangeButton onClick={() => navigate("/signin")}>
              Przejdź do logowania
            </OrangeButton>
            <Typography>Lub</Typography>
            <OrangeButton onClick={() => navigate("/signup")}>
              Załóż konto
            </OrangeButton>
          </ModalContent>
        </Modal>
        <Grid container rowSpacing={3}>
          <Grid item xs={12}>
            <CustomDivider variant="middle">
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {recipesGroupTitle}
              </Typography>
            </CustomDivider>
          </Grid>
          <Grid
            container
            item
            columnSpacing={5}
            rowSpacing={3}
            xs={10}
            sx={{ margin: "0 auto" }}
            md={12}
          >
            {recipesArray.slice(0, 4).map((recipe, index) => (
              <Grid key={index} item xs={12} md={6} lg={4} xl={3}>
                <RecipeStructure
                  recipe={recipe}
                  onClick={() => navigate(`/recipes/${recipe.id}`)}
                />
              </Grid>
            ))}
            {noRecipes.map((_, index) => (
              <Grid key={index} item xs={12} md={6} lg={4} xl={3}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography>Tutaj może znaleźć się Twój przepis.</Typography>
                  <OrangeButton
                    onClick={
                      user
                        ? () => navigate("/add-recipe")
                        : () => setNotLogged(true)
                    }
                  >
                    Dodaj przepis
                  </OrangeButton>
                </Box>
              </Grid>
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
