import React from 'react';
import styled from "styled-components";
// import variables from "./..assets/globalStyles" 

const CardConteiner = styled.div`
    width: 20%;
    padding: 1rem;
    border-radius: 1rem;
    margin: 1rem 0;
    background-color: #f1f6f9;
    box-shadow: 2px 7px 13px #BABECC;

    img{
        width: 100%;
        border-radius: 4px;
    }

    section{ 
        border-radius: 2rem 2rem 1rem 1rem;
        background-color: #fff;
        width: 100%;
        top: -10px;
        left: -16px;
        position: relative;
        padding: 8px 1rem;
        height: 67%;

        h2{
            margin: 10px 0 0 0;
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
                    <p>{props.country}, {props.city}</p>
                    <p>{props.rooms}</p>
                    <p>{props.price}</p>
                </div>

                <button>Reservar</button>
            </section>
        </CardConteiner>
    )
}

export default Card;