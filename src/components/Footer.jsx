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
                    <Col style={{textAlign: "center"}}>
                        <h4>Przepisowa pasja</h4>
                        <p style={{fontSize: 12}}>
                            Zainspiruj się
                        </p>
                    </Col>
                    <Col style={{textAlign: "center"}}>
                        <h4>Social media</h4>
                        <div style={{display: "flex", justifyContent: "center", gap: 16}}>
                            <Link><FontAwesomeIcon icon={faFacebook} size="2xl"/></Link>
                            <Link><FontAwesomeIcon icon={faInstagram} size="2xl"/></Link>
                            <Link><FontAwesomeIcon icon={faTwitter} size="2xl"/></Link>
                        </div>
                    </Col>
                    <Col style={{textAlign: "center"}}>
                        <h4>Support</h4>
                        <p>Telefon: 600-400-200</p>
                        <p>email: support@example.com</p>
                    </Col>
                </Row>
            </Container>
        </StyledFooter>
    )
}