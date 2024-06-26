import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { OrangeButton } from "../assets/styles/Buttons";
import {
  normalizedString,
  shortenTheName,
  startWithUpper,
} from "../helpers/helpers";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export const RecipeStructure = ({ recipe, onClick }) => {
  const { user } = UserAuth();
  return (
    <>
      <Grid sx={{ margin: "0 auto" }} item xs={12} sm={6} lg={4} xl={3}>
          <Card
            sx={{ backgroundColor: "rgb(247,247,247)", position: "relative" }}
          >
            {user && user.uid === recipe.addedBy.userId && (
              <div className="ribbon">Twój przepis</div>
            )}
            <CardMedia component="img" image={recipe.image} height={220} />
            <CardContent>
              <Typography variant="h5" sx={{ whiteSpace: "nowrap" }}>
                {shortenTheName(startWithUpper(recipe.name))}
              </Typography>
              <CardActionArea sx={{ margin: "10px 0" }}>
                <Link
                  to={`/${normalizedString(recipe.addedBy.user)}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    width: "auto",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Avatar src={recipe.addedBy.photo} />
                  <Typography variant="h7" sx={{ fontWeight: 600 }}>
                    {recipe.addedBy.user}
                  </Typography>
                </Link>
              </CardActionArea>
              <Box>
                <AccessTimeIcon />{" "}
                <Typography variant="span">
                  {recipe.preparationTime !== "90_and_more"
                    ? `${recipe.preparationTime} minut`
                    : "Ponad 90 minut"}
                </Typography>
              </Box>
              <Typography>
                Polubienia: <strong>{recipe.likedBy.length}</strong>
              </Typography>
            </CardContent>
            <CardContent>
              <OrangeButton onClick={onClick}>Przejdź do przepisu</OrangeButton>
            </CardContent>
          </Card>
      </Grid>
    </>
  );
};
