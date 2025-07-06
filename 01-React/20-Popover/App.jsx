

// 1) Good Popover


import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef();

  const togglePopover = () => {
    setShowPopover(prev => !prev);
  };


  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setShowPopover(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="app-container">
      <button className="popover-button" onClick={togglePopover}>
        Toggle Popover
      </button>

      {showPopover && (
        <div className="popover" ref={popoverRef}>
          <p>This is a popover content.</p>
        </div>
      )}
    </div>
  );
}

export default App;






// 2) Simple Popover

// import React from "react";
// import { useState } from "react";
// import "./App.css";

// const Popover = () => {
//   const [showBody, setShowBody] = useState(false);

//   const handleHeaderClick = () => {
//     setShowBody(!showBody);
//   };

//   return (
//     <div className="componentContainer">
//       <button onClick={handleHeaderClick}>Click Here</button>
//       {showBody ? (
//         <div className="popoverContainer">
//           <>
//           <div className="triangle"></div>
//             <div className="popoverHeader">Header</div>
//             <div className="popoverBody">The content is added here</div>
//           </>
//         </div>
//       ) : null}
//     </div>
//   );
// };



// function App() {
  
//   return (
//     <div className="App">
//       <Popover />
//     </div>
//   );
// }

// export default App;