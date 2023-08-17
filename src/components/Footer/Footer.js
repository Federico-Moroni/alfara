import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.scss'
import './FooterMediaQuery.scss'
import {BrowserRouter} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'

const Footer = () => {
    return(
        <BrowserRouter>
            <Container fluid className='footerContainer container'>
                <Row>
                    <Col>
                        <h5 className="footerTitle">Alfara</h5>
                        <div className="footerUlContainer">
                            <ul className="footerUl">
                                <Link to='#hero' smooth className="footerLi">Inicio</Link>
                                <Link to='#nosotros' smooth className="footerLi">Nosotros</Link>
                                <Link to='#catalogo' smooth className="footerLi">Catálogo</Link>
                                <Link to='#galeria' smooth className="footerLi">Galeria</Link>
                                <Link to='#contacto' smooth className="footerLi">Contacto</Link>

                            </ul>
                        </div>
                        <p className="footerLocationParagraph">Buenos Aires | Argentina</p>
                        <div className="footerWings">
                            <img className="footerWingLeft footerWingGeneric" src="https://res.cloudinary.com/dqyirr5ik/image/upload/v1687961523/FooterLeftWing_wt3jxd.png" />
                            <img className="footerWingRight footerWingGeneric" src="https://res.cloudinary.com/dqyirr5ik/image/upload/v1687961523/FooterRigthWing_gt6sia.png" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    )
}

export default Footer;

