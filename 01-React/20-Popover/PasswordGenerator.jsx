import React, { useState } from 'react';

const PasswordGenerator = () => {
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

    if (charset === '') {
      setPassword('Select at least one option!');
      return;
    }

    let generated = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generated += charset[randomIndex];
    }

    setPassword(generated);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div style={styles.container}>
      <h2>Password Generator</h2>

      <div>
        <label>Password Length: {length}</label>
        <input
          type="range"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </div>

      <div style={styles.checkboxGroup}>
        <label><input type="checkbox" checked={includeUpper} onChange={() => setIncludeUpper(!includeUpper)} /> Uppercase</label>
        <label><input type="checkbox" checked={includeLower} onChange={() => setIncludeLower(!includeLower)} /> Lowercase</label>
        <label><input type="checkbox" checked={includeNumber} onChange={() => setIncludeNumber(!includeNumber)} /> Numbers</label>
        <label><input type="checkbox" checked={includeSymbol} onChange={() => setIncludeSymbol(!includeSymbol)} /> Symbols</label>
      </div>

      <button onClick={generatePassword}>Generate</button>

      {password && (
        <div style={styles.passwordBox}>
          <input type="text" readOnly value={password} />
          <button onClick={copyToClipboard}>Copy</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 400,
    margin: '50px auto',
    padding: 20,
    border: '1px solid #ccc',
    borderRadius: 8,
    fontFamily: 'sans-serif',
  },
  checkboxGroup: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px 0',
  },
  passwordBox: {
    marginTop: 20,
    display: 'flex',
    gap: 10,
    alignItems: 'center',
  },
};

export default PasswordGenerator;
