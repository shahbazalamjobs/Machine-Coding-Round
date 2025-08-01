import { useEffect, useState, useRef } from "react";
import './App.css'

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



// 2nd date timer


// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

// function App() {
//   const [inputDate, setInputDate] = useState('');
//   const [eventDate, setEventDate] = useState(null);
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0, hours: 0, minutes: 0, seconds: 0
//   });
//   const [isActive, setIsActive] = useState(false);
//   const timerRef = useRef(null);

//   useEffect(() => {
//     if (!isActive || !eventDate) return;
//     // start interval
//     timerRef.current = setInterval(() => {
//       const now = new Date();
//       const diff = eventDate - now;
//       if (diff <= 0) {
//         clearInterval(timerRef.current);
//         setIsActive(false);
//         setTimeLeft({ days:0, hours:0, minutes:0, seconds:0 });
//       } else {
//         setTimeLeft({
//           days: Math.floor(diff / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
//           minutes: Math.floor((diff / (1000 * 60)) % 60),
//           seconds: Math.floor((diff / 1000) % 60),
//         });
//       }
//     }, 1000);
//     return () => clearInterval(timerRef.current);
//   }, [isActive, eventDate]);

//   const handleStart = () => {
//     if (!inputDate) return;
//     const selected = new Date(inputDate);
//     if (selected <= new Date()) {
//       alert('Please choose a future date/time');
//       return;
//     }
//     setEventDate(selected);
//     setIsActive(true);
//   };

//   const segments = Object.entries(timeLeft).map(([label, val]) => (
//     <div key={label} className="time-segment">
//       <span className="time">{val.toString().padStart(2, '0')}</span>
//       <span className="label">{label}</span>
//     </div>
//   ));

//   return (
//     <div className="App">
//       <h1>Event Countdown</h1>
//       <div className="controls">
//         <input
//           type="datetime-local"
//           className="date-input"
//           value={inputDate}
//           onChange={e => setInputDate(e.target.value)}
//         />
//         <button
//           className="start-button"
//           onClick={handleStart}
//         >Start</button>
//       </div>
//       {isActive && (
//         <div className="timer">
//           {segments}
//         </div>
//       )}
//       {!isActive && eventDate && (
//         <div className="expired">Time’s up!</div>
//       )}
//     </div>
//   );
// }

// export default App;
