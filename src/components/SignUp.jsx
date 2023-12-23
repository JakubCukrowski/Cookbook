import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { FlexContainer } from '../styles/Containers';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faL } from "@fortawesome/free-solid-svg-icons";
import { StyledLink } from "../styles/StyledLink";
import { StyledForm } from "../styles/StyledForm";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { StyledSignSection } from "../styles/SignStyles/StyledSignSection";

export const SignUp = () => {
    const {createUser} = UserAuth()
    const navigate = useNavigate()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        repeatedPassword: ''
    })

    const [inputErrors, setInputErrors] = useState({
        displayName: false,
        email: false,
        password: false,
        repeatedPassword: false
    })

    //handle inputs, and reset errors
    const handleInputs = (e) => {
        const {name, value} = e.target

        setUserCredentials(prev => {
            return {
                ...prev,
                [name]: value
            }
        })

        if (name === 'displayName') {
            setInputErrors(prev => {
                return {
                    ...prev,
                    displayName: false
                }
            })
        }

        if (name === 'email') {
            setInputErrors(prev => {
                return {
                    ...prev,
                    email: false
                }
            })
        }

        if (name === 'password' || name === 'repeatedPassword') {
            setInputErrors(prev => {
                return {
                    ...prev,
                    password: false,
                    repeatedPassword: false
                }
            })
        }
    }

    //handle sumbit button + validation
    const handleSubmit = (e) => {
        e.preventDefault()

        if (userCredentials.displayName.length < 6) {
            setInputErrors(prev => {
                return {
                    ...prev,
                    displayName: true
                }
            })
        }
    }

    return (
        <StyledSignSection>
            <StyledLink color="white" style={{padding: 20}} to='/'><FontAwesomeIcon icon={faArrowLeft}/> Strona główna</StyledLink>
            <FlexContainer direction='column' align='center'>
                <h2 style={{color: "white", padding: 26}}>Zarejestruj się</h2>
                <span style={{margin: 10}}>Masz już konto? <StyledLink to='/signin'>Zaloguj się</StyledLink></span>
                    <StyledForm noValidate onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formGroupId">
                            <Form.Label>Nazwa użytkownika</Form.Label>
                            <Alert show={inputErrors.displayName} variant="danger">
                                Nazwa użytkownika jest za krótka. Nazwa musi posiadać minimalnie 6 znaków
                                </Alert> 
                            <Form.Control
                                autoComplete="off"
                                isInvalid={inputErrors.displayName}
                                isValid={userCredentials.displayName.length >= 6}
                                onChange={handleInputs} 
                                name="displayName" 
                                value={userCredentials.id} 
                                type="text" 
                                placeholder="Nazwa użytkownika" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email</Form.Label>
                            <Alert show={inputErrors.email} variant="danger">Email jest niepoprawny</Alert> 
                            <Form.Control
                                autoComplete="off"
                                isInvalid={inputErrors.email}
                                isValid={!inputErrors.email && userCredentials.email.match(emailRegex)}
                                onChange={handleInputs}  
                                name="email" 
                                value={userCredentials.email} 
                                type="email" 
                                placeholder="Twój email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Hasło</Form.Label>
                            <Alert show={inputErrors.password && userCredentials.password < 6} variant="danger">
                                Hasło jest za krótkie
                            </Alert>
                            <Alert show={
                                inputErrors.password 
                                && userCredentials.password !== userCredentials.repeatedPassword} variant="danger">
                                Hasła nie zgadzają się
                            </Alert>
                            <Form.Control
                                // isInvalid={inputErrors.password} 
                                // isValid={
                                //     userCredentials.password === userCredentials.repeatedPassword
                                //     && userCredentials.password.length >= 6
                                //     && userCredentials.repeatedPassword.length >= 6
                                // }
                                onChange={handleInputs} 
                                name="password" 
                                value={userCredentials.password} 
                                type="password" 
                                placeholder="Hasło" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupRepeatPassword">
                            <Form.Label>Powtórz hasło</Form.Label>
                            <Alert show={inputErrors.repeatedPassword} variant="danger">Hasła nie zgadzają się</Alert> 
                            <Form.Control 
                                // isInvalid={inputErrors.repeatedPassword}
                                // isValid={
                                //     userCredentials.password === userCredentials.repeatedPassword
                                //     && userCredentials.password.length >= 6
                                //     && userCredentials.repeatedPassword.length >= 6
                                // }
                                onChange={handleInputs} 
                                name="repeatedPassword" 
                                value={userCredentials.repeatedPassword} 
                                type="password" 
                                placeholder="Powtórz hasło" />
                        </Form.Group>
                        <Button variant="light" type="submit">
                            Utwórz
                        </Button>
                    </StyledForm>  
                </FlexContainer>    
        </StyledSignSection>
    )
}