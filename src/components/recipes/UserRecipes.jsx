import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { UserAuth } from "../../context/AuthContext";
import { FlexContainer, SpinnerContainer } from "../../styles/Containers";
import {
  Container,
  Form,
  FormLabel,
  FormSelect,
  Image,
  Spinner,
} from "react-bootstrap";
import { RecipesGroup } from "./main_page_recipes/RecipesGroup";
import { OrangeButton } from "../../styles/OrangeButton";
import { StyledH2 } from "../../styles/StyledH2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FormCategory } from "./form_elements/FormCategory";

export const UserRecipes = () => {
  //username from url to match the recipes
  const { username } = useParams();
  const { recipes } = UserAuth();
  //stota to download user data
  const [userData, setUserData] = useState(null);
  //recipes added by user
  const [userRecipes, setUserRecipes] = useState([]);
  //recipes liked by user
  const [likedByUser, setLikedByUser] = useState([]);
  //state to manage a meal selection
  const [mealSelected, setMealSelected] = useState("Wszystko");
  //filter user recipes by a meal
  const [filteredUserRecipes, setFilteredUserRecipes] = useState([]);

  //get data of the user
  useEffect(() => {
    const getUserData = async () => {
      setUserData(null);
      const q = query(
        collection(db, "users"),
        where("normalizedName", "==", username)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUserData({ ...doc.data(), id: doc.id });
      });
    };

    getUserData();
  }, [recipes, username]);

  //then catch user recipes
  useEffect(() => {
    const getUserRecipes = () => {
      if (userData) {
        setUserRecipes(
          recipes.filter((recipe) => recipe.addedBy.user === userData.username)
        );
        setFilteredUserRecipes(
          recipes.filter((recipe) => recipe.addedBy.user === userData.username)
        );
      }
    };

    const getRecipesLikedByUser = () => {
      if (userData) {
        setLikedByUser(
          recipes.filter((recipe) => recipe.likedBy.includes(userData.id))
        );
      }
    };

    getRecipesLikedByUser();
    getUserRecipes();
  }, [userData, username]);

  useEffect(() => {
    if (userRecipes) {
      if (mealSelected === "Wszystko") {
        setFilteredUserRecipes(userRecipes);
      } else {
        setFilteredUserRecipes(
          userRecipes.filter((recipe) => recipe.category === mealSelected)
        );
      }
    }
  }, [userRecipes, mealSelected]);

  const categories = [
    "Wszystko",
    "Zupy",
    "Desery",
    "Dania główne",
    "Śniadania",
    "Kolacje",
    "Przekąski",
    "Napoje",
  ];

  const onCategoryChange = (e) => {
    setMealSelected(e.target.value);
  };

  return (
    <>
      {userData ? (
        <>
          <Container>
            <FlexContainer align="center" padding="50px 0 0 0">
              <Image
                roundedCircle
                src={userData.profilePhoto}
                alt="profile_photo"
                style={{ width: 200, height: 200, objectFit: "cover" }}
              />
              <div style={{ textAlign: "start", marginLeft: 20 }}>
                <h2>{userData.username}</h2>
                <span>Dodane przepisy: {userRecipes.length}</span>
              </div>
              <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                <OrangeButton>
                  <FontAwesomeIcon icon={faPlus} /> Obserwuj
                </OrangeButton>{" "}
                <OrangeButton>Napisz wiadomość</OrangeButton>
              </div>
            </FlexContainer>
            <StyledH2>Przepisy użytkownika</StyledH2>
            <div style={{ width: "20%", margin: "auto" }}>
              <Form style={{ marginBottom: 50 }}>
                <FormLabel htmlFor="filter_select">
                  Filtruj po posiłku
                </FormLabel>
                <FormCategory
                  array={categories}
                  value={mealSelected}
                  onChange={onCategoryChange}
                />
              </Form>
            </div>
          </Container>
          {filteredUserRecipes.length > 0 ? (
            <RecipesGroup array={filteredUserRecipes} />
          ) : (
            <Container>
              <h5 style={{textAlign: "center"}}>
                Użytkownik {userData.username} nie posiada przepisu w kategorii{" "}
                {mealSelected}
              </h5>
            </Container>
          )}

          {userData && likedByUser.length > 0 && (
            <>
              <StyledH2>{userData.username} lubi te przepisy</StyledH2>
              <RecipesGroup array={likedByUser} />
            </>
          )}
        </>
      ) : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
    </>
  );
};
