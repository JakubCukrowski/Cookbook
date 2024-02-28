import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { ElementContainer, ElementWrapper } from "./DashboardStyles";

export const DashboardElement = ({
  spanTitle,
  strongTitle,
  isButton,
  onClick,
}) => {
  return (
    <>
      <ElementContainer>
        <span>{spanTitle}</span>
        <ElementWrapper>
          <strong>{strongTitle}</strong>
          {isButton ? (
            <Button variant="dark" onClick={onClick}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
          ) : null}
        </ElementWrapper>
      </ElementContainer>
    </>
  );
};
