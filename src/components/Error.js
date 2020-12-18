import React from 'react';
import styled from "styled-components";
import resultError from '../assets/images/no_result_search.png';

const ErrorContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .result_error_img{
        width: 13%;
    }
    
    .error_paragraph{
        font-size: 20px;
    }
`;

const Error = (props) => {
    return(
        <ErrorContainer>
            <img className="result_error_img" src={resultError} alt='Ilustración de error de búsqueda' />
            <h2 className="error_title">Bueno, esto es incómodo...</h2>
            <p className="error_paragraph">{props.e}, por favor intenta filtrar de nuevo.</p>
        </ErrorContainer>
    );
};

export default Error;