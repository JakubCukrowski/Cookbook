import { useParams } from "react-router-dom";
import { Col, Row, Container, Spinner } from "react-bootstrap";
import { StyledImage } from "../../styles/StyledImage";
import { SingleRecipeH2 } from "../../styles/StyledH2";
import {
  SingleRecipeContainer,
  SpinnerContainer,
} from "../../styles/Containers";
import { LikeButton } from "../LikeButton";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  increment,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { AuthorImageWrapper } from "./AuthorImageWrapper";
import { RecipeDescription } from "./RecipeDescription";
import { RecipeAuthor } from "./RecipeAuthor";
import { RecipeAuthorWrapper } from "./RecipeAuthorWrapper";
import { UserAuth } from "../../context/AuthContext";
import { H1wrapper } from "../../styles/H1wrapper";
import { Wrapper } from "../../styles/Wrapper";

export const SingleRecipe = () => {
  const { recipeId } = useParams();
  const {
    user,
    userLikedRecipes,
    updateUserLikedRecipes,
    isRecipeLiked,
    updateIsRecipeLiked,
  } = UserAuth();
  const [searchedRecipe, setSearchedRecipe] = useState(null);
  const [isFound, setIsFound] = useState(false);

  //donwload the recipe, get author name, check if liked by current user
  useEffect(() => {
    const getSingleRecipeData = async () => {
      const recipeRef = doc(db, "recipes", recipeId);
      const recipeSnap = await getDoc(recipeRef);
      setSearchedRecipe(recipeSnap.data());
      setIsFound(true);
    };

    getSingleRecipeData();
  }, []);

  //checks if recipe has been already liked
  useEffect(() => {
    if (user) {
      const checkIfLiked = async () => {
        const loggedUserRef = doc(db, "users", user.uid);
        const userData = await getDoc(loggedUserRef);
        updateIsRecipeLiked(userData.data().liked.includes(recipeId));
      };

      checkIfLiked();
    }
  }, [userLikedRecipes]);

  //on like button click
  const handleLikeRecipe = async () => {
    const userRef = doc(db, "users", user.uid);
    const recipeRef = doc(db, "recipes", recipeId);

    if (!isRecipeLiked) {
      await updateDoc(userRef, {
        liked: arrayUnion(recipeId),
      });

      await updateDoc(recipeRef, {
        likedBy: arrayUnion(user.uid),
        likes: increment(1),
      });

      updateIsRecipeLiked((prev) => !prev);
      updateUserLikedRecipes((prev) => [...prev, searchedRecipe]);
    }

    if (isRecipeLiked) {
      await updateDoc(userRef, {
        liked: arrayRemove(recipeId),
      });

      await updateDoc(recipeRef, {
        likedBy: arrayRemove(user.uid),
        likes: increment(-1),
      });
      const newActualUserLikedRecipes = userLikedRecipes;
      const filterLikedRecipes = newActualUserLikedRecipes.filter(
        (recipe) => recipe.id !== recipeId
      );
      updateUserLikedRecipes(filterLikedRecipes);
    }
  };

  return (
    <section>
      {!isFound ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        <>
          <H1wrapper>
            <h1>{searchedRecipe.name}</h1>
          </H1wrapper>
          <SingleRecipeContainer>
            <div style={{ width: "100%" }}>
              <div style={{ marginBottom: 30 }}>
                <Wrapper justify="center">
                  <StyledImage rounded src={searchedRecipe.image} />
                </Wrapper>
              </div>
              <div style={{ display: "flex" }}>
                <RecipeAuthorWrapper>
                  <AuthorImageWrapper>
                    <img
                      src={searchedRecipe.addedBy.photo}
                      alt="profile_photo"
                    />
                  </AuthorImageWrapper>
                  <RecipeAuthor>{searchedRecipe.addedBy.user}</RecipeAuthor>
                </RecipeAuthorWrapper>
                <Wrapper justify="center">
                  {user && searchedRecipe.addedBy.user !== user.displayName ? (
                    <LikeButton
                      onClick={handleLikeRecipe}
                      className={isRecipeLiked ? "liked" : null}
                    ></LikeButton>
                  ) : null}
                </Wrapper>
              </div>
              <div>
                <div sm={5} style={{ marginTop: 10 }}>
                  <RecipeDescription>
                    {searchedRecipe.description}
                  </RecipeDescription>
                </div>
              </div>
            </div>
            <Wrapper direction="column">
              <div sm={5}>
                <SingleRecipeH2>Składniki</SingleRecipeH2>
                {searchedRecipe.ingredients.map((ingredient, index) => (
                  <p key={index}>{ingredient}</p>
                ))}
              </div>
              <div sm={5}>
                <SingleRecipeH2>Jak przygotować</SingleRecipeH2>
                {searchedRecipe.steps.map((value, index) => (
                  <p key={index}>
                    {`${index + 1}.`}
                    <span> {value}</span>
                  </p>
                ))}
              </div>
            </Wrapper>
          </SingleRecipeContainer>
        </>
      )}
    </section>
  );
};
