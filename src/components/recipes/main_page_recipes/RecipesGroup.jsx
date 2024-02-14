// import React from "react";
// import {
//   Button,
//   CardBody,
//   Container,
//   Placeholder,
//   Spinner,
// } from "react-bootstrap";
// import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
// import { StyledCol } from "./StyledCol";
// import { StyledCard } from "./StyledCard";
// import { StyledCardImg } from "./StyledCardImg";
// import { FakeSpinnerContainer, FlexContainer } from "../../../styles/Containers";
// import { StyledLink } from "../../../styles/StyledLink";
// import { LikeButton } from "../../LikeButton";
// import { UserAuth } from "../../../context/AuthContext";
// import { StyledH2 } from "../../../styles/StyledH2";
// import { StyledCardWrapper } from "./StyledCardWrapper";

// export const RecipesGroup = ({
//   title,
//   array,
//   onClick,
//   marginBottom,
//   addButton,
//   sliceBy
// }) => {
//   const { isLoading } = UserAuth();

//   return (
//     <Container>
//       <StyledH2>{title}</StyledH2>
//       <Row xs={1} md={2} className="g-4" style={{ paddingBottom: 20 }}>
//         {array.slice(0, sliceBy).map((recipe, idx) => (
//           <StyledCol key={recipe.id || idx}>
//             {isLoading ? (
//               <>
//                 <StyledCard>
//                   <FakeSpinnerContainer>
//                     <Spinner />
//                   </FakeSpinnerContainer>
//                   <CardBody>
//                     <Placeholder as={Card.Title} animation="glow">
//                       <Placeholder xs={9} />
//                     </Placeholder>
//                     <Placeholder as={Card.Text} animation="glow">
//                       <Placeholder xs={6} />
//                     </Placeholder>
//                   </CardBody>
//                 </StyledCard>
//               </>
//             ) : (
//               <>
//                 <StyledCardWrapper>
//                   <StyledLink to={`/recipes/${recipe.id}`}>
//                     <StyledCard>
//                       <StyledCardImg variant="top" src={recipe.image} />
//                       <Card.Body>
//                         <Card.Title>{recipe.name}</Card.Title>
//                         <Card.Text>
//                           {`Liczba polubień: ${recipe.likes}`}
//                         </Card.Text>
//                       </Card.Body>
//                     </StyledCard>
//                   </StyledLink>
//                 </StyledCardWrapper>
//               </>
//             )}
//           </StyledCol>
//         ))}
//       </Row>
//       {addButton ? (
//         <FlexContainer justify="center">
//           <Button
//             style={{ marginBottom: marginBottom }}
//             onClick={onClick}
//             variant="dark"
//           >
//             Zobacz więcej
//           </Button>
//         </FlexContainer>
//       ) : null}
//     </Container>
//   );
// };

import React from "react";
import {
  Button,
  CardBody,
  Col,
  Container,
  Placeholder,
  Spinner,
} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { StyledCol } from "./StyledCol";
import { StyledCard } from "./StyledCard";
import { StyledCardImg } from "./StyledCardImg";
import {
  FakeSpinnerContainer,
  FlexContainer,
} from "../../../styles/Containers";
import { StyledLink } from "../../../styles/StyledLink";
import { LikeButton } from "../../LikeButton";
import { UserAuth } from "../../../context/AuthContext";
import { StyledH2 } from "../../../styles/StyledH2";
import { StyledCardWrapper } from "./StyledCardWrapper";
import { Link } from "react-router-dom";

export const RecipesGroup = ({
  title,
  array,
  onClick,
  marginBottom,
  addButton,
  sliceBy,
}) => {
  const { isLoading } = UserAuth();

  return (
    <Container>
      <StyledH2>{title}</StyledH2>
      <Row
        xs={1}
        sm={2}
        lg={2}
        xl={3}
        className="g-4"
        style={{ paddingBottom: 20 }}
      >
        {array.slice(0, sliceBy).map((recipe, idx) => (
          <StyledCol>
            <Link
              to={`/recipes/${recipe.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                style={{
                  boxShadow: "0 0 4px rgb(0, 0, 0)",
                  borderRadius: 8,
                  width: "80%",
                  height: 150,
                  padding: 20,
                  position: "relative",
                  backgroundColor: "white",
                }}
              >
                <h5>{recipe.name}</h5>
                <p>{recipe.preparationTime}</p>
                <p>
                  Polubienia: <strong>{recipe.likes}</strong>
                </p>
                <div
                  style={{
                    position: "absolute",
                    right: "-60px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <img
                    style={{ width: 120, height: 120, borderRadius: "50%" }}
                    src={recipe.image}
                    alt="recipe_image"
                  />
                </div>
              </div>
            </Link>
          </StyledCol>
        ))}
      </Row>
      {addButton ? (
        <FlexContainer justify="center">
          <Button
            style={{ marginBottom: marginBottom }}
            onClick={onClick}
            variant="dark"
          >
            Zobacz więcej
          </Button>
        </FlexContainer>
      ) : null}
    </Container>
  );
};
