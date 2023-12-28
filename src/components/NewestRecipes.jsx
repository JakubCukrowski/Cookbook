import React from "react";
import {Button, CardBody, Container, Placeholder, Spinner } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { StyledCol } from "../styles/CardStyles/StyledCol";
import { StyledCard } from "../styles/CardStyles/StyledCard";
import { StyledCardImg } from "../styles/CardStyles/StyledCardImg";
import { FakeSpinnerContainer, FlexContainer } from "../styles/Containers";
import { UserAuth } from "../context/AuthContext";
import { StyledLink } from "../styles/StyledLink";
import { LikeButton } from "../styles/CardStyles/LikeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const NewestRecipes = () => {
    const {recipes, isLoading, user} = UserAuth()
    const checkDate = (date) => {
        return new Date(date)
    }
    
    const sorted = [...recipes].sort((a, b) => checkDate(b.createdAt) - checkDate(a.createdAt))
       
    return (
        <Container>
            <h2 style={{textAlign: "center", padding: 60}}>Najnowsze przepisy</h2>
            <Row xs={1} md={2} className="g-4" style={{paddingBottom: 20}}>
                {sorted.splice(0, 4).map((recipe, idx) => (
                    <StyledCol key={recipe._id || idx}>
                        {isLoading
                        ? <>
                            <StyledCard>
                                <FakeSpinnerContainer>
                                    <Spinner />
                                </FakeSpinnerContainer>
                                <CardBody>
                                    <Placeholder as={Card.Title} animation="glow">
                                        <Placeholder xs={9} />
                                    </Placeholder>
                                    <Placeholder as={Card.Text} animation="glow">
                                        <Placeholder xs={6} />
                                    </Placeholder>
                                </CardBody>                            
                            </StyledCard>
                        </>
                        :   <>
                                {/* StyledCardWrapper */}
                                <div style={{position: "relative", height: '100%'}}> 
                                    {user 
                                        ?   <LikeButton top="0" right="14px">
                                                <FontAwesomeIcon icon={faHeart}/>
                                            </LikeButton> : ''}
                                    <StyledLink to={`/recipes/${recipe._id}`}>
                                        <StyledCard>
                                            
                                            <StyledCardImg variant="top" src={recipe.image} />
                                            <Card.Body>
                                            <Card.Title>{recipe.name}</Card.Title>
                                            <Card.Text>
                                                {`Liczba polubień: ${recipe.likes}`}
                                            </Card.Text>
                                            </Card.Body>
                                        </StyledCard>
                                    </StyledLink>
                                </div>
                            </>}
                    </StyledCol>   
                ))}
            </Row>
            <FlexContainer justify="center">
                <Button variant="dark">Zobacz więcej</Button>
            </FlexContainer>
        </Container>
    )
}