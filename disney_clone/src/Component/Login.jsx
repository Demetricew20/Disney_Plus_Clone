import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../Assets/images/login-background.jpg';
import logoOne from '../Assets/images/cta-logo-one.svg';
import logoTwo from '../Assets/images/cta-logo-two.png';


const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    

    &:before {
        background: url(${backgroundImage}) center center / cover no-repeat fixed;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        bottom: 0;
        content: '';
        left: 0;
        right: 0;
        opacity: 0.7;
        z-index: -1;
        
    }
`;

const CTA = styled.div`
    max-width: 650px;
    padding-top: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`;

const CTALogoOne = styled.img`

`;
const CTALogoTwo = styled.img`
    width: 70%;
`;

const SignUp = styled.a`
    width: 100%;
    margin-top: 8px;
    margin-bottom: 12px;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0px;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;


    &:hover {
        background: #0483ee;
    }
`;

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`;

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src={logoOne} alt="Hulu/Disney/ESPN logos" />
                <SignUp>GET ALL THREE</SignUp>
                <Description>
                    ​Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src={logoTwo} alt="Disney Logos" />
            </CTA>
            
        </Container>
    )
}

export default Login
