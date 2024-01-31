import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FlexContainer } from '../../styles/Containers';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { StyledLink } from "../../styles/StyledLink";
import { StyledForm } from "./StyledForm";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { StyledSignSection } from "./StyledSignSection";

export const SignIn = () => {
    const {login} = UserAuth()
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const handleInputs = (e) => {
        const {name, value} = e.target

        setUserData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            await login(userData.email, userData.password)
            navigate('/dashboard')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <StyledSignSection>
            <StyledLink color="white" style={{padding: 20}} to='/'><FontAwesomeIcon icon={faArrowLeft}/> Strona główna</StyledLink>
            <FlexContainer direction='column' align='center'>
                <h2 style={{color: "white", padding: 26}}>Zaloguj się</h2>
                <span style={{margin: 10}}>Nie masz konta? <StyledLink to='/signup'>Zarejestruj się</StyledLink></span>
                    <StyledForm>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                onChange={handleInputs} 
                                value={userData.email} 
                                name="email" 
                                type="email" 
                                placeholder="Twój email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Hasło</Form.Label>
                            <Form.Control 
                                onChange={handleInputs} 
                                value={userData.password} 
                                name="password" 
                                type="password" 
                                placeholder="Hasło" />
                        </Form.Group>
                        <Button onClick={handleLogin} variant="light" type="submit">
                            Potwierdź
                        </Button>
                    </StyledForm>  
                </FlexContainer>    
        </StyledSignSection>
    )
}