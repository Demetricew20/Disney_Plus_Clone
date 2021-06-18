import React from 'react';
import styled from 'styled-components';
import logoImg from '../Assets/images/logo.svg';
import homeIcon from '../Assets/images/home-icon.svg';
import searchIcon from '../Assets/images/search-icon.svg';
import watchlistIcon from '../Assets/images/watchlist-icon.svg';
import originalsIcon from '../Assets/images/original-icon.svg';
import moviesIcon from '../Assets/images/movie-icon.svg';
import seriesIcon from '../Assets/images/series-icon.svg';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Nav = styled.div`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`;

const Logo = styled.img`
    width: 80px;
`;

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    justify-content: space-around;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        text-decoration: none;
        color: white;

        img{
            height: 20px;
        }

        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content: '';
                height: 2px;
                background-color: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transition-origin: left center;
                transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`;

const UserImg = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

function Header() {
    return (
        <Nav>
            <Logo src={logoImg} alt="Disney Logo" />
            <NavMenu>
                <a href="/">
                    <img src={homeIcon} alt="Home Icon" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src={searchIcon} alt="Search Icon" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src={watchlistIcon} alt="Watchlist Icon" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src={originalsIcon} alt="Originals Icon" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src={moviesIcon} alt="Movies Icon" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src={seriesIcon} alt="Series Icon" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg > <AccountCircleIcon style={{fontSize: '3.5rem'}}/> </UserImg>


        </Nav>
    )
}

export default Header