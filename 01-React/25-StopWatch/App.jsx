import React, { useState, useRef } from "react";
import "./App.css";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const formatTime = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 60000) % 60);
    const hours = Math.floor(ms / 3600000);
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setTime(0);
  };

  return (
    <div className="stopwatch-container">
      <h1 className="stopwatch-time">{formatTime(time)}</h1>
      <div className="stopwatch-buttons">
        <button onClick={startTimer} className="stopwatch-button">Start</button>
        <button onClick={stopTimer} className="stopwatch-button">Stop</button>
        <button onClick={resetTimer} className="stopwatch-button">Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
