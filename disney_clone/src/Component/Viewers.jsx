import React from 'react';
import styled from 'styled-components';
import viewersDisney from '../Assets/images/viewers-disney.png';
import viewersPixar from '../Assets/images/viewers-pixar.png';
import viewersMarvel from '../Assets/images/viewers-marvel.png';
import viewersStarWars from '../Assets/images/viewers-starwars.png';
import viewersNational from '../Assets/images/viewers-national.png';

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 25px;
    padding: 30px 0 26px;

`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb( 0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: rgb(0 0 0 /80%) 0 40px 58px -16px,
        rgb( 0 0 0 /72%) 0 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`



function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src={viewersDisney} alt="Disney view" />
            </Wrap>
            <Wrap>
                <img src={viewersPixar} alt="Pixar view" />
            </Wrap>
            <Wrap>
                <img src={viewersMarvel} alt="Marvel view" />
            </Wrap>
            <Wrap>
                <img src={viewersStarWars} alt="Star Wars view" />
            </Wrap>
            <Wrap>
                <img src={viewersNational} alt="National Geo view" />
            </Wrap>
        </Container>
    )
}

export default Viewers
