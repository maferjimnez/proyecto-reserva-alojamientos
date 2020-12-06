import React, { useContext } from 'react';
import { StateContext } from './StateContext';
import Filters from './Filters.js';
import background from '../assets/images/hotel-stairs.jpg'
import styled from "styled-components";
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');


const HeaderConteiner = styled.header`
    height: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    color: white;

    ::before{
        content: "";
        background: url(${background}) no-repeat bottom;
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

    p{
        font-size: 20px;
        .date_text{
            font-weight: 700;
            text-decoration-line: underline;
        }
    }

`

function Header () {
    const [ state ] = useContext(StateContext);
    const dateFormat = 'dddd[,] D [de] MMMM [de] YYYY';

    return(
        <HeaderConteiner>
            <h1>Hoteles</h1>
            <p>Desde el <span className="date_text">{moment(state.dateIn).format(dateFormat)}</span>, hasta el <span className="date_text">{moment(state.dateOut).format(dateFormat)}</span></p>
            
            <Filters />
        </HeaderConteiner>
    )
}

export default Header;