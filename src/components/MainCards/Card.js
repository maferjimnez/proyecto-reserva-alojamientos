import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBed,
    faMapMarker,
    faDollarSign
  } from "@fortawesome/free-solid-svg-icons";

const CardContainer = styled.section`
    width: 28%;
    padding: 1.5rem;
    border-radius: 8px;
    margin: 1rem 0 7rem;
    background-color: #f1f6f9;
    box-shadow: 2px 7px 13px #BABECC;

    img{
        width: 100%;
        border-radius: 4px;
    }    
`;

const HotelInfo = styled.div`
        height: 63%;
        width: 109%;
        padding: 8px 1rem;
        position: relative;
        top: -16px;
        left: -16px;
        border-radius: 2rem 2rem 1rem 1rem;
        background-color: rgb(255,255,255);
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h2{
            margin: 10px 0 0 0;
        }
`;

const HotelDescription = styled.p`
    font-size: 18px;
`;

const HotelIconsContainer = styled.div`
    display: flex;
    background-color: #EBECF0;
    width: fit-content;
    border-radius: 5px;
    margin-top: 0.5rem;
`;

const HotelIconText = styled.p`
    margin: 0;
    display: flex;
    align-items: center;
    padding: 0 5px;
    font-size: 15px;
    font-weight: 600;
`;

const HotelIcons = styled.span`
    background-color: rgb(8%, 18%, 30%, 0.8);
    width: fit-content;
    height: 2rem;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
`;

const HotelIconPrice = styled.span`
    background-color: rgb(8%, 18%, 30%, 0.8);
    width: fit-content;
    height: 2rem;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`;

const BtnReserva = styled.button`
    padding: 12px;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 4px;
    background-color: rgb(8%, 18%, 30%, 0.8);
    font-weight: 600;
    font-size: 17px;
    color: #fff;
    letter-spacing: 1px;
`;

function Card(props) {

    const PriceRange = {
        cheap: 0,
        affordable: 1,
        expensive: 2,
        veryExpensive: 3
    };
    return(
        <CardContainer>
            <img src={props.photo} alt={`Imagen del hotel ${props.name}`} />
            <HotelInfo>
                <h2>{props.name}</h2>
                <HotelDescription>{props.description}</HotelDescription>
                <div>
                    <HotelIconsContainer className="item-info">
                        <HotelIcons>
                            <FontAwesomeIcon icon={faMapMarker} color="#EBECF0" />
                        </HotelIcons>
                        <HotelIconText>{props.country}, {props.city}</HotelIconText>
                    </HotelIconsContainer>
                    <HotelIconsContainer className="item-info">
                        <HotelIcons>
                            <FontAwesomeIcon icon={faBed} color="#EBECF0" />
                        </HotelIcons>
                        <HotelIconText>{props.rooms} Habitaciones.</HotelIconText>
                    </HotelIconsContainer>
                    <HotelIconsContainer className="item-info">
                        <HotelIconPrice>
                            <FontAwesomeIcon
                                icon={faDollarSign}
                                color="#EBECF0"
                                opacity={props.price > PriceRange.cheap ? "100%" : "50%"}
                            />
                            <FontAwesomeIcon
                                icon={faDollarSign}
                                color="#EBECF0"
                                opacity={props.price > PriceRange.affordable ? "100%" : "50%"}
                            />
                            <FontAwesomeIcon
                                icon={faDollarSign}
                                color="#EBECF0"
                                opacity={props.price > PriceRange.expensive ? "100%" : "50%"}
                            />
                            <FontAwesomeIcon
                                icon={faDollarSign}
                                color="#EBECF0"
                                opacity={props.price > PriceRange.veryExpensive ? "100%" : "50%"}
                            />
                        </HotelIconPrice>
                    </HotelIconsContainer>
                </div>
                <BtnReserva>Reservar</BtnReserva>
            </HotelInfo>
        </CardContainer>
    )
};

export default Card;