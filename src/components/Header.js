import React, { useContext } from 'react';
import { StateContext } from './StateContext';
import styled from "styled-components";
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');


const HeaderConteiner = styled.header`
    background-image: url(https:/visit.freiburg.de/extension/portal-freiburg/var/storage/images/media/bibliothek/alle-anderen-bilder-1200x800px/02-planen/uebernachten/hotel-schluessel-c-dmitry-kalinovsky-shutterstock/35218-1-ger-DE/hotel-schluessel-c-dmitry-kalinovsky-shutterstock_grid_large.jpg); 
    text-align: center;
    padding: 3rem 8rem;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;

    h1{
        text-transform: uppercase;
        letter-spacing: 5px;
    }
`

function Header () {
    const [ state, setState ] = useContext(StateContext);
    const dateFormat = 'dddd[,] D [de] MMMM [de] YYYY';


    return(
        <HeaderConteiner>
            <h1>Hoteles</h1>
            <p>Estás buscando hoteles ubicados en {state.countries}, de {state.price} y de {state.size}. Día de llegada {moment(state.dateIn).format(dateFormat)}, día de salida {moment(state.dateOut).format(dateFormat)}</p>
        </HeaderConteiner>
    )
}

export default Header;