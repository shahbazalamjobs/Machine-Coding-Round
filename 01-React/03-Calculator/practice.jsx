import React, { useState } from 'react';
import './App.css';

const BUTTONS = ['C', '⌫', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.'];

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '⌫') {
      setInput(prev => prev.slice(0, -1));
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(prev => prev + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" className="display" value={input} readOnly />

      <div className="buttons">
        {BUTTONS.map((btn, index) => (
          <button
            key={index}
            className={btn === '0' ? 'zero' : ''}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;


{/* <style>

  * {
    padding: 0;
  margin: 0;
  box-sizing: border-box;
}

  .calculator {
    width: 260px;
  margin: 100px auto;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 16px;
  background: #f7f7f7;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

  .display {
    width: 100%;
  height: 50px;
  font-size: 1.5rem;
  margin-bottom: 12px;
  padding: 8px;
  text-align: right;
  border-radius: 6px;
  border: 1px solid #ccc;
}

  .buttons {
    display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

  button {
    height: 50px;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  background-color: #e0e0e0;
  cursor: pointer;
  transition: background 0.2s;
}

  button:hover {
    background - color: #d4d4d4;
}

  .zero {
    grid - column: span 2;
}

</style> */}