import React, {useState, useEffect} from 'react';
import { useHistory} from 'react-router';
import {auth, provider} from '../Firebase';
import styled from 'styled-components';
import logoImg from '../Assets/images/logo.svg';
import homeIcon from '../Assets/images/home-icon.svg';
import searchIcon from '../Assets/images/search-icon.svg';
import watchlistIcon from '../Assets/images/watchlist-icon.svg';
import originalsIcon from '../Assets/images/original-icon.svg';
import moviesIcon from '../Assets/images/movie-icon.svg';
import seriesIcon from '../Assets/images/series-icon.svg';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import {
    selectUserName,
    selectUserPhoto,
    setUserLogin,
    setSignOut,
}
from '../features/user/UserSlice';
import { useSelector, useDispatch } from 'react-redux';

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

const UserImg = styled.img`
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 50px;
    width: 50px;
    border-radius: 50%;
`;

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 400ms ease 0s;
    cursor: pointer;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;

const LoginContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
`;

function Header() {

    const [user, setUser] = useState({
        name: '',
        email: '',
        photo: '',
    });

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                }))
            }
        })
    }, [])

    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch(setUserLogin({
                name: result.user.displayName,
                email: result.user.email,
                photo: result.user.photoURL,
            }))
            history.push('/');
        })
        .catch(err => (console.log(err)))
    }

    const signOut = () => {
        auth.signOut()
        .then(() => {
            dispatch(setSignOut());
            history.push('/login');
        })
        .catch(err => (console.log(err)))
    }

    return (
        <Nav>
            <Logo src={logoImg} alt="Disney Logo" />
            {
                !userName ?
                <LoginContainer>
                    <Login onClick={signIn}>Login</Login> 
                </LoginContainer>
                
                :
                <>
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
                <UserImg onClick={signOut} src={userPhoto} />

                </>

            }



        </Nav>
    )
}

export default Header