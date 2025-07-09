import React, { useState } from 'react';
import './App.css';

const snakes = {
  16: 6,
  47: 26,
  49: 11,
  56: 53,
  62: 19,
  64: 60,
  87: 24,
  93: 73,
  95: 75,
  98: 78,
};

const ladders = {
  1: 38,
  4: 14,
  9: 31,
  21: 42,
  28: 84,
  36: 44,
  51: 67,
  71: 91,
  80: 100,
};

function App() {
  const [position, setPosition] = useState(1);
  const [dice, setDice] = useState(null);
  const [message, setMessage] = useState("");

  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setDice(roll);

    let nextPos = position + roll;
    if (nextPos > 100) {
      setMessage("Roll too high, wait for next turn!");
      return;
    }

    if (snakes[nextPos]) {
      setMessage(`Oops! Bitten by snake 🐍 from ${nextPos} to ${snakes[nextPos]}`);
      nextPos = snakes[nextPos];
    } else if (ladders[nextPos]) {
      setMessage(`Yay! Climbed ladder 🪜 from ${nextPos} to ${ladders[nextPos]}`);
      nextPos = ladders[nextPos];
    } else {
      setMessage(`Moved to ${nextPos}`);
    }

    setPosition(nextPos);
  };

  const renderBoard = () => {
    const cells = [];
    let number = 100;
    for (let row = 0; row < 10; row++) {
      const rowCells = [];
      for (let col = 0; col < 10; col++) {
        const cellNum = row % 2 === 0 ? number - col : number - (9 - col);
        rowCells.push(
          <div
            key={cellNum}
            className={`cell ${position === cellNum ? 'player' : ''}`}
          >
            {cellNum}
          </div>
        );
      }
      cells.push(
        <div className="row" key={row}>
          {rowCells}
        </div>
      );
      number -= 10;
    }
    return cells;
  };

  return (
    <div className="game-container">
      <h2>🎲 Snake and Ladder</h2>
      <div className="board">{renderBoard()}</div>
      <div className="controls">
        <button onClick={rollDice}>Roll Dice</button>
        <p>Dice: {dice}</p>
        <p>Current Position: {position}</p>
        <p className="message">{message}</p>
        {position === 100 && <h3>🎉 You Won!</h3>}
      </div>
    </div>
  );
}

export default App;
