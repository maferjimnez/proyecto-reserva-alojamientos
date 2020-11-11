import React, { useContext } from 'react';
import Date from './Date';
import Countries from './Countries';
import Prices from './Prices';
import Size from './Size';
import { StateContext } from './StateContext';
import styled from "styled-components";


const Nav = styled.nav`
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    z-index: 100000000;
    box-shadow: 0px 7px 6px 0px rgba(177,181,197,0.96);
`

function Filters(){
    return(
        <nav>
            <Date />
            <Date />
            <Countries />
            <Prices />
            <Size />
        </nav>
    )
}

export default Filters