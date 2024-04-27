import React, { useEffect, useState } from "react";
// import { UserAuth } from "../../context/AuthContext";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../../firebase";
import { OrangeButton } from "../../styles/OrangeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FlexContainer } from "../../styles/Containers";
import { Container } from "react-bootstrap";
import { NotificationDiv, NotificationLink } from "./NavbarStyles";

export const Notifications = ({ hideNotifications, notifications }) => {
  const readNotification = (index) => {
    
  }

  return (
    <>
      <FlexContainer justify="space-between" align="center">
        <h3 style={{ margin: 0 }}>Powiadomienia</h3>
        <OrangeButton onClick={hideNotifications}>
          <FontAwesomeIcon icon={faXmark} />
        </OrangeButton>
      </FlexContainer>
      <Container>
        {notifications &&
          notifications.map((notification, index) => {
            return (
              <NotificationLink onClick={() => readNotification(index)} key={index} className={notification.read ? "" : "unread"}>
                <NotificationDiv
                  style={{ marginTop: 20 }}
                  className={notification.read ? "" : "unread"}
                >
                  Użytkownik <strong>{notification.addedBy}</strong> dodał przepis{" "}
                  {notification.recipeName}
                </NotificationDiv>
              </NotificationLink>
            );
          })}
      </Container>
    </>
  );
};
