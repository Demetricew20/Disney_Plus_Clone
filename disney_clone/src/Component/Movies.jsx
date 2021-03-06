import React from 'react';
import styled from 'styled-components';
import { selectMovies } from '../features/movie/MovieSlice';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const Container = styled.div`

`;

const Content = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(0, 1fr));
grid-gap: 25px;

`;

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
function Movies() {

    const movies = useSelector(selectMovies);


    return (
        <Container>
            <h4>Recommended For You</h4>
            <Content>
                {movies && movies.map((movie) => (
                    (
                        <Wrap key={movie.id}>
                            <Link to={`/detail/${movie.id}`}>
                            <img src={movie.cardImg} alt="Card Image" />
                            </Link>
                            
                        </Wrap>
                    )
                ))}
            </Content>
        </Container>
    )
}

export default Movies
