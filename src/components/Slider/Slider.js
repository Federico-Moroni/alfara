import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Slider.scss'
import './SliderMediaQuery.scss'
import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from 'react'
import images from '../../images'

const Slider = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);
    return(
        <Container fluid className="SliderContainer">
            <Row className="SliderRow">
                <Col className="SliderCol">
                    <motion.div ref={carousel} className="carousel" whileTap={{cursor:'grabbing'}}>
                        <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className="inner-carousel">
                            {images.map(image => {
                                return(
                                    <motion.div className="item" key={image}>
                                        <img className="itemImage" src={image} alt='imageCarousel'/>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    )
}

export default Slider;