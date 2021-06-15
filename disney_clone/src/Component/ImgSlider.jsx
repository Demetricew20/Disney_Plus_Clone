import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderBadging from '../Assets/images/slider-badging.jpg';

const Carousel = styled(Slider)`

`;

const Wrap = styled.div`

`;


function ImgSlider() {

    let settings = {
        dots: true,
        Infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src={sliderBadging} alt="Series Image" />
            </Wrap>
            <Wrap>
                <img src={sliderBadging} alt="Series Image" />
            </Wrap>
            
        </Carousel>
    )
}

export default ImgSlider
