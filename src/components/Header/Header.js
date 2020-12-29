import React from 'react';
// libraries
import styled from "styled-components";

// components
import Filters from './Filters.js';
import HeaderText from './HeaderText.js';

//assets
import background from './assets/images/hotel_stairs.jpg';

const Headercontainer = styled.header`
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

function Header () {
    return(
        <Headercontainer>
            <HeaderText />
            <Filters />
        </Headercontainer>
    );
};

export default Header;