import React from 'react';
import styled from 'styled-components';
import ImgSlider from '../Component/ImgSlider.jsx';
import Viewers from '../Component/Viewers.jsx';
import homeBackground from '../Assets/images/home-background.png';

const Container = styled.main`
    min-height: calc(100vh  - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    
    &:before {
        background: url(${homeBackground}) center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`;

function Home() {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
        </Container>
    )
}

export default Home
