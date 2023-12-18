import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FlexContainer } from '../styles/Containers';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { StyledLink } from "../styles/StyledLink";
import { StyledForm } from "../styles/StyledForm";
import { UserAuth } from "../context/AuthContext";
import { auth } from "../firebase";

export const SignUp = () => {
    const {createUser} = UserAuth()
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        repeatedPassword: ''
    })

    const submitUserCredentials = (e) => {
        e.preventDefault()
        try {
            if (userCredentials.password === userCredentials.repeatedPassword) {
                createUser(userCredentials.displayName, userCredentials.email, userCredentials.password)
            }
        } catch (error) {
            console.log(error);
        }

        console.log(auth.createUser);
    }

    const handleUserCredentials = (e) => {
        const {name, value} = e.target
        setUserCredentials(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <section style={{color: "white", backgroundColor: 'rgb(33, 37, 41)', maxWidth: "100%", minHeight: "100vh", display: "flex", flexDirection: "column"}}>
            <StyledLink color="white" style={{padding: 20}} to='/'><FontAwesomeIcon icon={faArrowLeft}/> Strona główna</StyledLink>
            <FlexContainer direction='column' align='center'>
                <h2 style={{color: "white", padding: 26}}>Zarejestruj się</h2>
                <span style={{margin: 10}}>Masz już konto? <StyledLink to='/signin'>Zaloguj się</StyledLink></span>
                    <StyledForm onSubmit={submitUserCredentials}>
                        <Form.Group className="mb-3" controlId="formGroupId">
                            <Form.Label>Nazwa użytkownika</Form.Label>
                            <Form.Control 
                                onChange={handleUserCredentials} 
                                name="displayName" 
                                value={userCredentials.id} 
                                type="text" 
                                placeholder="Nazwa użytkownika" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                onChange={handleUserCredentials} 
                                name="email" 
                                value={userCredentials.email} 
                                type="email" 
                                placeholder="Twój email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Hasło</Form.Label>
                            <Form.Control 
                                onChange={handleUserCredentials} 
                                name="password" 
                                value={userCredentials.password} 
                                type="password" 
                                placeholder="Hasło" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupRepeatPassword">
                            <Form.Label>Powtórz hasło</Form.Label>
                            <Form.Control 
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