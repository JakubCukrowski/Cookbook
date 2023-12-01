import React from "react";
import { Card } from "react-bootstrap";

export const RecipeCard = ({cardText, cardTitle, cardImage}) => {

    return (
        <>
            <Card style={{boxShadow: '0 0 6px rgba(0, 0, 0, 0.7', borderRadius: 8, overflow: "hidden"}}>
                <Card.Img variant="top" src={cardImage} style={{height: 200}}/>
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