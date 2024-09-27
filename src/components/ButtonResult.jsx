import React from 'react';
import '../styles/ButtonResult.css';

function ButtonResult({ onClick, result }) {
    return (
        <div>
            <button onClick={onClick}>Calcular</button>
            {result !== null && <p>Resultado: {result}</p>}
        </div>
    );
}


export default ButtonResult;
