import {
  Container,
  Typography,
  Box,
  Grid,
  Avatar,
  CircularProgress,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { RecipesProvider } from "../context/RecipesContext";
import { useEffect, useState } from "react";
import { AddComment } from "../components/ui/AddComment";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { Comments } from "../components/Comments";
import { OrangeButton } from "../assets/styles/Buttons";
import { startWithUpper } from "../helpers/helpers";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { UserAuth } from "../context/AuthContext";
import { SpinnerContainer } from "../assets/styles/Containers";

const SingleRecipe = () => {
  const { recipeId } = useParams();
  const { user } = UserAuth();
  const { recipes } = RecipesProvider();
  const [singleRecipe, setSingleRecipe] = useState(null);
  const [recipeComments, setRecipeComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getSingleRecipe = () => {
      if (recipes) {
        const foundSingleRecipe = recipes.find(
          (recipe) => recipe.id === recipeId
        );
        setSingleRecipe(foundSingleRecipe);
      }
    };

    getSingleRecipe();
  }, [recipes, singleRecipe]);

  useEffect(() => {
    const getComments = () => {
      if (singleRecipe) {
        const unsub = onSnapshot(doc(db, "comments", recipeId), (doc) => {
          if (doc.exists() && doc.data().comments.length > 0) {
            setRecipeComments([...doc.data().comments]);
          } else if (doc.exists() && doc.data().comments.length === 0) {
            setRecipeComments([]);
          }
        });
      }
    };

    getComments()
  }, [singleRecipe]);

  const handleLikeRecipe = async () => {
    const recipeRef = doc(db, "recipes", singleRecipe.id);
    const recipeSnap = await getDoc(recipeRef);
    if (!recipeSnap.data().likedBy.includes(user.uid)) {
      await updateDoc(recipeRef, {
        likedBy: arrayUnion(user.uid),
      });
    }

    if (recipeSnap.data().likedBy.includes(user.uid)) {
      await updateDoc(recipeRef, {
        likedBy: arrayRemove(user.uid),
      });
    }
  };

  return (
    <section style={{ padding: "30px 0" }}>
      {singleRecipe ? (
        <Container>
          <Box
            sx={{
              boxShadow: "0 0 6px 2px #e19f2540",
              padding: "30px",
              borderRadius: "10px",
            }}
          >
            {singleRecipe && (
              <Grid container columnSpacing={10} rowSpacing={4}>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                  <Typography variant="h3">{singleRecipe.name}</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    {singleRecipe.tags.length > 0 &&
                      singleRecipe.tags.map((tag) => (
                        <OrangeButton
                          key={tag}
                          onClick={() => navigate(`/show?tag=${tag}`)}
                        >
                          {startWithUpper(tag)}
                        </OrangeButton>
                      ))}
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    {singleRecipe.description}
                  </Typography>
                </Grid>

                <Grid container item xs={12} md={6} rowSpacing={2}>
                  <Grid item xs={12}>
                    <img
                      style={{ width: "100%" }}
                      src={singleRecipe.image}
                      alt="przepis_foto"
                    />
                  </Grid>

                  {user && singleRecipe.addedBy.userId !== user.uid && (
                    <Grid item xs={12}>
                      <OrangeButton
                        onClick={handleLikeRecipe}
                        sx={{
                          display: "flex",
                          gap: "6px",
                          alignItems: "center",
                        }}
                      >
                        {singleRecipe.likedBy.includes(user.uid) ? (
                          <>
                            {" "}
                            Nie lubię <ThumbDownAltIcon />
                          </>
                        ) : (
                          <>
                            Polub przepis <FavoriteBorderIcon />
                          </>
                        )}
                      </OrangeButton>
                    </Grid>
                  )}

                  <Grid item xs={12}>
                    <Typography variant="h6">
                      <strong>Autor przepisu:</strong>
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-end",
                        gap: "10px",
                      }}
                    >
                      <Avatar
                        sx={{ width: "80px", height: "80px" }}
                        src={singleRecipe.addedBy.photo}
                      />
                      <Typography variant="h4">
                        {singleRecipe.addedBy.user}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h4"
                    sx={{ textAlign: "center", marginBottom: "20px" }}
                  >
                    Potrzebne składniki
                  </Typography>
                  <Box>
                    {singleRecipe.ingredients.map((ingredient, index) => (
                      <Typography key={index}>&#9679; {ingredient}</Typography>
                    ))}
                  </Box>
                </Grid>

                <Grid item xs={12} md={9} sx={{ margin: "0 auto" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{ marginBottom: "20px", textAlign: "center" }}
                    >
                      Jak przygotować?
                    </Typography>
                    {singleRecipe.preparationSteps.map((step, index) => (
                      <Typography key={index}>
                        <strong style={{ fontSize: 20 }}>{index + 1}.</strong>{" "}
                        {step}
                      </Typography>
                    ))}
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={8}
                  sx={{ margin: "0 auto", textAlign: "center" }}
                >
                  <Typography variant="h5">Skomentuj</Typography>
                  <AddComment searchedRecipe={singleRecipe} />
                </Grid>

                {recipeComments && recipeComments.length > 0 && (
                  <Grid item xs={12}>
                    <Typography variant="h5" sx={{ textAlign: "center" }}>
                      Komentarze
                    </Typography>
                    <Comments
                      comments={recipeComments}
                      searchedRecipe={singleRecipe}
                      currentDate={Date.now()}
                    />
                  </Grid>
                )}
              </Grid>
            )}
          </Box>
        </Container>
      ) : (
        <SpinnerContainer>
          <CircularProgress />
        </SpinnerContainer>
      )}
    </section>
  );
};

export default SingleRecipe;
