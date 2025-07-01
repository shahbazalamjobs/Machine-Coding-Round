import { useState } from "react";
import './App.css'

const buttons = [
    'C', '⌫', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
];

function App() {

    const [input, setInput] = useState('');

    const handleClick = (value) => {
        if (value === 'C') {
            setInput('');
        } else if (value === '⌫') {
            setInput(prev => prev.slice(0, -1));
        } else if (value === '=') {
            setInput(eval(input).toString());
        } else {
            setInput(prev => prev + value);
        }
    }

    return (
        <div className="calculator">

            <input
                type="text"
                value={input}
            />

            <div className="button-container">
                {buttons.map((btn, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(btn)}
                        className={
                            btn === 'C'
                                ? 'btn-clear'
                                : btn === '='
                                    ? 'btn-equals'
                                    : ['/', '*', '-', '+'].includes(btn)
                                        ? 'btn-operator'
                                        : ''
                        }
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </div >
    )
}

export default App;