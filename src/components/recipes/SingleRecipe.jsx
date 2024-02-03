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
                border: "1px solid red",
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div style={{position: "absolute", bottom: 0, right: 0}}>
                <p>{authorName}</p>
                <img
                  style={{ width: 120, height: 120, borderRadius: "50%" }}
                  src={authorProfilePhotoURL}
                  alt="profile_photo"
                />
              </div>
              <StyledImage rounded src={searchedRecipe.image} />
            </Col>
          </Row>
          <Row>
            <Col sm={5}>
              <p>{searchedRecipe.description}</p>
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
