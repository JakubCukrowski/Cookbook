import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StyledFooter } from "../styles/FooterStyles/StyledFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export const Footer = () => {

    return (
        <StyledFooter>
            <Container>
                <Row>
                    <Col>
                        <h4>Przepisowa pasja</h4>
                        <p style={{fontSize: 12}}>
                            Jedzenie to sztuka, która tworzy 
                            niepowtarzalne chwile pełne smaku i doznań kulinarnych.
                        </p>
                    </Col>
                    <Col>
                        <h4>Social media</h4>
                        <Link><FontAwesomeIcon icon={faFacebook}/></Link>
                        <Link><FontAwesomeIcon icon={faInstagram}/></Link>
                        <Link><FontAwesomeIcon icon={faTwitter}/></Link>
                    </Col>
                    <Col>
                        <h4>Kontakt</h4>
                    </Col>
                </Row>
            </Container>
        </StyledFooter>
    )
}