import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Container, Spinner } from "react-bootstrap";
import { DataWrapper } from "../../styles/DataWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
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

export const Dashboard = () => {
  const {
    user,
    userImage,
    isUserImageUploaded,
    setIsUserImageUploaded,
    displayName,
    recipes,
  } = UserAuth();
  const [currentProgress, setCurrentProgress] = useState(0);
  const [profileImageRef, setProfileImageRef] = useState("");
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

  //cos nie tak z tym useeffectem do poprawy

  useEffect(() => {
    const recipesQuery = query(
      collection(db, "recipes"),
      where("addedBy", "==", user.uid)
    );
    onSnapshot(recipesQuery, (querySnapshot) => {
      querySnapshot.forEach((snapshot) =>
        setUserRecipes((prev) => [...prev, snapshot.data()])
      );
    });
  }, []);

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
            <h2 style={{ textAlign: "center" }}>Twój profil</h2>
            <DataWrapper>
              <DashboardImage src={userImage} alt="profile_image" />
              <Container>
                <label style={{ cursor: "pointer" }} htmlFor="addFile">
                  <FontAwesomeIcon icon={faPenToSquare} /> Zmień zdjęcie
                </label>
                <input
                  type="file"
                  onChange={uploadPhoto}
                  id="addFile"
                  style={{ alignSelf: "flex-end", display: "none" }}
                />
              </Container>
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
                  isButton={true}
                />
                <DashboardElement
                  spanTitle={"Email: "}
                  strongTitle={user.email}
                  inputName="email"
                  isButton={true}
                />
                <DashboardElement
                  spanTitle={"Hasło"}
                  strongTitle={<StyledLink to={"/"}>Zmień hasło</StyledLink>}
                />
              </Container>
            </DataWrapper>
            <div>
              <DataWrapper>
                <h2>Twoje przepisy</h2>
                {userRecipes.length === 0 ? (
                  <p>Aktualnie nie dodałeś żadnego przepisu</p>
                ) : (
                  <>
                    {userRecipes.map((recipe, index) => (
                      <DashboardRecipes
                        key={index}
                        linkTo={recipe.id}
                        recipeName={recipe.name}
                        recipeImage={recipe.image}
                      />
                    ))}
                  </>
                )}
                <StyledLink to={"/add-recipe"}>
                  {<FontAwesomeIcon icon={faPlus} />} Dodaj przepis
                </StyledLink>
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
