import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Container, Spinner, Button } from "react-bootstrap";
import anonImage from "../images/anon-chef1.png";
import { DataWrapper } from "../styles/DashboardStyles/DataWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { DashboardElement } from "./DashboardElement";
import { StyledLink } from "../styles/StyledLink";
import { DashboardLikedRecipes } from "./DashboardLikedRecipes";
import {
  getDownloadURL,
  uploadBytes,
  ref,
  getMetadata,
} from "firebase/storage";
import { storage } from "../firebase";

export const Dashboard = () => {
  const { user, likedRecipes, profileImagesRef, userImage, setUserImage } = UserAuth();

  //uploaded file
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  //basic image
  const basicImageRef = ref(storage, "profile/anon-chef1.png");
  const profileImageRef = ref(storage, `profile/${user.uid}/profile_photo`);

  useEffect(() => {
    try {
      getMetadata(profileImageRef)
        .then(() => {
          getDownloadURL(profileImageRef).then((url) => {
            console.log("Setting user image:", url);
            setUserImage(url);
          });
        })
        .catch((error) => {
          if (error.code === "storage/object-not-found") {
            getDownloadURL(basicImageRef).then((url) => {
              setUserImage(url);
              console.log(url);
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, [isFileUploaded]);

  const uploadPhoto = async (e) => {
    await uploadBytes(profileImagesRef, e.target.files[0]).then((snapshot) =>
      console.log(snapshot)
    );
    setIsFileUploaded(true)
  };

  return (
    <>
      {user !== null && userImage !== null ? (
        <Container>
          <section
            style={{
              maxWidth: "100%",
              marginBottom: 30,
            }}
          >
            <h2 style={{ textAlign: "center" }}>Twój profil</h2>
            <DataWrapper>
              <img
                style={{ padding: 10, width: 300, height: 300, borderRadius: "50%", objectFit: "cover" }}
                src={userImage ? userImage : anonImage}
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
                  strongTitle={user.displayName}
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
                <Button>{<FontAwesomeIcon icon={faPlus} />} Dodaj</Button>
              </DataWrapper>
              <DataWrapper>
                <h2>Polubione przepisy</h2>
                <div style={{ textAlign: "center" }}>
                  {likedRecipes.length > 0 ? (
                    likedRecipes.map((recipe, index) => {
                      return (
                        <DashboardLikedRecipes
                          key={index}
                          linkTo={recipe._id}
                          recipeName={recipe.name}
                          recipeImage={recipe.image}
                        />
                      );
                    })
                  ) : (
                    <p>Nie polubiłeś żadnego przepisu</p>
                  )}
                </div>
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
