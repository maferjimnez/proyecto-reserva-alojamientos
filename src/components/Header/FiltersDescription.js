import React, { useContext } from 'react';
import { StateContext } from '../StateContext';
// libraries
import styled from "styled-components";
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

const DescriptionContainer = styled.span`
    width: 62%;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p{
        font-size: 23px;
    }
`;

const DateText = styled.span`
        font-size: 20px;
        .date_text{
            font-weight: 700;
            text-decoration-line: underline;
        }
`;

function DescriptionText () {
    const [ state ] = useContext(StateContext);
    const dateFormat = 'dddd[,] D [de] MMMM [de] YYYY';
    const HotelPriceRange = {
        Cheap: 1,
        Affordable: 2,
        Expensive: 3,
        VeryExpensive: 4
    };

    const displaySelectedPrice = (price) => {
        switch (price) {
            case `${HotelPriceRange.Cheap}`:
                return " de precio bajo";
            case `${HotelPriceRange.Affordable}`:
                return " de precio intermedio";
            case `${HotelPriceRange.Expensive}`:
                return " de precio alto";
            case `${HotelPriceRange.VeryExpensive}`:
                return " de precio muy alto"
            default:
                return false;
        };
    };

    const displaySelectedCountry = (country) => {
        return country === 'cualquier pais' ? false : `, en ${country}`;
    };

    const displaySelectedSize = (size) => {
        switch (size) {
            case 'tamaño pequeño':
                return ', de tamaño pequeño.';
            case 'tamaño mediano':
                return ', de tamaño mediano.';
            case 'tamaño grande':
                return ', de tamaño grande.';
            default:
                return false;
        };
    };

    return(
        <DescriptionContainer>
            <p>Estás buscando hoteles {' '}
                <DateText>desde el <span className="date_text">{moment(state.dateIn).format(dateFormat)}</span>, hasta el <span className="date_text">{moment(state.dateOut).format(dateFormat)}</span></DateText>
                {displaySelectedCountry(state.country)}
                {displaySelectedPrice(state.price)}
                {displaySelectedSize(state.size)}
            </p>
        </DescriptionContainer>
    );
};

export default DescriptionText;