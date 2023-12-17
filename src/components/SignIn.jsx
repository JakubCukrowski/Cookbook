import React from "react";
import { Form, Button } from "react-bootstrap";
import { FlexContainer } from '../styles/Containers';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { StyledLink } from "../styles/StyledLink";
import { StyledForm } from "../styles/StyledForm";

export const SignIn = () => {
    return (
        <section style={{color: "white", backgroundColor: 'rgb(33, 37, 41)', maxWidth: "100%", minHeight: "100vh", display: "flex", flexDirection: "column"}}>
            <StyledLink color="white" style={{padding: 20}} to='/'><FontAwesomeIcon icon={faArrowLeft}/> Strona główna</StyledLink>
            <FlexContainer direction='column' align='center'>
                <h2 style={{color: "white", padding: 26}}>Zaloguj się</h2>
                <span style={{margin: 10}}>Nie masz konta? <StyledLink to='/signup'>Zarejestruj się</StyledLink></span>
                    <StyledForm>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Twój email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Hasło</Form.Label>
                            <Form.Control type="password" placeholder="Hasło" />
                        </Form.Group>
                        <Button variant="light" type="submit">
                            Potwierdź
                        </Button>
                    </StyledForm>  
                </FlexContainer>    
        </section>
    )
}