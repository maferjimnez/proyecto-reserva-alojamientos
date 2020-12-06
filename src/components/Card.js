import React from 'react';
import styled from "styled-components";
// import variables from "./..assets/globalStyles" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBed,
    faMapMarker,
    faDollarSign
  } from "@fortawesome/free-solid-svg-icons";

const CardConteiner = styled.article`
    width: 28%;
    padding: 1.5rem;
    border-radius: 1rem;
    margin: 1rem 0 7rem;
    background-color: #f1f6f9;
    box-shadow: 2px 7px 13px #BABECC;

    img{
        width: 100%;
        border-radius: 4px;
    }

    section{ 
        height: 55%;
        width: 100%;
        padding: 8px 1rem;
        position: relative;
        top: -10px;
        left: -16px;
        border-radius: 2rem 2rem 1rem 1rem;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h2{
            margin: 10px 0 0 0;
        }

        .item-info{
            display: flex;
            background-color: burlywood;
            width: fit-content;
            border-radius: 5px;
            margin-top: 0.5rem;

            span{
                background-color: brown;
                width: fit-content;
                height: 2rem;
                padding: 0 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-bottom-left-radius: 4px;
                border-top-left-radius: 4px;
            }

            p{
                margin: 0;
                display: flex;
                align-items: center;
                padding: 0 5px;
            }
        }
    }
`;

function Card(props) {
    return(
        <CardConteiner>

            <img src={props.photo} alt={props.name} />

            <section>
                <h2>{props.name}</h2>
                <p>{props.description}</p>

                <div>
                    <div className="item-info">
                        <span>
                            <FontAwesomeIcon icon={faMapMarker} color="black" />
                        </span>
                        <p>{props.country}, {props.city}</p>
                    </div>

                    <div className="item-info">
                        <span>
                            <FontAwesomeIcon icon={faBed} color="black" />
                        </span>
                        <p>{props.rooms} Habitaciones.</p>
                    </div>

                    <div className="item-info">
                        <span>
                            <FontAwesomeIcon
                                icon={faDollarSign}
                                color="black"
                                opacity={props.price > 0 ? "100%" : "50%"}
                            />
                            <FontAwesomeIcon
                                icon={faDollarSign}
                                color="black"
                                opacity={props.price > 1 ? "100%" : "50%"}
                            />
                            <FontAwesomeIcon
                                icon={faDollarSign}
                                color="black"
                                opacity={props.price > 2 ? "100%" : "50%"}
                            />
                            <FontAwesomeIcon
                                icon={faDollarSign}
                                color="black"
                                opacity={props.price > 3 ? "100%" : "50%"}
                            />
                        </span>
                    </div>
                </div>

                <button>Reservar</button>
            </section>
        </CardConteiner>
    )
}

export default Card;