import React from 'react';
import styled from "styled-components";

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
            <img className="result_error_img" src={props.i} alt='Ilustración de error de búsqueda' />
            <h2 className="error_title">Bueno, esto es incómodo...</h2>
            <p className="error_paragraph">{props.t}, por favor intenta filtrar de nuevo.</p>
        </ErrorContainer>
    );
};

export default Error;