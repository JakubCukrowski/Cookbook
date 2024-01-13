import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Container, Spinner, Button } from "react-bootstrap";
import anonImage from "../images/anon-chef1.png";
import { DataWrapper } from "../styles/DashboardStyles/DataWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { DashboardElement } from "./DashboardElement";

export const Dashboard = () => {
  const { user } = UserAuth();

  return (
    <>
      {user !== null ? (
        <section style={{ maxWidth: "100%" }}>
          <Container>
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
                <DashboardElement spanTitle={'Nazwa użytkownika: '} strongTitle={user.displayName} isButton={true}/>
                <DashboardElement spanTitle={'Email: '} strongTitle={user.email} isButton={true}/>
                <DashboardElement spanTitle={'Hasło'} strongTitle={'Zmień hasło'}/>
              </Container>
            </DataWrapper>
            <div>
              <DataWrapper>
                <h2>Twoje przepisy</h2>
                <p>Aktualnie nie dodałeś żadnego przepisu</p>
              </DataWrapper>
              <DataWrapper>
                <h2>Polubione przepisy</h2>
                <p>Brak polubionych przepisów</p>
              </DataWrapper>
            </div>
          </Container>
        </section>
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
