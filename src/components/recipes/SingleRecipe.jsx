import { useParams } from "react-router-dom";
import { Col, Row, Container, Spinner } from "react-bootstrap";
import { StyledImage } from "../../styles/StyledImage";
import { SingleRecipeH2 } from "../../styles/StyledH2";
import { SpinnerContainer } from "../../styles/Containers";
import { LikeButton } from "../LikeButton";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { storage } from "../../firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { AuthorImageWrapper } from "./AuthorImageWrapper";
import { RecipeDescription } from "./RecipeDescription";
import { RecipeAuthor } from "./RecipeAuthor";
import { RecipeAuthorWrapper } from "./RecipeAuthorWrapper";

export const SingleRecipe = () => {
  const { recipeId } = useParams();
  const [searchedRecipe, setSearchedRecipe] = useState(null);
  const [isFound, setIsFound] = useState(false);
  const [authorName, setAuthorName] = useState(null);
  const [authorProfilePhotoURL, setAuthorProfilePhotoURL] = useState("");

  //donwload the recipe, get author name
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
      await listAll(listRef).then((res) =>
        res.items.forEach(
          async (item) =>
            await getDownloadURL(item).then((url) =>
              setAuthorProfilePhotoURL(url)
            )
        )
      );
    };

    getSingleRecipeData();
  }, []);

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
              {Object.entries(searchedRecipe.steps).map((value, index) => (
                <p key={index}>
                  {`${parseInt(value[0]) + 1}.`}
                  <span> {value[1]}</span>
                </p>
              ))}
            </Col>
          </Row>
        </Container>
      )}
    </section>
  );
};
