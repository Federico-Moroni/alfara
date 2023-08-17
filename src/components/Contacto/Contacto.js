import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Contacto.scss'
import './ContactoMediaQuery.scss'

function Contacto() {
  return (
    <Container id='contacto' className='ContactoContainer container'>
        <Row>
            <Col className="ContactoCol">
                <div className="ContactoContainerInfo">
                    <div className="ContactoForm">
                        <div className="ContactoSideDiv"></div>
                        <div className="ContactoTextContainer">
                            <h6 className='FormTitle'>Contacto</h6>
                            <div className='FormSocial'>
                                <div className='FormSocialMedia'>
                                    <img className='FormSocialMediaImage' src='https://res.cloudinary.com/dqyirr5ik/image/upload/v1688575384/whatsap_g64csz.png'/>
                                    <a className='FormSocialMediaTag'>+5491157455174</a>
                                </div>
                                <div className='FormSocialMedia'>
                                    <img className='FormSocialMediaImage' src='https://res.cloudinary.com/dqyirr5ik/image/upload/v1688575384/Mail_maegwn.png'/>
                                    <a className='FormSocialMediaTag'>alfaraeventos@gmail.com</a>
                                </div>
                                <div className='FormSocialMedia'>
                                    <a href='https://instagram.com/alfara.eventos?igshid=MzRlODBiNWFlZA==' target='_blank'><img className='FormSocialMediaImage SocialMediaHover' src='https://res.cloudinary.com/dqyirr5ik/image/upload/v1688575384/instagram_agjdew.png'/></a>
                                    <a target='_blank' href='https://instagram.com/alfara.eventos?igshid=MzRlODBiNWFlZA==' className='FormSocialMediaTag'>alfara.eventos</a>
                                </div>
                                <div className='FormSocialMedia'>
                                    <a href='#' target='_blank'><img className='FormSocialMediaImage SocialMediaHover' src='https://res.cloudinary.com/dqyirr5ik/image/upload/v1688575384/tik_tok_hqcbpc.png'/></a>
                                    <a href='#' target='_blank' className='FormSocialMediaTag'>Tik Tok</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Contacto