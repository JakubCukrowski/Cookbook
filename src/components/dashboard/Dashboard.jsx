import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Container, Spinner } from "react-bootstrap";
import { DataWrapper } from "../../styles/DataWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { DashboardElement } from "./DashboardElement";
import { StyledLink } from "../../styles/StyledLink";
import { uploadBytes, ref } from "firebase/storage";
import { storage } from "../../firebase";
import { BootstrapModal } from "../BootstrapModal";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { DashboardImage } from "./DashboardImage";
import { DashboardSection } from "./DashboardSection";
import { SpinnerContainer } from "../../styles/Containers";
import { StyledH2 } from "../../styles/StyledH2";
import { DashboardImageWrapper } from "./DashboardImageWrapper";
import { UpdateUserPhoto } from "./UpdateUserPhoto";
import { BootstrapPagination } from "./BootstrapPagination";

export const Dashboard = () => {
  const {
    user,
    recipesLikedByUserById,
    actualLikedRecipes,
    updateActualUserLikedRecipes,
    recipes,
    userImage,
    isUserImageUploaded,
    setIsUserImageUploaded,
    displayName,
  } = UserAuth();

  //progress bar percentage
  const [currentProgress, setCurrentProgress] = useState(0);

  //to download image from firebase
  const [profileImageRef, setProfileImageRef] = useState("");

  //added by user recipes
  const [userRecipes, setUserRecipes] = useState([]);

  //interval for progress bar
  useEffect(() => {
    if (isUserImageUploaded) {
      const IntervalID = setInterval(() => {
        setCurrentProgress((prev) => prev + 5);
      }, 50);

      return () => clearInterval(IntervalID);
    } else {
      setCurrentProgress(0);
    }
  }, [isUserImageUploaded]);

  useEffect(() => {
    if (user) {
      setProfileImageRef(ref(storage, `profile/${user.uid}/profile_photo`));
    }
  }, [user]);

  //upload photo logic with timeout to make modal dissapear
  const uploadPhoto = async (e) => {
    await uploadBytes(profileImageRef, e.target.files[0]).then((snapshot) =>
      console.log(snapshot)
    );
    setIsUserImageUploaded(true);

    const timeoutID = setTimeout(() => {
      setIsUserImageUploaded(false);
    }, 2000);

    return () => clearTimeout(timeoutID);
  };

  useEffect(() => {
    const recipesQuery = query(
      collection(db, "recipes"),
      where("addedBy", "==", user.uid)
    );

    onSnapshot(recipesQuery, (querySnapshot) => {
      querySnapshot.forEach((recipe) => {
        setUserRecipes((prev) => [
          ...prev,
          { ...recipe.data(), id: recipe.id },
        ]);
      });
    });
  }, []);

  useEffect(() => {
    const updateLikedRecipes = async () => {
      const temp = [];
      recipes.filter((recipe) => {
        recipesLikedByUserById.forEach((like) => {
          if (recipe.id === like) {
            temp.push(recipe);
          }
        });
      });

      updateActualUserLikedRecipes(temp);
    };

    updateLikedRecipes();
  }, [recipes]);

  return (
    <>
      {user !== null && profileImageRef !== "" ? (
        <Container>
          <DashboardSection>
            {isUserImageUploaded ? (
              <BootstrapModal
                title={"Pomyślnie zmieniono zdjęcie"}
                progress={currentProgress}
              />
            ) : null}
            <StyledH2>Twój profil</StyledH2>
            <DataWrapper>
              {userImage !== null ? (
                <>
                  <DashboardImageWrapper>
                    <DashboardImage src={userImage} alt="profile_image" />
                    <UpdateUserPhoto onChange={uploadPhoto} />
                  </DashboardImageWrapper>
                  <Container>
                    <DashboardElement
                      spanTitle={"Utworzono: "}
                      strongTitle={new Date(
                        parseInt(user.metadata.createdAt)
                      ).toLocaleDateString()}
                    />
                    <DashboardElement
                      spanTitle={"Nazwa użytkownika: "}
                      strongTitle={displayName}
                      inputName="username"
                    />
                    <DashboardElement
                      spanTitle={"Email: "}
                      strongTitle={user.email}
                      inputName="email"
                      isButton={true}
                      onClick={() => console.log("Dodaj funkcję zmiany maila!")}
                    />
                    <DashboardElement
                      spanTitle={"Hasło"}
                      strongTitle={
                        <StyledLink to={"/"}>Zmień hasło</StyledLink>
                      }
                    />
                  </Container>
                </>
              ) : (
                <Spinner />
              )}
            </DataWrapper>
            <div>
              <DataWrapper>
                <h2>Twoje przepisy</h2>
                <StyledLink to={"/add-recipe"}>
                  {<FontAwesomeIcon icon={faPlus} />} Dodaj przepis
                </StyledLink>
                {userRecipes.length === 0 ? (
                  <p>Aktualnie nie dodałeś żadnego przepisu</p>
                ) : (
                  <BootstrapPagination recipes={userRecipes} />
                )}
              </DataWrapper>
              <DataWrapper>
                <h2>Polubione przepisy</h2>
                {actualLikedRecipes.length > 0 ? (
                  <BootstrapPagination recipes={actualLikedRecipes} />
                ) : (
                  <p>Nie polubiłeś żadnego przepisu</p>
                )}
              </DataWrapper>
            </div>
          </DashboardSection>
        </Container>
      ) : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
    </>
  );
};
