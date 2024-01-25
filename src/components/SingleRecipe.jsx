import { useParams } from "react-router-dom";
import { Col, Row, Container, Spinner } from "react-bootstrap";
import { StyledImage } from "../styles/StyledImage";
import { StyledH2 } from "../styles/StyledH2";
import { SpinnerContainer } from "../styles/Containers";
import { LikeButton } from "./LikeButton";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

export const SingleRecipe = () => {
  
  const { recipeId } = useParams();
  const [searchedRecipe, setSearchedRecipe] = useState(null);
  const [isFound, setIsFound] = useState(false);

  useEffect(() => {
    const getSingleDoc = async () => {
      console.log("from effect - single recipe");
      const docRef = doc(db, "recipes", recipeId);
      const docSnap = await getDoc(docRef);
      setSearchedRecipe(docSnap.data());
      setIsFound(true)
    };

    getSingleDoc()
  }, []);

  //handle liked recipes in firebase
  const handleSaveData = async (data) => {
    // const userRef = doc(db, "users", user.uid);
    // await updateDoc(userRef, {
    //   liked: arrayUnion(data),
    // });
    // setLikedRecipes((prev) => [...prev, data]);
    // updateLikesCount(recipeId);
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
              {/* {user ? (
                <LikeButton
                  className={checkIfExists(recipeId) ? "liked" : ""}
                  onClick={
                    checkIfExists(recipeId)
                      ? () => dislikeRecipe(findRecipe._id)
                      : () => handleSaveData(findRecipe)
                  }
                  top="0"
                  right="30px"
                  rightTablet="180px"
                  rightDesktop="200px"
                  rightXl="220px"
                />
              ) : (
                ""
              )} */}
            </Col>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Col sm={5}>
              <StyledH2>Składniki</StyledH2>
              {searchedRecipe.ingredients.map((ingredient, index) => (
                <p key={index}>{ingredient}</p>
              ))}
            </Col>
            <Col sm={5}>
              <StyledH2>Jak przygotować</StyledH2>
              {Object.entries(searchedRecipe.steps).map((value, index) => (
                <p key={index}>
                  {`${value[0]}.`}
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
