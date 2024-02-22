import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

export const Tags = ({updateRecipeTags, newRecipeDetails, updateTagsArray}) => {
  const tags = [
    "kuchnia polska",
    "dania główne",
    "kurczak",
    "wołowina",
    "śniadania",
    "kolacje",
    "mięso",
    "ryba",
    "gulasz",
    "kuchnia węgierska",
    "kuchnia chińska",
    "przekąski",
    "napoje",
    "burgery",
    "zupy",
    "desery",
    "indyk",
    "makarony",
    "kuchnia amerykańska",
    "kuchnia włoska",
    "kuchnia gruzińska",
    "owoce morza",
    "kuchnia tradycyjna",
    "kuchnia meksykańska",
    "kuchnia indyjska",
  ];

  const splitTags = [];

  for (let i = 0; i < tags.length; i += 3) {
    splitTags.push(tags.slice(i, i + 3));
  }

  const handleOnChange = (e) => {
    if (e.target.checked) {
        updateRecipeTags(e.target.value)
    } else {
        const newTags = newRecipeDetails.tags
        const filteredTags = newTags.filter(tag => tag !== e.target.value)
        updateTagsArray(filteredTags)
    }
  }

  console.log(newRecipeDetails);

  return (
    <>
      <h4 style={{ textAlign: "center" }}>Dodaj tagi</h4>
      <Container>
        {splitTags.map((row, index) => {
          return (
            <Row key={`row-${index}`}>
              {row.map((col, colIndex) => {
                return (
                  <Col key={`col-${colIndex}`}>
                    <Form.Check
                      onChange={handleOnChange}
                      value={col}
                      type="checkbox"
                      id={`default-${col}-${colIndex}`}
                      label={col}
                    />
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </Container>
    </>
  );
};
