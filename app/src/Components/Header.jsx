import React from 'react';
import { useNavigate } from 'react-router';
import { COLORS, FONT_SIZES } from '../Vars';
import styled from 'styled-components';
import Logo from '../images/logo-min@3x.png';
import Swiper from '../Components/Swiper';


const HeaderContainer = styled.section`
height: 42rem;
background-color: ${COLORS.bg_beige};
nav {
    display: flex;
    justify-content: space-between;
    max-width: 1244px;
    margin: 0 auto;
ul {
    list-style: none;
    display: flex;
    height: 1.5rem;
    align-self: center;
    margin-left: 2rem;
    li {
        position: relative;
        padding: 0 2rem 0 .2rem;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: 2.57px;
        &::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 80%;
            height: 1px;
            transition: .2s ease-in-out;
        }
        &:hover::after {
            background-color: ${COLORS.brown};
        }
    }
}
img {
    width: 7.5rem;
    height: 7.5rem;
    cursor: pointer;
    align-self: center;
}
button {
    align-self: center;
    border-radius: 2px;
    border: 1px solid ${COLORS.font_black};
    text-transform: uppercase;
    letter-spacing: 2.57px;
    width: 9.5rem;
    height: 3rem;
    font-size: ${FONT_SIZES.small};
    line-height: 1.67;
    text-align: center;
    background-color: transparent;
    transition: .2s ease-in-out;
    outline: none;
    margin: 5.75rem 2rem 8rem;
    cursor: pointer;
    &:hover {
        background-color: ${COLORS.green};
        color: ${COLORS.white};
    }
}
}
`

const Header = (props) => {
    
    let navigate = useNavigate();

        return (
            <>
                <HeaderContainer>
                    <nav>
                        <ul>
                            <li onClick={() => navigate(props.projects)}>{props.projects}</li>
                            <li onClick={() => navigate(props.studio)}>{props.studio}</li>
                            <li onClick={() => navigate(props.offer)}>{props.offer}</li>
                        </ul>
                        <img src={Logo} onClick={() => navigate(props.home)} />
                        <button onClick={() => navigate(props.contact_btn)}>
                            {props.contact_btn}
                        </button>
                    </nav>
                </HeaderContainer>
            </>
        );
}

export default Header;
