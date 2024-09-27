import React from 'react';
import '../styles/SelectOperation.css';

function SelectOperation({ value, onChange }) {
    return (
        <select value={value} onChange={onChange}>
            <option value="sum">Suma</option>
            <option value="sub">Resta</option>
            <option value="mul">Multiplicación</option>
            <option value="div">División</option>
        </select>
    );
}

export default SelectOperation;
