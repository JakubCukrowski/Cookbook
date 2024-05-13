import React from "react";
import { ElementContainer, ElementWrapper } from "../../assets/styles/DashboardStyles";
import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

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
            <IconButton onClick={onClick}>
              <EditIcon />
            </IconButton>
          ) : null}
        </ElementWrapper>
      </ElementContainer>
    </>
  );
};
