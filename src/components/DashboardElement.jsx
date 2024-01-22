import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { updateEmail, updateProfile } from "firebase/auth";
import { UserAuth } from "../context/AuthContext";

export const DashboardElement = ({
  spanTitle,
  strongTitle,
  isButton,
  inputName,
}) => {
  const { user, setDisplayName } = UserAuth();
  const [inputVisible, setInputVisible] = useState(false);

  //states when changing user data
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");

  //replaces user credentials with inputs to change them
  const handleEdit = () => {
    setInputVisible(true);
  };

  // handles states
  const handleUpdate = (e) => {
    if (inputName === "username") {
      setUsername(e.target.value);
    } else {
      setUserEmail(e.target.value);
    }
  };

  //after confirmation button clicked
  const handleUpdateButton = () => {
    if (inputName === "username") {
      updateProfile(user, {
        displayName: username,
      });
      setInputVisible(false)
      setDisplayName(username)
    } else {
      updateEmail(user, userEmail);
      setInputVisible(false)
    }
  };

  useEffect(() => {
    
  })

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
