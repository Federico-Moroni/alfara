import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Nosotros.scss'
import './NosotrosMediaQuery.scss'

const Nosotros = () => {
    return(
        <Container id='nosotros' className='NosotrosContainer container'>
            <Row>
                <Col className='NosotrosCol'>
                    <div className="NosotrosGreyRectangle">
                        <div className="NosotrosGreyRectangleText">
                            <h3 className="NosotrosTitle">Nosotros</h3>
                            <p className="NosotrosText">Hola! Somos Fede & Tula, dos emprendedores que quieren acompañarte en tus celebraciones, haciendo que tus eventos brillen con nuestro mobiliario comodo y canchero, trabajando con dedicación, responsabilidad y compromiso. <br/><br/>La vida hay que celebrarla!</p>
                            <p className="NosotrosSignature">Natalia & Federico</p>
                        </div>
                    </div>
                    <div className="NosotrosBackgroundImage">
                        <div className="NosotrosImage">
                            <div className="NosotrosImageOffsetBorder"></div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Nosotros;