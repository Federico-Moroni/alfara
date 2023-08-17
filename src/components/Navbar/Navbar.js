import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './NavbarMediaQuery.scss'
import './Navbar.scss'
import {BrowserRouter} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Navbar = () => {
    return(
        <BrowserRouter>
            <Container fluid className='NavbarContainer container'>
                <Row className='NavbarRow'>
                    <Col className='NavbarColumn'>
                        <ul className='NavbarUl'>
                            <Link to='#hero' smooth className='NavbarLi'><a className='NavbarLiA'>Inicio</a></Link>
                            <Link to='#nosotros' smooth className='NavbarLi'><a className='NavbarLiA'>Nosotros</a></Link>
                            <Link to='#catalogo' smooth className='NavbarLi'><a className='NavbarLiA'>Catálogo</a></Link>
                            <Link to='#galeria' smooth className='NavbarLi'><a className='NavbarLiA'>Galeria</a></Link>
                            <Link to='#contacto' smooth className='NavbarLi'><a className='NavbarLiA'>Contacto</a></Link>
                        </ul>
                    </Col>
                    <label className='BurgerMenuLabel'> <BurgerMenu/> </label>
                </Row>
            </Container>
        </BrowserRouter>
    )
}

export default Navbar;