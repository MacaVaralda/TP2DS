import React, { useState } from 'react';
import './App.css';
import ButtonResult from './components/ButtonResult';
import Input from './components/Input';
import SelectOperation from './components/SelectOperation';

function App() {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [operation, setOperation] = useState('sum');
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        let num1 = parseFloat(value1);
        let num2 = parseFloat(value2);

        if (isNaN(num1) || isNaN(num2)) {
            setResult('Valores inválidos');
            return;
        }

        let res = 0;

        switch (operation) {
            case 'sum':
                res = num1 + num2;
                break;
            case 'sub':
                res = num1 - num2;
                break;
            case 'mul':
                res = num1 * num2;
                break;
            case 'div':
                res = num2 !== 0 ? num1 / num2 : 'División por cero no permitida';
                break;
            default:
                res = 0;
        }

        setResult(res);
    };

    const handleInputChange1 = (e) => {
        setValue1(e.target.value);
        setResult(null);
    };

    const handleInputChange2 = (e) => {
        setValue2(e.target.value);
        setResult(null);
    };

    const handleOperationChange = (e) => {
        setOperation(e.target.value);
        setResult(null);
    };

    return (
        <div className="App">
            <div className="calculator-container">
                <h1>Calculadora</h1>
                <Input value={value1} onChange={handleInputChange1} placeholder="Valor 1" />
                <Input value={value2} onChange={handleInputChange2} placeholder="Valor 2" />
                <SelectOperation value={operation} onChange={handleOperationChange} />
                <ButtonResult onClick={handleCalculate} result={result} />
            </div>
        </div>
    );
}

export default App;
