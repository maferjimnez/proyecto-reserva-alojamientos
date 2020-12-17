import React from 'react';
import styled from "styled-components";

// import { StateContext } from './StateContext';
import Filters from './Filters.js';
import DescriptionText from './FiltersDescription.js';
import background from '../assets/images/hotel_stairs.jpg'


const HeaderConteiner = styled.header`
    margin: 2rem;
    height: 30rem;
    display: flex;
    color: white;

    ::before{
        content: "";
        background: url(${background}) 50% 350% fixed;
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


function Header () {
    return(
        <HeaderConteiner>
            <div>
                <h1>Hoteles</h1>
                <p>Encuenta el lugar perfecto para desconectarte.</p>
                <DescriptionText />
            </div>
            <Filters />
        </HeaderConteiner>
    )
};

export default Header;