import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { FlexContainer } from '../styles/Containers';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { StyledLink } from "../styles/StyledLink";
import { StyledForm } from "../styles/StyledForm";
import { UserAuth } from "../context/AuthContext";
import { auth } from "../firebase";

export const SignUp = () => {
    const {createUser} = UserAuth()
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

    //handle form submit
    const submitUserCredentials = (e) => {
        e.preventDefault()

        if (userCredentials.displayName.length < 6) {
            setInputErrors(prev => {
                return {
                    ...prev,
                    displayName: true
                }
            })
        }

        if (!userCredentials.email.match(emailRegex)) {
            setInputErrors(prev => {
                return {
                    ...prev,
                    email: true
                }
            })
        }

        if (userCredentials.password.length < 6) {
            setInputErrors(prev => {
                return {
                    ...prev,
                    password: true
                }
            })
        }

        if (userCredentials.repeatedPassword !== userCredentials.password) {
            setInputErrors(prev => {
                return {
                    ...prev,
                    password: true,
                    repeatedPassword: true
                }
            })
        }

        if (!inputErrors.displayName && !inputErrors.email && !inputErrors.password && !inputErrors.repeatedPassword) {
            createUser(userCredentials.displayName, userCredentials.email, userCredentials.password)
        }
    }

    const handleUserCredentials = (e) => {
        const {name, value} = e.target
        setUserCredentials(prev => {
            return {
                ...prev,
                [name]: value
            }
        })

        //conditions to remove errors
        if (userCredentials.displayName.length >= 5) {
            setInputErrors(prev => {
                return {
                    ...prev,
                    displayName: false
                }
            })
        } 

        if (userCredentials.email.match(emailRegex)) {
            setInputErrors(prev => {
                return {
                    ...prev,
                    email: false
                }
            })
        }

        if (userCredentials.password.length >= 5) {
            setInputErrors(prev => {
                return {
                    ...prev,
                    password: false
                }
            })
        }

        if (userCredentials.repeatedPassword === userCredentials.password) {
            setInputErrors(prev => {
                return {
                    ...prev,
                    repeatedPassword: false
                }
            })
        }
    }

    return (
        <section style={{color: "white", backgroundColor: 'rgb(33, 37, 41)', maxWidth: "100%", minHeight: "100vh", display: "flex", flexDirection: "column"}}>
            <StyledLink color="white" style={{padding: 20}} to='/'><FontAwesomeIcon icon={faArrowLeft}/> Strona główna</StyledLink>
            <FlexContainer direction='column' align='center'>
                <h2 style={{color: "white", padding: 26}}>Zarejestruj się</h2>
                <span style={{margin: 10}}>Masz już konto? <StyledLink to='/signin'>Zaloguj się</StyledLink></span>
                    <StyledForm noValidate onSubmit={submitUserCredentials}>
                        <Form.Group className="mb-3" controlId="formGroupId">
                            <Form.Label>Nazwa użytkownika</Form.Label>
                            <Alert show={inputErrors.displayName} variant="danger">Nazwa użytkownika jest za krótka</Alert> 
                            <Form.Control
                                autoComplete="off"
                                isInvalid={inputErrors.displayName}
                                isValid={!inputErrors.displayName && userCredentials.displayName.length >= 6}
                                onChange={handleUserCredentials} 
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
                                onChange={handleUserCredentials} 
                                name="email" 
                                value={userCredentials.email} 
                                type="email" 
                                placeholder="Twój email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Hasło</Form.Label>
                            <Alert show={inputErrors.password} variant="danger">Hasło jest za krótkie</Alert>
                            <Form.Control
                                isInvalid={inputErrors.password} 
                                isValid={
                                    userCredentials.password === userCredentials.repeatedPassword
                                    && userCredentials.password.length >= 6
                                    && userCredentials.repeatedPassword.length >= 6
                                }
                                onChange={handleUserCredentials} 
                                name="password" 
                                value={userCredentials.password} 
                                type="password" 
                                placeholder="Hasło" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupRepeatPassword">
                            <Form.Label>Powtórz hasło</Form.Label>
                            <Alert show={inputErrors.repeatedPassword} variant="danger">Hasła nie zgadzają się</Alert> 
                            <Form.Control 
                                isInvalid={inputErrors.repeatedPassword}
                                isValid={
                                    userCredentials.password === userCredentials.repeatedPassword
                                    && userCredentials.password.length >= 6
                                    && userCredentials.repeatedPassword.length >= 6
                                }
                                onChange={handleUserCredentials} 
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
        </section>
    )
}