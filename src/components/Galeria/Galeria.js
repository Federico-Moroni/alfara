import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Galeria.scss'
import './GaleriaMediaQuery.scss'
import Slider from '../Slider/Slider'

const Galeria = () => {
    return(
        <Container id='galeria' fluid className='GaleriaContainer container'>
            <Row>
                <h3 className="GaleriaTitle">Galeria de fotos</h3>
                <Slider />
            </Row>
        </Container>
    )
}

export default Galeria;