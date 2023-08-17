import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ReactWhatsapp from "react-whatsapp";
import './Hero.scss'
import './HeroMediaQuery.scss'

const Hero = () => {
    return(
        <Container id='hero' fluid className='HeroContainer container'>
            <Row>
                <Col className='HeroCol'>
                    <h1 className="HeroHeader HeroHeader1">Alfara</h1>
                    <h2 className="HeroHeader HeroHeader2">Eventos</h2>
                    <div className='HeroMain'></div>
                    <ReactWhatsapp className="HeroButtonWhatsapp" number='+5491157455174' message='Hola, quiero contactarme para solicitar un presupuesto de alquiler.'></ReactWhatsapp>
                </Col>
            </Row>
        </Container>
    )
}

export default Hero;