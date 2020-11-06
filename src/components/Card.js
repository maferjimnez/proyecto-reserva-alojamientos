import React from 'react';

function Card(props) {
    return(
        <div>
            <img src={props.photo} alt="{props.name}" />
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Card;