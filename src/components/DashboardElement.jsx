import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { updateProfile } from "firebase/auth";
import { UserAuth } from "../context/AuthContext";

export const DashboardElement = ({
  spanTitle,
  strongTitle,
  isButton,
  inputName,
}) => {
  const { user } = UserAuth();
  const [inputVisible, setInputVisible] = useState(false);

  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleEdit = () => {
    setInputVisible(true);
  };

  const handleUpdate = (e) => {
    if (inputName === "username") {
      setUsername(e.target.value);
    } else {
      setUserEmail(e.target.value);
    }
  };

  const handleUpdateButton = () => {
    if (inputName === "username") {
      updateProfile(user, {
        displayName: username,
      });
      setInputVisible(false)
    } else {
      updateProfile(user, {
        email: userEmail,
      });
      setInputVisible(false)
    }
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <span>{spanTitle}</span>
        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          {inputVisible ? (
            <input
              style={{ width: "70%" }}
              onChange={handleUpdate}
              value={inputName === "username" ? username : userEmail}
              type="text"
              name={inputName}
            />
          ) : (
            <strong>{strongTitle}</strong>
          )}
          {isButton ? (
            inputVisible ? (
              <Button onClick={handleUpdateButton}>
                {<FontAwesomeIcon icon={faCheck} />}
              </Button>
            ) : (
              <Button onClick={handleEdit}>
                <FontAwesomeIcon icon={faPenToSquare} />
              </Button>
            )
          ) : null}
        </div>
      </div>
    </>
  );
};
