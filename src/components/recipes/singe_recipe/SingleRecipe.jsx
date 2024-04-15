import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { StyledImage } from "../../../styles/StyledImage";
import { SingleRecipeH2 } from "../../../styles/StyledH2";
import {
  SingleRecipeContainer,
  SpinnerContainer,
} from "../../../styles/Containers";
import { LikeButton } from "../../LikeButton";
import {
  arrayRemove,
  arrayUnion,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { useEffect, useState } from "react";
import {
  AuthorImageWrapper,
  RecipeDescription,
  RecipeAuthor,
  RecipeAuthorWrapper,
  RecipeTagsWrapper,
  RecipeTagLink,
  StyledCommentsDiv,
} from "../RecipesStyles";
import { UserAuth } from "../../../context/AuthContext";
import { H1wrapper } from "../../../styles/H1wrapper";
import { Wrapper } from "../../../styles/Wrapper";
import { AddComment } from "../../comments/AddComment";
import { Comments } from "../../comments/Comments";
export const SingleRecipe = () => {
  const { recipeId } = useParams();
  const {
    user,
    recipes,
    userLikedRecipes,
    updateUserLikedRecipes,
    isRecipeLiked,
    updateIsRecipeLiked,
  } = UserAuth();
  const [searchedRecipe, setSearchedRecipe] = useState({});
  const [isFound, setIsFound] = useState(false);
  const [comments, setComments] = useState([]);

  //donwload the recipe, get author name, check if liked by current user
  useEffect(() => {
    if (recipes.length > 0) {
      const filterSearchedRecipe = recipes.find(
        (recipe) => recipe.id === recipeId
      );
      setSearchedRecipe(filterSearchedRecipe);
      setIsFound(true);
    }
  }, [recipes]);

  //checks if recipe has been already liked
  useEffect(() => {
    if (user) {
      const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
        updateIsRecipeLiked(doc.data().liked.includes(recipeId));
      });
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
      });
      const newActualUserLikedRecipes = userLikedRecipes;
      const filterLikedRecipes = newActualUserLikedRecipes.filter(
        (recipe) => recipe.id !== recipeId
      );
      updateUserLikedRecipes(filterLikedRecipes);
    }
  };

  //calculate elapsed time based on date when comment was added
  const [currentDate, setCurrentDate] = useState(Date.now());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(Date.now());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  //download comments
  useEffect(() => {
    if (searchedRecipe.id) {
      const getRecipeComments = async () => {
        onSnapshot(doc(db, "comments", searchedRecipe.id), (comments) => {
          //check if there's any comment/s
          if (comments.data() !== undefined) {
            setComments(comments.data().comments);
          }
        });
      };

      getRecipeComments();
    }
  }, [searchedRecipe]);

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
              <div style={{ marginTop: 20, fontSize: 20 }}>
                Polubienia: <strong>{searchedRecipe.likedBy.length}</strong>
              </div>
              <div>
                <div sm={5} style={{ marginTop: 10 }}>
                  <RecipeDescription>
                    {searchedRecipe.description}
                  </RecipeDescription>
                </div>
                {searchedRecipe.tags.length > 0 ? (
                  <RecipeTagsWrapper>
                    {searchedRecipe.tags.map((tag, index) => (
                      <RecipeTagLink key={index} to={`/show?tag=${tag}`}>
                        {tag.split("")[0].toUpperCase() +
                          tag.split("").splice(1, tag.length).join("")}
                      </RecipeTagLink>
                    ))}
                  </RecipeTagsWrapper>
                ) : null}
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
          <StyledCommentsDiv>
            <h3 style={{ marginBottom: 30, textAlign: "center" }}>
              {comments.length > 0
                ? "Komentarze"
                : "Przepis nie ma jeszcze komentarzy"}
            </h3>
            {user && <p style={{ textAlign: "center" }}>Dodaj komentarz</p>}
            <AddComment searchedRecipe={searchedRecipe} />
            <Comments comments={comments} currentDate={currentDate} />
          </StyledCommentsDiv>
        </>
      )}
    </section>
  );
};
