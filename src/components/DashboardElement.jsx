import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export const DashboardElement = ({ spanTitle, strongTitle, isButton, onClick }) => {
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
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <strong>{strongTitle}</strong>
          {isButton ? (
            <Button onClick={onClick}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
          ) : null}
        </div>
      </div>
    </>
  );
};
