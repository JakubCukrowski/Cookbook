import { useParams } from "react-router-dom"
import { Col, Row, Container, Spinner } from "react-bootstrap"
import { UserAuth } from "../context/AuthContext"
import { StyledImage } from "../styles/StyledImage"
import { StyledH2 } from "../styles/StyledH2"
import { SpinnerContainer } from "../styles/Containers"
import { LikeButton } from "../styles/CardStyles/LikeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const SingleRecipe = () => {
    const {recipes, isLoading, user} = UserAuth()
    const {recipeId} = useParams()
    const findRecipe = recipes.find(recipe => recipeId === recipe._id)
    
    return (
        <section style={{paddingTop: 80}}>
            {isLoading 
            ? <SpinnerContainer>
                <Spinner/> 
            </SpinnerContainer>
            : <Container>
                <Row>
                    <Col style={{textAlign: "center", padding: "20px 0"}}>
                        <h1>{findRecipe.name}</h1>
                    </Col>
                </Row>
                <Row style={{marginBottom: 30}}>
                    <Col style={{display: "flex", justifyContent: "center", position: "relative"}}>
                        <StyledImage rounded src={findRecipe.image}/>
                        {user 
                            ?   <LikeButton top="0" right="30px" rightTablet="180px" rightDesktop="200px" rightXl="220px">
                                    <FontAwesomeIcon icon={faHeart}/>
                                </LikeButton> : ''}
                    </Col>
                </Row>
                <Row style={{justifyContent: "center"}}>
                    <Col sm={5}>
                        <StyledH2>Składniki</StyledH2>
                        {findRecipe.ingredients.map((ingredient, index) => <p key={index}>{ingredient}</p>)}
                    </Col>
                    <Col sm={5}>
                        <StyledH2>Jak przygotować</StyledH2>
                        {Object.entries(findRecipe.steps).map((value, index) => 
                        <p key={index}>
                            {`${value[0]}.`}
                            <span> {value[1]}</span>
                        </p>)}
                    </Col>
                </Row>
            </Container>}
        </section>
    )
}