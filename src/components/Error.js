import React from 'react';

const Error = (props) => {
    return(
        <div>
            <h2>Bueno, esto es incómodo...</h2>
            <h3>{props.e}, por favor inténtalo de nuevo.</h3>
        </div>
    );
};

export default Error;