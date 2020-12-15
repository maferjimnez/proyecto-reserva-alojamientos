import React from 'react';
import styled from "styled-components";

// import { StateContext } from './StateContext';
import Filters from './Filters.js';
import DescriptionText from './FiltersDescription.js';
import background from '../assets/images/budapest_hotel.jpg'


const HeaderConteiner = styled.header`
    height: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    color: white;

    ::before{
        content: "";
        background: url(${background}) no-repeat center ;
        filter: blur(2px);
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        /* opacity: 0.9; */
        z-index: -1;
    }

    h1{
        margin: 3rem 0 1rem 0;
        text-transform: uppercase;
        font-size: 5rem;
        letter-spacing: 19px;
    }
`


function Header () {
    return(
        <HeaderConteiner>
            <h1>Hoteles</h1>
            <DescriptionText />
            <Filters />
        </HeaderConteiner>
    )
};

export default Header;