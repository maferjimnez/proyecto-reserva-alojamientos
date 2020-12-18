import React from 'react';
import styled from "styled-components";
// import { StateContext } from './StateContext';
import Filters from './Filters.js';
import DescriptionText from './FiltersDescription.js';
import background from '../assets/images/hotel_stairs.jpg'


const HeaderConteiner = styled.header`
    margin: 2rem 3rem;
    height: 30rem;
    display: flex;
    color: white;

    ::before{
        content: "";
        background: url(${background}) 50% 170% fixed;
        background-size: cover;
        filter: blur(1px);
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        z-index: -1;
    }

    h1{
        margin-top: 1rem;
        text-transform: uppercase;
        font: 500 6rem Garamong, serif;
        letter-spacing: 15px;
    }

    p{
        font-size: 20px;
    }
`;

const HeaderText = styled.section`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;


function Header () {
    return(
        <HeaderConteiner>
            <HeaderText>
                <div>
                    <h1>Hoteles</h1>
                    <p>Encuenta el lugar perfecto para tu estadía.</p>
                </div>
                <DescriptionText />
            </HeaderText>
            <Filters />
        </HeaderConteiner>
    )
};

export default Header;