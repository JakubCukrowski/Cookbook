import { useParams } from "react-router-dom";
import { Col, Row, Container, Spinner } from "react-bootstrap";
import { StyledImage } from "../../styles/StyledImage";
import { SingleRecipeH2 } from "../../styles/StyledH2";
import { SpinnerContainer } from "../../styles/Containers";
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
import { storage } from "../../firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { AuthorImageWrapper } from "./AuthorImageWrapper";
import { RecipeDescription } from "./RecipeDescription";
import { RecipeAuthor } from "./RecipeAuthor";
import { RecipeAuthorWrapper } from "./RecipeAuthorWrapper";
import { UserAuth } from "../../context/AuthContext";

export const SingleRecipe = () => {
  const { recipeId } = useParams();
  const { user, actualLikedRecipes, updateActualUserLikedRecipes } = UserAuth();
  const [searchedRecipe, setSearchedRecipe] = useState(null);
  const [isFound, setIsFound] = useState(false);
  const [authorName, setAuthorName] = useState(null);
  const [authorProfilePhotoURL, setAuthorProfilePhotoURL] = useState("");
  const [isLiked, setIsLiked] = useState(false);

  //donwload the recipe, get author name, check if liked by user
  useEffect(() => {
    const getSingleRecipeData = async () => {
      const recipeRef = doc(db, "recipes", recipeId);
      const recipeSnap = await getDoc(recipeRef);
      setSearchedRecipe(recipeSnap.data());
      setIsFound(true);

      const userRef = doc(db, "users", recipeSnap.data().addedBy);
      const userSnap = await getDoc(userRef);
      setAuthorName(userSnap.data().username);

      const listRef = ref(storage, `/profile/${recipeSnap.data().addedBy}`);
      const anonRef = ref(storage, "/profile/anon-chef1.png");
      await listAll(listRef).then((res) => {
        //check if user udated photo. If not sets url as anonymous photo
        if (res.items.length === 0) {
          getDownloadURL(anonRef).then((url) => setAuthorProfilePhotoURL(url));
        } else {
          res.items.forEach((item) =>
            getDownloadURL(item).then((url) => setAuthorProfilePhotoURL(url))
          );
        }
      });
    };

    getSingleRecipeData();
  }, []);

  useEffect(() => {
    if (user) {
      const checkIfLiked = async () => {
        const loggedUserRef = doc(db, "users", user.uid);
        const userData = await getDoc(loggedUserRef);
        setIsLiked(userData.data().liked.includes(recipeId));
      };

      checkIfLiked();
    }
  }, [actualLikedRecipes]);

  //on like button click
  const handleLikeRecipe = async () => {
    const userRef = doc(db, "users", user.uid);
    const recipeRef = doc(db, "recipes", recipeId);

    if (!isLiked) {
      await updateDoc(userRef, {
        liked: arrayUnion(recipeId),
      });

      await updateDoc(recipeRef, {
        likedBy: arrayUnion(user.uid),
        likes: increment(1),
      });

      setIsLiked((prev) => !prev);
      updateActualUserLikedRecipes((prev) => [...prev, searchedRecipe]);
    }

    if (isLiked) {
      await updateDoc(userRef, {
        liked: arrayRemove(recipeId),
      });

      await updateDoc(recipeRef, {
        likedBy: arrayRemove(user.uid),
        likes: increment(-1),
      });
      const newActualUserLikedRecipes = actualLikedRecipes;
      const filterLikedRecipes = newActualUserLikedRecipes.filter(
        (recipe) => recipe.id !== recipeId
      );
      updateActualUserLikedRecipes(filterLikedRecipes);
    }
  };

  return (
    <section>
      {!isFound ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        <Container>
          <Row>
            <Col style={{ textAlign: "center", padding: "20px 0" }}>
              <h1>{searchedRecipe.name}</h1>
            </Col>
          </Row>
          <Row style={{ marginBottom: 30 }}>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <StyledImage rounded src={searchedRecipe.image} />
            </Col>
          </Row>
          <Row>
            <RecipeAuthorWrapper>
              <AuthorImageWrapper>
                <img src={authorProfilePhotoURL} alt="profile_photo" />
              </AuthorImageWrapper>
              <RecipeAuthor>{authorName}</RecipeAuthor>
            </RecipeAuthorWrapper>
            <Col>
              {user && searchedRecipe.addedBy !== user.uid ? (
                <LikeButton
                  onClick={handleLikeRecipe}
                  className={isLiked ? "liked" : null}
                ></LikeButton>
              ) : null}
            </Col>
          </Row>
          <Row>
            <Col sm={5} style={{ marginTop: 10 }}>
              <RecipeDescription>
                {searchedRecipe.description}
              </RecipeDescription>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Col sm={5}>
              <SingleRecipeH2>Składniki</SingleRecipeH2>
              {searchedRecipe.ingredients.map((ingredient, index) => (
                <p key={index}>{ingredient}</p>
              ))}
            </Col>
            <Col sm={5}>
              <SingleRecipeH2>Jak przygotować</SingleRecipeH2>
              {searchedRecipe.steps.map((value, index) => (
                <p key={index}>
                  {`${index + 1}.`}
                  <span> {value}</span>
                </p>
              ))}
            </Col>
          </Row>
        </Container>
      )}
    </section>
  );
};
