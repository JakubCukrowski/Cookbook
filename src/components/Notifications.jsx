import React from "react";
import { OrangeButton } from "../assets/styles/Buttons";
import {
  NotificationDiv,
  NotificationLink,
} from "../assets/styles/NavbarStyles";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { normalizedString } from "../helpers/helpers";
import CloseIcon from '@mui/icons-material/Close';
import { Container } from "@mui/material";

export const Notifications = ({
  hideNotifications,
  notifications,
  updateNotifications,
  userData,
}) => {
  const { user } = UserAuth();

  const readNotification = async (index) => {
    const newUserData = userData;
    //new notifications which have to be sorted
    const sortedNotifications = newUserData.notifications.sort(
      (a, b) => b.addDate - a.addDate
    );
    sortedNotifications[index].read = true;
    newUserData.notifications = sortedNotifications;
    await updateDoc(doc(db, "users", user.uid), {
      notifications: newUserData.notifications,
    });
    updateNotifications(newUserData.notifications);
    hideNotifications();
  };

  return (
    <>
      <Container style={{marginTop: 20}} justify="space-between" align="center">
        <h3 style={{ margin: 0 }}>Powiadomienia</h3>
        <OrangeButton onClick={hideNotifications}>
          <CloseIcon />
        </OrangeButton>
      </Container>
      <Container>
        {notifications.length === 0 && <p>Brak powiadomień</p>}
        {notifications &&
          notifications.map((notification, index) => {
            return (
              <NotificationDiv
                key={index}
                className={notification.read ? "" : "unread"}
              >
                <NotificationLink
                  onClick={() => readNotification(index)}
                  to={
                    notification.type === "newRecipe"
                      ? `/recipes/${notification.recipeId}`
                      : `/${normalizedString(notification.likedBy)}`
                  }
                >
                  {notification.type === "newRecipe" ? (
                    <>
                      Użytkownik <strong>{notification.addedBy}</strong> dodał
                      przepis {notification.recipeName}
                    </>
                  ) : (
                    <>
                      Użytkownik <strong>{notification.likedBy}</strong> polubił
                      Twój przepis{" "}
                      <strong>{notification.likedRecipeName}</strong>
                    </>
                  )}
                </NotificationLink>
              </NotificationDiv>
            );
          })}
      </Container>
    </>
  );
};
