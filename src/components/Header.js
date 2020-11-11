import React, { useContext } from 'react';
import { StateContext } from './StateContext';
import styled from "styled-components";

const HeaderConteiner = styled.header`
    background-color: #f1f6f9;
    text-align: center;
    padding: 1rem;

    h1{
        text-transform: uppercase;
        letter-spacing: 5px;

    }
`

function Header () {
    const [ state, setState ] = useContext(StateContext)

    return(
        <HeaderConteiner>
            <h1>Hoteles</h1>
            <p>Desde el <spam>{state.dateStart}</spam> hasta el <spam>{state.dateEnd}</spam></p>
        </HeaderConteiner>
    )
}

export default Header;