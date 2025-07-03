import React, { useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(12);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const number = '0123456789';
    const symbol = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let charset = '';
    if (includeUpper) charset += upper;
    if (includeLower) charset += lower;
    if (includeNumber) charset += number;
    if (includeSymbol) charset += symbol;

    if (!charset) {
      setPassword('Please select at least one option!');
      return;
    }

    let generated = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generated += charset[randomIndex];
    }

    setPassword(generated);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div className="container">
      <h2>Password Generator</h2>

      <div className="range-section">
        <label>Password Length: {length}</label>
        <input
          type="range"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </div>

      <div className="checkboxes">
        <label><input type="checkbox" checked={includeUpper} onChange={() => setIncludeUpper(!includeUpper)} /> Uppercase</label>
        <label><input type="checkbox" checked={includeLower} onChange={() => setIncludeLower(!includeLower)} /> Lowercase</label>
        <label><input type="checkbox" checked={includeNumber} onChange={() => setIncludeNumber(!includeNumber)} /> Numbers</label>
        <label><input type="checkbox" checked={includeSymbol} onChange={() => setIncludeSymbol(!includeSymbol)} /> Symbols</label>
      </div>

      <button className="generate-btn" onClick={generatePassword}>Generate Password</button>

      {password && (
        <div className="output">
          <input type="text" readOnly value={password} />
          <button onClick={copyPassword}>Copy</button>
        </div>
      )}
    </div>
  );
}

export default App;
