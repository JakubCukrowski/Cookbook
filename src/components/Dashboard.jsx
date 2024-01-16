import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Container, Spinner, Button } from "react-bootstrap";
import anonImage from "../images/anon-chef1.png";
import { DataWrapper } from "../styles/DashboardStyles/DataWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { DashboardElement } from "./DashboardElement";
import { StyledLink } from "../styles/StyledLink";
import { DashboardLikedRecipes } from "./DashboardLikedRecipes";

export const Dashboard = () => {
  const { user, likedRecipes } = UserAuth();

  return (
    <>
      {user !== null ? (
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
                style={{ padding: 10 }}
                src={anonImage}
                alt="profile_image"
              />
              <Container>
                <label style={{ cursor: "pointer" }} htmlFor="addFile">
                  <FontAwesomeIcon icon={faPenToSquare} /> Zmień zdjęcie
                </label>
                <input
                  type="file"
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
