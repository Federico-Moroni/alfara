import React from 'react'
import Container from 'react-bootstrap/Container';
import {HashLink as Link} from 'react-router-hash-link'
import './BurgerMenu.scss'
import './BurgerMenuMediaQuery.scss'

const BurgerMenu = () => {
    return (
        <Container className='BurgerMenu'>
            <input type='checkbox' className='BurgerMenuCheckbox' id='toggle'></input>
            <label htmlFor='toggle' className='BurgerMenuButton'>
                <span className='BurgerMenuBars'>&nbsp;</span>
            </label>
            <nav className='BurgerMenuContent'>
                <ul className='BurgerMenuList '>
                    <li className='BurgerMenuLink'> <Link to='#hero' spy={true} smooth={true} offset={0} duration={600} className='NavBarLink'> Inicio </Link> </li>
                    <li className='BurgerMenuLink'> <Link to='#nosotros' spy={true} smooth={true} offset={0} duration={600} className='NavBarLink'> Nosotros </Link> </li>
                    <li className='BurgerMenuLink'> <Link to='#catalogo' spy={true} smooth={true} offset={0} duration={600} className='NavBarLink'> Catalogo </Link> </li>
                    <li className='BurgerMenuLink'> <Link to='#galeria' spy={true} smooth={true} offset={0} duration={600} className='NavBarLink'> Galeria</Link> </li>
                    <li className='BurgerMenuLink'> <Link to='#contacto' spy={true} smooth={true} offset={0} duration={600} className='NavBarLink'> Contacto</Link> </li>
                </ul>
            </nav>
        </Container>
    )
}

export default BurgerMenu;
                   
                   
                   
