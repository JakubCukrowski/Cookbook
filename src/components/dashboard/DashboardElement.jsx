import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { ElementContainer, ElementWrapper } from "./DashboardStyles";
import { OrangeButton } from "../../styles/OrangeButton";

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
            <OrangeButton onClick={onClick}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </OrangeButton>
          ) : null}
        </ElementWrapper>
      </ElementContainer>
    </>
  );
};
