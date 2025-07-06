import React, { useState, useEffect } from "react";
import "./App.css";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
      >
        <span className="progress-label">{progress}%</span>
      </div>
    </div>
  );
};

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <h2>React Progress Bar</h2>
      <ProgressBar progress={progress} />
    </div>
  );
}

export default App;
