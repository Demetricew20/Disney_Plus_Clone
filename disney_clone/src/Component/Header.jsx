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
`;

const Logo = styled.img`
    width: 80px;
`;

const NavMenu = styled.div`
    display: flex;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;

        img{
            height: 20px;
        }

        span{
            font-size: 13px;
            letter-spacing: 1.42px;
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
                <a>
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
            <UserImg > <AccountCircleIcon style={{fontSize: '4.75rem'}}/> </UserImg>


        </Nav>
    )
}

export default Header