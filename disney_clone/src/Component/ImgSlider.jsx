import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderBadging from '../Assets/images/slider-badging.jpg';
import sliderBadag from '../Assets/images/slider-badag.jpg';
import sliderScale from '../Assets/images/slider-scale.jpg';
import sliderWV from '../Assets/images/slider-scales.jpg';

const Carousel = styled(Slider)`
    margin-top: 10px;

    ul li button {
        &:before: {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    // .slick-prev:before, .slick-next:before {
    //     color: transparent;
    // }

    // .slick-dots li button:before {
    //     color: #0487A5;
    // }

    .slick-dots li button:before {
        color: #0487A5;
    }

    .slick-prev:before, .slick-next:before{
        display: none;
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button{
        z-index: 1;
    }
`;

const Wrap = styled.div`
    cursor: pointer;

    img {
        border: 4px solid transparent;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb( 0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 500ms;

        &:hover {
            border: 4px solid rgb(249, 249, 249, .8);
        }
    }
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
                <img src={sliderBadging} alt="Series " />
            </Wrap>
            <Wrap>
                <img src={sliderBadag} alt="Movie " />
            </Wrap>
            <Wrap>
                <img src={sliderScale} alt="Series " />
            </Wrap>
            <Wrap>
                <img src={sliderWV} alt="Series " />
            </Wrap>
            
        </Carousel>
    )
}

export default ImgSlider
