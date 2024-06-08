import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import {
  StyledBox,
  StyledUserDetailsBox,
  UserInteractionsBox,
  UtilityButtonsBox,
} from "../../assets/styles/DashboardStyles";
import { OrangeButton } from "../../assets/styles/Buttons";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const UserDetails = ({
  avatarSrc,
  userName,
  followersCount,
  recipesCount,
  addNewRecipe,
  created,
}) => {
  return (
    <>
      <Box
        sx={{
          borderRadius: "10px",
          padding: "40px",
          boxShadow: "0 0 6px 2px #e19f2540",
        }}
      >
        <Grid container columnSpacing={14}>
          <Grid item xs={6}>
            <StyledBox>
              <Avatar
                sx={{ width: "220px", height: "220px" }}
                alt="user_photo"
                src={avatarSrc}
              />
              <StyledUserDetailsBox>
                <Typography variant="h3">
                  <strong>{userName}</strong>
                </Typography>
                <Typography variant="span">
                  {followersCount} Obserwuje
                </Typography>
                <Typography>Konto założone {created}</Typography>
              </StyledUserDetailsBox>
            </StyledBox>
          </Grid>
          <Grid container item xs={12} sm={6}>
            <Grid item xs={7} sm={12}>
              <UserInteractionsBox>
                <Typography sx={{ display: "inline-block" }}>
                  Dodane przepisy: <strong>{recipesCount}</strong>
                </Typography>{" "}
                <Typography sx={{ display: "inline-block" }}>
                  Polubione przepisy: <strong>2</strong>
                </Typography>{" "}
                <Typography sx={{ display: "inline-block" }}>
                  Obserwujesz: <strong>2</strong>
                </Typography>{" "}
              </UserInteractionsBox>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex" }}>
              <UtilityButtonsBox>
                <OrangeButton>Edytuj profil</OrangeButton>
                <OrangeButton onClick={addNewRecipe}>
                  <AddCircleIcon /> Nowy przepis
                </OrangeButton>
              </UtilityButtonsBox>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default UserDetails;
