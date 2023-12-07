import { useParams } from "react-router-dom"
import { Col, Row, Container, Image, Spinner } from "react-bootstrap"
import { UserAuth } from "../context/AuthContext"

export const SingleRecipe = () => {
    const {recipes, isLoading} = UserAuth()
    const {recipeId} = useParams()
    const findRecipe = recipes.find(recipe => recipeId === recipe._id)
    
    return (
        <section style={{width: "100%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", marginTop: 90}}>
            {!isLoading 
            ? <Spinner/> 
            : <Container>
                <Row>
                    <Col sm={8}><Image style={{width: "100%", height: 300}} rounded src={findRecipe.image}/></Col>
                    <Col sm={4}>
                        <p>Jak przygotować</p>
                        {Object.entries(findRecipe.steps).map((value, index) => <p key={index}>{`${value[0]}.`}<span> {value[1]}</span></p>)}
                        </Col>
                </Row>
                <Row>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                </Row>
            </Container>}
        </section>
    )
}