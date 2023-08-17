import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Catalogo.scss'
import './CatalogoMediaQuery.scss'

const Catalogo = () => {
    return(
        <Container id='catalogo' fluid className='catalogoContainer container'>
            <Row className="catalogoRow">
                <Col className="catalogoCol">
                    <h4 className="catalogoTitle"><span className="CatalagoDescargaSpan">Descarga </span><span className="CatalagoNuestroSpan">nuestro </span>catálogo</h4>
                    <a className="catalogoDescarga">Catálogo</a>
                    <div className="catalogoBackground"></div>
                </Col>
            </Row>
        </Container>
    )
}

export default Catalogo;
