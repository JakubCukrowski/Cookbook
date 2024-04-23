import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledH2 } from "../../styles/StyledH2";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { UserAuth } from "../../context/AuthContext";
import { SpinnerContainer } from "../../styles/Containers";
import { Spinner } from "react-bootstrap";
import { RecipesGroup } from "./main_page_recipes/RecipesGroup";

export const UserRecipes = () => {
  const { username } = useParams();
  const { recipes } = UserAuth();
  const [userData, setUserData] = useState(null);
  const [userRecipes, setUserRecipes] = useState([])

  //get data of the user
  useEffect(() => {
    const getUserData = async () => {
      const q = query(
        collection(db, "users"),
        where("normalizedName", "==", username)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUserData(doc.data());
      });
    };

    getUserData();
  }, [recipes]);

  //then catch user recipes
  useEffect(() => {
    const getUserRecipes = () => {
        if (userData) {
            setUserRecipes(recipes.filter(recipe =>recipe.addedBy.user === userData.username))
        }
    }

    getUserRecipes()
  }, [userData])

  return (
    <>
      {userData ? (
        <>
          <StyledH2>Użytkownik {userData.username}</StyledH2>
          <RecipesGroup array={userRecipes}/>
        </>
      ) : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
    </>
  );
};
