import React from 'react';
import styled from 'styled-components';
import playButton from '../Assets/images/play-icon-black.png';
import trailerButton from '../Assets/images/play-icon-white.png';
import groupWatchButton from '../Assets/images/group-icon.png';

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`;

const Background = styled.div`
    position: fixed;
    top: 0px;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: fixed;
    }
`;

const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    padding-top: 25px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

`;

const Controls = styled.div`
    margin-top: 15px;
    display: flex;
    align-items: center;

`;

const PlayButton = styled.button`
    height: 56px;
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    background-color: rgb(249, 249, 249);
    border: none;
    padding: 0 24px;
    margin-right: 22px;
    cursor: pointer;
    letter-spacing: 1.8px;

    &:hover {
        background: rgb(198, 198, 198)
    }
`;

const TrailerButton = styled(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;

    &:hover {
        background: rgb(0, 0, 0, 0.8);
    }
`;

const AddButton = styled.button`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        font-size: 30px;
        color: white;
    }

    &:hover {
        background: rgb(0, 0, 0, 0.8);
    }
`;

const GroupWatchButton = styled(AddButton)`

    color: white;

`;

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`;

const Description = styled.div`
    max-width: 700px;
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
`;

function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://www.awn.com/sites/default/files/styles/original/public/image/attached/1046782-bao-003-lr.jpg?itok=B0CkKSdI" />
            </Background>
            <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="Bao Title" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src={playButton} alt="Play Button" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                <img src={trailerButton} alt="Play Trailer Button" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                <img src={groupWatchButton} alt="Group Watch Button" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2018 - 7m - Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                A Chinese mom who's sad when her grown son leaves home gets another change at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
            </Description>
        </Container>
    )
}

export default Detail
