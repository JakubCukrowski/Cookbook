import React from "react";
import { OrangeButton } from "../../styles/OrangeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FlexContainer } from "../../styles/Containers";
import { Container } from "react-bootstrap";
import { NotificationDiv, NotificationLink } from "./NavbarStyles";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { UserAuth } from "../../context/AuthContext";

export const Notifications = ({
  hideNotifications,
  notifications,
  userData,
}) => {
  const { user } = UserAuth();

  const readNotification = async (index) => {
    const newUserData = userData;
    newUserData.notifications[index].read = true;
    await updateDoc(doc(db, "users", user.uid), {
      notifications: newUserData.notifications,
    });
    return hideNotifications()
  };

  return (
    <>
      <FlexContainer justify="space-between" align="center">
        <h3 style={{ margin: 0 }}>Powiadomienia</h3>
        <OrangeButton onClick={hideNotifications}>
          <FontAwesomeIcon icon={faXmark} />
        </OrangeButton>
      </FlexContainer>
      <Container>
        {!notifications && <p>Brak powiadomień</p>}
        {notifications &&
          notifications.map((notification, index) => {
            return (
              <NotificationLink
                onClick={() => readNotification(index)}
                key={index}
                className={notification.read ? "" : "unread"}
                to={`/recipes/${notification.recipeId}`}
              >
                <NotificationDiv
                  style={{ marginTop: 20 }}
                  className={notification.read ? "" : "unread"}
                >
                  Użytkownik <strong>{notification.addedBy}</strong> dodał
                  przepis {notification.recipeName}
                </NotificationDiv>
              </NotificationLink>
            );
          })}
      </Container>
    </>
  );
};
