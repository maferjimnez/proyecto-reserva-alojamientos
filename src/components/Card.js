import React from 'react';

function Card(props) {
    return(
        <div>
            <img src={props.photo} alt={props.name} />
            <h1>{props.name}</h1>
            <p>{props.description}</p>

            <div>
                <p>{props.country},{props.city}</p>
                <p>{props.rooms}</p>
                <p>{props.price}</p>
            </div>

            <button>Reservar</button>
        </div>
    )
}

export default Card;