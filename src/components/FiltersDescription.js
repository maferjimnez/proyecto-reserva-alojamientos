import React, { useContext } from 'react';
import { StateContext } from './StateContext';
import styled from "styled-components";
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');


// ! NEXT COMMIT: AGREGO COMPONENTE PARA LA DESCRIPCION DE BUSQUEDA 



const SpanFilters = styled.span`
        font-size: 22px;
        margin-top: 5px;
`

const DateText = styled.p`
        font-size: 20px;
        .date_text{
            font-weight: 700;
            text-decoration-line: underline;
        }
`

function DescriptionText () {
    const [ state ] = useContext(StateContext);
    const dateFormat = 'dddd[,] D [de] MMMM [de] YYYY';

    const displaySelectedPrice = (price) => {
        switch (price) {
            case "1":
                return "Precio: Económico";
            case "2":
                return "Precio: Standard";
            case "3":
                return "Precio: Distinguido";
            case "4":
                return "Precio: Lujoso"
            default:
                return false;
        }
    };

    const displaySelectedCountry = (country) => {
        if(country === 'cualquier pais'){
            return false
        } else {
            return `Ubicado en: ${country}`
        }
    };

    const displaySelectedSize = (size) => {
        switch (size) {
            case 'tamaño pequeño':
                return 'Hotel de tamaño: Pequeño';
            case 'tamaño mediano':
                return 'Hotel de tamaño: Mediano';
            case 'tamaño grande':
                return 'Hotel de tamaño: Grande';
            default:
                return false;
        }
    };

    return(
        <div>
            <DateText>Desde el <span className="date_text">{moment(state.dateIn).format(dateFormat)}</span>, hasta el <span className="date_text">{moment(state.dateOut).format(dateFormat)}</span></DateText>
            <SpanFilters>{displaySelectedPrice(state.price)}</SpanFilters>
            <SpanFilters>{displaySelectedCountry(state.country)}</SpanFilters>
            <SpanFilters>{displaySelectedSize(state.size)}</SpanFilters>
        </div>
    );
};

export default DescriptionText;