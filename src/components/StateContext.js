import React, { useState, createContext } from 'react';

export const StateContext = createContext();

export const Provider = (props) => {
    const [ state, setState ] = useState({
        dateIn: {},
        dateOut: {},
        country: "cualquier país",
        price: "cualquier precio",
        size: "cualquier tamaño"
    });

    return(
    <StateContext.Provider value={[ state, setState ]}>
        {props.children}
    </StateContext.Provider> )
};