import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Container, Spinner } from "react-bootstrap";
import { DataWrapper } from "../../styles/DataWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { DashboardElement } from "./DashboardElement";
import { StyledLink } from "../../styles/StyledLink";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { BootstrapModal } from "../BootstrapModal";
import { DashboardImage } from "./DashboardImage";
import { DashboardSection } from "./DashboardSection";
import { SpinnerContainer } from "../../styles/Containers";
import { StyledH2 } from "../../styles/StyledH2";
import { DashboardImageWrapper } from "./DashboardImageWrapper";
import { UpdateUserPhoto } from "./UpdateUserPhoto";
import { BootstrapPagination } from "./BootstrapPagination";
import { DashboardDesktopWrapper } from "./DashboardDesktopWrapper";
import { DataDesktopWrapper } from "./DataDesktopWrapper";
import { DashboardDesktopRecipes } from "./DashboardDesktopRecipes";
import { updateProfile } from "firebase/auth";

export const Dashboard = () => {
  const {
    user,
    recipes,
    isUserImageUploaded,
    setIsUserImageUploaded,
    userLikedRecipes,
    updateUserLikedRecipes
  } = UserAuth();

  //progress bar percentage
  const [currentProgress, setCurrentProgress] = useState(0);

  //added by user recipes
  const [userRecipes, setUserRecipes] = useState([]);

  //error state of user photo
  const [userPhotoError, setUserPhotoError] = useState(false)

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

  //upload photo logic with timeout to make modal dissapear
  const uploadPhoto = async (e) => {
    setUserPhotoError(false)
    const profileImageRef = ref(storage, `profile/${user.uid}/profile_photo`);
    await uploadBytes(profileImageRef, e.target.files[0]).then(async () => {
      await getDownloadURL(profileImageRef).then((url) => {
        updateProfile(user, {
          photoURL: url,
        });
        setIsUserImageUploaded(true);
      });
    }).catch(() => setUserPhotoError(true))


    const timeoutID = setTimeout(() => {
      setIsUserImageUploaded(false);
    }, 2000);

    return () => clearTimeout(timeoutID);
  };

  useEffect(() => {

    //get recipes added by user
    const filterRecipesByUser = recipes.filter(recipe => recipe.addedBy.user === user.displayName)
    setUserRecipes(filterRecipesByUser)

    //get user liked recipes
    const filterRecipesByLikes = recipes.filter(recipe => recipe.likedBy.includes(user.uid))
    updateUserLikedRecipes(filterRecipesByLikes)


  }, [recipes]);

  return (
    <>
      {user !== null ? (
        <Container>
          <DashboardSection>
            {isUserImageUploaded ? (
              <BootstrapModal
                title={"Pomyślnie zmieniono zdjęcie"}
                progress={currentProgress}
              />
            ) : null}
            <StyledH2>Twój profil</StyledH2>
            <DashboardDesktopWrapper>
              <DataDesktopWrapper>
                <DataWrapper>
                  {userPhotoError ? <p className="text-error"><strong>Wybrałeś niepoprawny plik!</strong></p> : null}
                  {
                    <>
                      <DashboardImageWrapper>
                        <DashboardImage
                          src={user.photoURL}
                          alt="profile_image"
                        />
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
                          strongTitle={user.displayName}
                          inputName="username"
                        />
                        <DashboardElement
                          spanTitle={"Email: "}
                          strongTitle={user.email}
                          inputName="email"
                          isButton={true}
                          onClick={() =>
                            console.log("Dodaj funkcję zmiany maila!")
                          }
                        />
                        <DashboardElement
                          spanTitle={"Hasło"}
                          strongTitle={
                            <StyledLink to={"/"}>Zmień hasło</StyledLink>
                          }
                        />
                      </Container>
                    </>
                  }
                </DataWrapper>
              </DataDesktopWrapper>

              <DashboardDesktopRecipes>
                <DataWrapper>
                  <h2>Twoje przepisy</h2>
                  <StyledLink to={"/add-recipe"}>
                    {<FontAwesomeIcon icon={faPlus} />} Dodaj przepis
                  </StyledLink>
                  {userRecipes.length === 0 ? (
                    <p>Aktualnie nie dodałeś żadnego przepisu</p>
                  ) : (
                    <BootstrapPagination
                      recipes={userRecipes}
                      isUserRecipe={true}
                    />
                  )}
                </DataWrapper>
                <DataWrapper>
                  <h2>Polubione przepisy</h2>
                  {userLikedRecipes.length > 0 ? (
                    <BootstrapPagination recipes={userLikedRecipes} />
                  ) : (
                    <p>Nie polubiłeś żadnego przepisu</p>
                  )}
                </DataWrapper>
              </DashboardDesktopRecipes>
            </DashboardDesktopWrapper>
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
