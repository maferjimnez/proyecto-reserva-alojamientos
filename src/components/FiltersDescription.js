import React, { useContext } from 'react';
import { StateContext } from './StateContext';
import styled from "styled-components";
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

const DescriptionContainer = styled.div`
    height: fit-content;
    width: 62%;
    margin-top: 13rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

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
                return "Precio del hotel: Bajo.";
            case "2":
                return "Precio del hotel: Intermedio.";
            case "3":
                return "Precio del hotel: Alto.";
            case "4":
                return "Precio del hotel: Muy alto"
            default:
                return false;
        }
    };

    const displaySelectedCountry = (country) => {
        if(country === 'cualquier pais'){
            return false
        } else {
            return `Ubicación del hotel: ${country}`
        }
    };

    const displaySelectedSize = (size) => {
        switch (size) {
            case 'tamaño pequeño':
                return 'Tamaño del hotel: Pequeño';
            case 'tamaño mediano':
                return 'Tamaño del hotel: Mediano';
            case 'tamaño grande':
                return 'Tamaño del hotel: Grande';
            default:
                return false;
        }
    };

    return(
        <DescriptionContainer>
            <DateText>Desde el <span className="date_text">{moment(state.dateIn).format(dateFormat)}</span>, hasta el <span className="date_text">{moment(state.dateOut).format(dateFormat)}</span></DateText>
            <SpanFilters>{displaySelectedPrice(state.price)}</SpanFilters>
            <SpanFilters>{displaySelectedCountry(state.country)}</SpanFilters>
            <SpanFilters>{displaySelectedSize(state.size)}</SpanFilters>
        </DescriptionContainer>
    );
};

export default DescriptionText;