import React, { useState } from 'react';
import './App.css';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const result = calculateWinner(squares);
  const winner = result?.winner || null;
  const winningLine = result?.line || [];

  const status = winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? 'Draw!'
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const handleClick = (index) => {
    if (squares[index] || winner) return;
    const nextSquares = [...squares];
    nextSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {squares.map((value, index) => (
          <button
            key={index}
            className={`square ${winningLine.includes(index) ? 'highlight' : ''}`}
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>
      <div className="status">{status}</div>
      <button className="reset" onClick={resetGame}>
        Restart
      </button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6],            
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return null;
}

export default App;
