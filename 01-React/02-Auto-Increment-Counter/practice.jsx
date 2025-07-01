// 1 optimized

import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Effect for timer lifecycle
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const toggleTimer = () => {
    setIsPaused((prev) => !prev);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setCounter(0);
    setIsPaused(true);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <div>{counter}</div>
      <div>
        <button onClick={toggleTimer}>
          {isPaused ? "Start" : "Stop"}
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}




// 2 less optimize:


// import { useEffect, useRef, useState } from "react";
// import "./styles.css";

// export default function App() {
//   const [counter, setCounter] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const interval = useRef(null);

//   useEffect(() => {
//     console.log("mounting");
//     startTimer();

//     return () => {
//       if (interval.current) clearInterval(interval.current);
//     };
//   }, []);

//   const startTimer = () => {
//     if (interval.current) clearInterval(interval.current);
//     interval.current = setInterval(() => {
//       setCounter((prev) => prev + 1);
//     }, 1000);
//     setIsPaused(false);
//   };

//   const resetTimer = () => {
//     clearInterval(interval.current);
//     setIsPaused(true);
//     setCounter(0);
//   };

//   const stopTimer = () => {
//     clearInterval(interval.current);
//     setIsPaused(true);
//   };

//   return (
//     <div className="App">
//       <h1>Counter</h1>
//       <div>{counter}</div>
//       <div>
//         <button onClick={isPaused ? startTimer : stopTimer}>
//           {isPaused ? "Start" : "Stop"}
//         </button>
//         <button onClick={resetTimer}>Reset</button>
//       </div>
//     </div>
//   );
// }
