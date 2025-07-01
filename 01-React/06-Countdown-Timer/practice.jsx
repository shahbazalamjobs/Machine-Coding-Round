
// // 1. Simple Timer between current and target date

// import React, { useState, useEffect } from 'react';

// const CountdownTimer = ({ targetDate }) => {
//   const calculateTimeLeft = () => {
//     const difference = new Date(targetDate) - new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60)
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [targetDate]);

//   return (
//     <div style={{ fontFamily: 'monospace', fontSize: '1.5rem' }}>
//       {timeLeft.days ?? 0}d : {timeLeft.hours ?? 0}h : {timeLeft.minutes ?? 0}m : {timeLeft.seconds ?? 0}s
//     </div>
//   );
// };



// function App() {
//   const futureDate = new Date();
//   futureDate.setHours(futureDate.getHours() + 1); 

//   return (
//     <div style={{ textAlign: 'center', marginTop: '100px' }}>
//       <h1>Countdown Timer</h1>
//       <CountdownTimer targetDate={futureDate} />
//     </div>
//   );
// }

// export default App;



// 2. Advance Timer for some hours

import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [totalTime, setTotalTime] = useState(100);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const convertToSeconds = (h, m, s) => Number(h) * 3600 + Number(m) * 60 + Number(s);

  useEffect(() => {
    if (isRunning && totalTime > 0) {
      intervalRef.current = setInterval(() => {
        setTotalTime(prev => prev - 1); 
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, totalTime]);

  const handleStartStop = () => {
    setIsRunning(prev => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTotalTime(convertToSeconds(hours, minutes, seconds));
  };

  const handleSetTime = (e) => {
    e.preventDefault();
    const time = convertToSeconds(hours, minutes, seconds);
    setTotalTime(time);
    setIsRunning(false);
  };

  const displayTime = () => {
    const h = Math.floor(totalTime / 3600);
    const m = Math.floor((totalTime % 3600) / 60);
    const s = totalTime % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div className="timer-container">
      <h1 className="timer-heading">Countdown Timer</h1>

      <form className="input-form" onSubmit={handleSetTime}>
        <div className="input-group">
          <label>Hr</label>
          <input
            type="number"
            value={hours}
            min="0"
            onChange={(e) => setHours(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Min</label>
          <input
            type="number"
            value={minutes}
            min="0"
            max="59"
            onChange={(e) => setMinutes(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Sec</label>
          <input
            type="number"
            value={seconds}
            min="0"
            max="59"
            onChange={(e) => setSeconds(e.target.value)}
          />
        </div>
        <button type="submit" className="btn set-btn">Set</button>
      </form>

      <div className="timer-display">{displayTime()}</div>

      <div className="timer-buttons">
        <button className="btn" onClick={handleStartStop}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button className="btn reset" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;




// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }

// body {
//   margin: 0;
//   padding: 0;
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   background: #f2f4f8;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// }

// .timer-container {
//   background-color: #ffffff;
//   padding: 40px;
//   border-radius: 12px;
//   box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
//   text-align: center;
//   width: 100%;
//   max-width: 420px;
// }

// .timer-heading {
//   font-size: 24px;
//   margin-bottom: 20px;
//   color: #333;
// }

// .timer-display {
//   font-size: 48px;
//   font-weight: bold;
//   margin: 20px 0;
//   color: #2b2b2b;
// }

// .input-form {
//   display: flex;
//   justify-content: center;
//   align-items: flex-end;
//   gap: 12px;
//   margin-bottom: 20px;
//   flex-wrap: wrap;
// }

// .input-group {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// }

// .input-group label {
//   font-size: 14px;
//   margin-bottom: 4px;
//   color: #555;
// }

// .input-form input {
//   width: 60px;
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   text-align: center;
// }

// .set-btn {
//   padding: 10px 16px;
//   background-color: #10b981;
//   color: white;
//   border: none;
//   border-radius: 8px;
//   font-size: 16px;
//   cursor: pointer;
//   height: 48px;
//   align-self: center;
//   transition: background-color 0.3s ease;
// }

// .set-btn:hover {
//   background-color: #059669;
// }

// .timer-buttons {
//   display: flex;
//   gap: 15px;
//   justify-content: center;
// }

// .btn {
//   padding: 12px 24px;
//   font-size: 16px;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   background-color: #4f46e5;
//   color: #ffffff;
//   transition: background-color 0.3s ease;
// }

// .btn:hover {
//   background-color: #4338ca;
// }

// .reset {
//   background-color: #ef4444;
// }

// .reset:hover {
//   background-color: #dc2626;
// }



// 3. simple timer with reset and start/stop 

// import { useEffect, useState, useRef } from "react";

// function App() {
//   const [isRunning, setIsRunning] = useState(false);
//   const [initialInput, setInitialInput] = useState(10); // Editable input
//   const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 10 });
//   const [totalTime, setTotalTime] = useState(10); // For countdown only

//   const timerRef = useRef(null);

//   // Countdown logic
//   useEffect(() => {
//     if (isRunning && totalTime > 0) {
//       timerRef.current = setInterval(() => {
//         setTotalTime((prev) => prev - 1);
//       }, 1000);
//     }

//     return () => clearInterval(timerRef.current);
//   }, [isRunning]);

//   // Sync display time from totalTime
//   useEffect(() => {
//     if (totalTime <= 0 && isRunning) {
//       setIsRunning(false);
//     }

//     convertSecondsToTime(totalTime);
//   }, [totalTime]);

//   const convertSecondsToTime = (seconds) => {
//     const hour = Math.floor(seconds / 3600);
//     const minute = Math.floor((seconds % 3600) / 60);
//     const second = seconds % 60;

//     setTime({ hours: hour, minutes: minute, seconds: second });
//   };

//   const handleStartStop = () => {
 
//     setIsRunning((prev) => !prev);
//   };

//   const handleReset = () => {
//     setIsRunning(false);
//     setTotalTime(parseInt(initialInput, 10));
//   };

//   const handleTimeChange = (e) => {
//     const val = parseInt(e.target.value, 10);
//     if (!isNaN(val)) {
//       setInitialInput(val);
//       setTotalTime(val);
//       convertSecondsToTime(val);
//     }
//   };

//   const formatTime = (value) => String(value).padStart(2, "0");

//   return (
//     <div className="timer-container">
//       <h1>Countdown Timer</h1>

//       <div className="timer-form">
//         <input
//           type="number"
//           value={initialInput}
//           onChange={handleTimeChange}
//         />
//       </div>

//       <div className="timer">
//         {`${formatTime(time.hours)} : ${formatTime(time.minutes)} : ${formatTime(time.seconds)}`}
//       </div>

//       <div className="timer-btns">
//         <button onClick={handleStartStop}>
//           {isRunning ? "Pause" : "Start"}
//         </button>
//         <button onClick={handleReset}>Reset</button>
//       </div>
//     </div>
//   );
// }

// export default App;
