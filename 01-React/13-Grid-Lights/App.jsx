
// 3. Grid Light Sequence (Better)

import "./App.css";
import { useState, useEffect } from "react";

function Cell({ filled, onClick, isDisabled, label }) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={isDisabled}
      onClick={onClick}
      className={filled ? "cell cell-activated" : "cell"}
    />
  );
}

export default function App() {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  useEffect(() => {
    let timer;
    
    if (isDeactivating) {
      timer = setInterval(() => {
        setOrder((origOrder) => {
          const newOrder = origOrder.slice();
          newOrder.pop();

          if (newOrder.length === 0) {
            setIsDeactivating(false);
          }

          return newOrder;
        });
      }, 300);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isDeactivating]);

  const activateCells = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);
    // deactivate
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      setIsDeactivating(true);
    }
  };

  return (
    <div className="wrapper">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${config[0].length}, 1fr)`,
        }}
      >
        {config.flat(1).map((value, index) => {
          return value ? (
            <Cell
              key={index}
              label={`Cell ${index}`}
              filled={order.includes(index)}
              onClick={() => activateCells(index)}
              isDisabled={order.includes(index) || isDeactivating}
            />
          ) : (
            <span />
          );
        })}
      </div>
    </div>
  );
}




// 2. Grid Light Sequence (Better)

import "./App.css";
import {useState} from "react";

function Cell({filled, onClick, isDisabled, label}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={isDisabled}
      onClick={onClick}
      className={filled ? "cell cell-activated" : "cell"}
    />
  );
}

export default function App() {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deactivateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder((origOrder) => {
        const newOrder = origOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }

        return newOrder;
      });
    }, 300);
  };

  const activateCells = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);
    // deactivate
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
  };

  return (
    <div className="wrapper">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${config[0].length}, 1fr)`,
        }}
      >
        {config.flat(1).map((value, index) => {
          return value ? (
            <Cell
              key={index}
              label={`Cell ${index}`}
              filled={order.includes(index)}
              onClick={() => activateCells(index)}
              isDisabled={order.includes(index) || isDeactivating}
            />
          ) : (
            <span />
          );
        })}
      </div>
    </div>
  );
}



// 2. Grid Light Sequence Another way (simple)

// import { useEffect } from "react";
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [clickedTiles, setClickedTiles] = useState([]);
//   const [removeTiles, setRemoveTiles] = useState(false);

//   const handleClick = (i) => {
//     if (i !== 4 && !clickedTiles.includes(i)) {
//       setClickedTiles((prev) => {
//         let newTileArray = [...prev, i];
//         if (newTileArray.length === 8) {
//           setRemoveTiles(true);
//         }
//         return newTileArray;
//       });
//     }
//   };

//   useEffect(() => {
//     let interval;

//     if (removeTiles) {
//       interval = setInterval(() => {
//         setClickedTiles((prev) => {
//           if (prev.length === 0) {
//             clearInterval(interval);
//             setRemoveTiles(false);
//             return prev;
//           }
//           let newTileArray = prev.slice(0, -1);
//           return newTileArray;
//         });
//       }, 100);
//     }
//     return () => clearInterval(interval);
//   }, [removeTiles]);

//   const renderTiles = () => {
//     let cells = [];
//     for (let i = 0; i < 9; i++) {
//       cells.push(
//         <div
//           key={i}
//           className={
//             clickedTiles.includes(i) && i !== 4 ? "tile-filled" : "tile"
//           }
//           onClick={() => handleClick(i)}
//         >
//           {`${i + 1}`}
//         </div>
//       );
//     }
//     return cells;
//   };

//   return (
//     <div className="App">
//       <div className="tileHolder">{renderTiles()}</div>
//     </div>
//   );
// }

// export default App;
