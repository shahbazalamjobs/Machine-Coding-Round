import { useEffect, useState, useRef } from "react";

function App() {

  const [counter, setCounter] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {

    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCounter(prev => prev + 1);
      }, 1000);
    }

    return (() => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    })
  }, [isPaused])

  const toggleTimer = () => {
    setIsPaused(prev => !prev);
  }

  const resetTimer = () => {
    setIsPaused(true);
    setCounter(0);
    clearInterval(intervalRef.current)
    intervalRef.current = null;
  }

  return (
    <div className="container">
      <h1>Auto Increment Timer</h1>

      <p>{counter}</p>

      <div className="control">
        <button onClick={toggleTimer}>
          {isPaused ? 'Start' : 'Stop'}
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  )
}

export default App;