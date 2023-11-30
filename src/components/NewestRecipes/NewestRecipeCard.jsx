import React from "react";
import { Card } from "react-bootstrap";

export const NewestRecipeCard = ({cardText, cardTitle, cardImage}) => {

    return (
        <>
            <Card>
                <Card.Img variant="top" src={cardImage} />
                <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>
                    {cardText}
                </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}