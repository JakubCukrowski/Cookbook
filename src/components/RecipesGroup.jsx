import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { OrangeButton } from "../assets/styles/OrangeButton";
import { Link } from "@mui/material";
import { shortenTheName, startWithUpper } from "../helpers/helpers";

export const RecipesGroup = ({
  array,
  onClick,
  marginBottom,
  addButton,
  sliceBy,
}) => {
  return (
    <>
      <Container maxWidth={"xl"}>
        <Grid sx={{ marginBottom: "20px" }} container spacing={4}>
          {array.slice(0, sliceBy).map((recipe, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box>
                <Card sx={{ backgroundColor: "rgb(247,247,247)" }}>
                  <CardHeader
                    avatar={
                      <Link
                        href={`/${recipe.addedBy.user}`
                          .normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "")
                          .toLowerCase()}
                      >
                        <Avatar
                          sx={{ height: 50, width: 50 }}
                          src={recipe.addedBy.photo}
                        />
                      </Link>
                    }
                    title={
                      <Link
                        sx={{
                          textDecoration: "none",
                          color: "black",
                          fontSize: 18,
                        }}
                        href={`/${recipe.addedBy.user}`
                          .normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "")
                          .toLowerCase()}
                      >
                        {recipe.addedBy.user}
                      </Link>
                    }
                  />
                  <CardMedia
                    component="img"
                    image={recipe.image}
                    height={220}
                  />
                  <CardContent>
                    <Typography variant="h6">
                      {shortenTheName(startWithUpper(recipe.name))}
                    </Typography>
                    <Typography>
                      <FontAwesomeIcon icon={faClock} />{" "}
                      {recipe.preparationTime}
                    </Typography>
                    <Typography>
                      Polubienia: <strong>{recipe.likedBy.length}</strong>
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Link href={`/recipes/${recipe.id}`}>
                      <OrangeButton>Przejdź do przepisu</OrangeButton>
                    </Link>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
        {addButton ? (
          <OrangeButton
            style={{
              marginBottom: marginBottom,
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
            onClick={onClick}
            variant="dark"
          >
            Zobacz więcej
          </OrangeButton>
        ) : null}
      </Container>
    </>
  );
};
