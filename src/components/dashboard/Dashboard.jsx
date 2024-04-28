import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Container, Spinner } from "react-bootstrap";
import { DataWrapper, FollowedUsersDataWrapper } from "../../styles/DataWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { StyledLink } from "../../styles/StyledLink";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase";
import { BootstrapModal } from "../BootstrapModal";
import { SpinnerContainer } from "../../styles/Containers";
import { StyledH2 } from "../../styles/StyledH2";
import { UpdateUserPhoto } from "./UpdateUserPhoto";
import { DashboardBootstrapPagination } from "./DashboardBootstrapPagination";
import { updateProfile } from "firebase/auth";
import { DashboardElement } from "./DashboardElement";
import {
  DashboardImage,
  DashboardSection,
  DashboardImageWrapper,
  DashboardDesktopWrapper,
  DataDesktopWrapper,
  DashboardDesktopRecipes,
  FollowedUserDiv,
  FollowedUsersDiv,
} from "./DashboardStyles";
import { auth } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const {
    user,
    recipes,
    isUserImageUploaded,
    setIsUserImageUploaded,
    userLikedRecipes,
    updateUserLikedRecipes,
  } = UserAuth();

  //progress bar percentage
  const [currentProgress, setCurrentProgress] = useState(0);

  //added by user recipes
  const [userRecipes, setUserRecipes] = useState([]);

  //error state of user photo
  const [userPhotoError, setUserPhotoError] = useState(false);

  //user data in users collection
  const [userData, setUserData] = useState([]);

  //get following of the logged user
  const [userFollowing, setUserFollowing] = useState([]);

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
    setUserPhotoError(false);
    const profileImageRef = ref(storage, `profile/${user.uid}/profile_photo`);
    const userRef = doc(db, "users", user.uid);
    try {
      await uploadBytes(profileImageRef, e.target.files[0])
        .then(async () => {
          await getDownloadURL(profileImageRef).then(async (url) => {
            //update url in logged user object
            await updateProfile(auth.currentUser, {
              photoURL: url,
            });
            //update url in user docs
            await updateDoc(userRef, {
              profilePhoto: url,
            });
            setIsUserImageUploaded(true);
          });
        })
        .catch((err) => {
          console.log(err);
          setUserPhotoError(true);
        });

      const timeoutID = setTimeout(() => {
        setIsUserImageUploaded(false);
      }, 2000);

      return () => clearTimeout(timeoutID);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (recipes && user !== undefined) {
      //get recipes added by user
      const filterRecipesByUser = recipes.filter(
        (recipe) => recipe.addedBy.user === user.displayName
      );
      setUserRecipes(filterRecipesByUser);

      //get user liked recipes
      const filterRecipesByLikes = recipes.filter((recipe) =>
        recipe.likedBy.includes(user.uid)
      );
      updateUserLikedRecipes(filterRecipesByLikes);
    }

    //get data of the logged user
    const updateUserData = async () => {
      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);
      setUserData(userDoc.data());
    };

    updateUserData();
  }, [recipes, user]);

  //get data of the followers
  useEffect(() => {
    const getFollowersData = async () => {
      if (userData) {
        const tempFollowing = [];
        const q = query(
          collection(db, "users"),
          where("followers", "array-contains", user.displayName)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((followed) => {
          tempFollowing.push(followed.data());
        });

        setUserFollowing(tempFollowing);
      }
    };

    getFollowersData();
  }, [userData]);

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
                  {userPhotoError ? (
                    <p className="text-error">
                      <strong>Wybrałeś niepoprawny plik!</strong>
                    </p>
                  ) : null}
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
                    <DashboardBootstrapPagination
                      recipes={userRecipes}
                      isUserRecipe={true}
                      showRecipesOnPage={2}
                    />
                  )}
                </DataWrapper>
                <DataWrapper>
                  <h2>Polubione przepisy</h2>
                  {userLikedRecipes.length > 0 ? (
                    <DashboardBootstrapPagination recipes={userLikedRecipes} />
                  ) : (
                    <p>Nie polubiłeś żadnego przepisu</p>
                  )}
                </DataWrapper>
                <FollowedUsersDataWrapper>
                  <h2>Obserwowani</h2>
                  <Container>
                    <FollowedUsersDiv>
                      {userData &&
                        userFollowing.map((followed, index) => {
                          return (
                            <StyledLink
                              color="black"
                              to={`/${followed.normalizedName}`}
                              key={index}
                              width="100%"
                            >
                              <FollowedUserDiv>
                                <img
                                  style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                  }}
                                  src={followed.profilePhoto}
                                  alt="profile_photo"
                                />
                                <div>
                                  <span>{followed.username}</span>
                                  <p>Polubione przepisy: {followed.liked.length}</p>
                                </div>
                              </FollowedUserDiv>
                            </StyledLink>
                          );
                        })}
                    </FollowedUsersDiv>
                  </Container>
                </FollowedUsersDataWrapper>
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
