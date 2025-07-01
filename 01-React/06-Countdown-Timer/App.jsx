import { useEffect, useState, useRef } from "react";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [initialInput, setInitialInput] = useState(10); // Editable input
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 10 });
  const [totalTime, setTotalTime] = useState(10); // For countdown only

  const timerRef = useRef(null);

  // Countdown logic
  useEffect(() => {
    if (isRunning && totalTime > 0) {
      timerRef.current = setInterval(() => {
        setTotalTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  // Sync display time from totalTime
  useEffect(() => {
    if (totalTime <= 0 && isRunning) {
      setIsRunning(false);
    }

    convertSecondsToTime(totalTime);
  }, [totalTime]);

  const convertSecondsToTime = (seconds) => {
    const hour = Math.floor(seconds / 3600);
    const minute = Math.floor((seconds % 3600) / 60);
    const second = seconds % 60;

    setTime({ hours: hour, minutes: minute, seconds: second });
  };

  const handleStartStop = () => {
 
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTotalTime(parseInt(initialInput, 10));
  };

  const handleTimeChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) {
      setInitialInput(val);
      setTotalTime(val);
      convertSecondsToTime(val);
    }
  };

  const formatTime = (value) => String(value).padStart(2, "0");

  return (
    <div className="timer-container">
      <h1>Countdown Timer</h1>

      <div className="timer-form">
        <input
          type="number"
          value={initialInput}
          onChange={handleTimeChange}
        />
      </div>

      <div className="timer">
        {`${formatTime(time.hours)} : ${formatTime(time.minutes)} : ${formatTime(time.seconds)}`}
      </div>

      <div className="timer-btns">
        <button onClick={handleStartStop}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
