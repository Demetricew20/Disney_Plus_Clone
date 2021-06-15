import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    height: 70px;
    background: #090b13;
`;

const Logo = styled.img`
    width: 80px;
`;

const NavMenu = styled.div`
    
`;

function Header() {
    return (
        <Nav>
            <Logo src="" alt="" />
            <NavMenu>
                
            </NavMenu>
        </Nav>
    )
}

export default Header