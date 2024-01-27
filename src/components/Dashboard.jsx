import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Container, Spinner, Button } from "react-bootstrap";
import { DataWrapper } from "../styles/DataWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { DashboardElement } from "./DashboardElement";
import { StyledLink } from "../styles/StyledLink";
import { DashboardLikedRecipes } from "./DashboardLikedRecipes";
import { uploadBytes, ref } from "firebase/storage";
import { storage } from "../firebase";
import { BootstrapModal } from "./BootstrapModal";

export const Dashboard = () => {
  const {
    user,
    userImage,
    isUserImageUploaded,
    setIsUserImageUploaded,
    displayName,
  } = UserAuth();
  const [currentProgress, setCurrentProgress] = useState(0);
  const [profileImageRef, setProfileImageRef] = useState("");

  //to show new recipe form
  const [isClicked, setIsClicked] = useState(false);

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

  // const profileImageRef = ref(storage, `profile/${user.uid}/profile_photo`);

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

  return (
    <>
      {user !== null && profileImageRef !== "" ? (
        <Container>
          <section
            style={{
              maxWidth: "100%",
              marginBottom: 30,
            }}
          >
            {isUserImageUploaded ? (
              <BootstrapModal
                title={"Pomyślnie zmieniono zdjęcie"}
                progress={currentProgress}
              />
            ) : null}
            <h2 style={{ textAlign: "center" }}>Twój profil</h2>
            <DataWrapper>
              <img
                style={{
                  padding: 10,
                  width: 300,
                  height: 300,
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                src={userImage}
                alt="profile_image"
              />
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
                <p>Aktualnie nie dodałeś żadnego przepisu</p>
                <StyledLink to={'/add-recipe'}>{<FontAwesomeIcon icon={faPlus} />} Dodaj przepis</StyledLink>
              </DataWrapper>
              <DataWrapper>
                <h2>Polubione przepisy</h2>
                <p>Nie polubiłeś żadnego przepisu</p>
              </DataWrapper>
            </div>
          </section>
        </Container>
      ) : (
        <div
          style={{
            maxWidth: "100%",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner />
        </div>
      )}
    </>
  );
};
