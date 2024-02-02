import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Container, Spinner } from "react-bootstrap";
import { DataWrapper } from "../../styles/DataWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { DashboardElement } from "./DashboardElement";
import { StyledLink } from "../../styles/StyledLink";
import { DashboardRecipes } from "./DashboardRecipes";
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
import { Pagination } from "react-bootstrap";

export const Dashboard = () => {
  const {
    user,
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

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(3);

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
      querySnapshot.forEach((snapshot) => {
        setUserRecipes((prev) => [...prev, {...snapshot.data(), id: snapshot.id}]);
      });
    });
  }, []);

  const lastRecipeIndex = currentPage * recipesPerPage;
  const firstRecipeIndex = lastRecipeIndex - recipesPerPage;
  const slicedRecipes = userRecipes.slice(firstRecipeIndex, lastRecipeIndex);

  //bootstrap pagination

  let items = [];
  for (
    let number = 1;
    number <= Math.ceil(userRecipes.length / recipesPerPage);
    number++
  ) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

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
                  <>
                    {slicedRecipes.map((recipe, index) => (
                      <DashboardRecipes
                        key={index}
                        linkTo={recipe.id}
                        recipeName={recipe.name}
                        recipeImage={recipe.image}
                      />
                    ))}
                  </>
                )}
                {userRecipes.length > 3 ? (
                  <Pagination>{items}</Pagination>
                ) : null}
              </DataWrapper>
              <DataWrapper>
                <h2>Polubione przepisy</h2>
                <p>Nie polubiłeś żadnego przepisu</p>
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
