// 1) advance drag and drop 

// import React, { useState } from "react";

// const DndComponent = () => {
//   const [dragItem, setDragItem] = useState(null);
//   const [listA, setListA] = useState(["Item 1", "Item 2", "Item 3"]);
//   const [listB, setListB] = useState(["Item 4", "Item 5"]);

//   const handleDragStart = (item, from) => {
//     setDragItem({ item, from });
//   };

//   const handleDrop = (toListSetter, toListName) => {
//     if (dragItem && dragItem.from !== toListName) {
//       toListSetter((prev) => [...prev, dragItem.item]);

//       if (dragItem.from === "A") {
//         setListA((prev) => prev.filter((i) => i !== dragItem.item));
//       } else {
//         setListB((prev) => prev.filter((i) => i !== dragItem.item));
//       }

//       setDragItem(null);
//     }
//   };

//   const allowDrop = (e) => e.preventDefault();

//   return (
//     <div className="dnd-wrapper">
//       <div
//         className="dnd-list"
//         onDragOver={allowDrop}
//         onDrop={() => handleDrop(setListA, "A")}
//       >
//         <h4>List A</h4>
//         {listA.map((item) => (
//           <div
//             key={item}
//             className="dnd-item"
//             draggable
//             onDragStart={() => handleDragStart(item, "A")}
//           >
//             {item}
//           </div>
//         ))}
//       </div>

//       <div
//         className="dnd-list"
//         onDragOver={allowDrop}
//         onDrop={() => handleDrop(setListB, "B")}
//       >
//         <h4>List B</h4>
//         {listB.map((item) => (
//           <div
//             key={item}
//             className="dnd-item"
//             draggable
//             onDragStart={() => handleDragStart(item, "B")}
//           >
//             {item}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DndComponent;




// 2) Simple Drag and drop

import React, { useState } from "react";

const DndComponent = () => {
  const [items, setItems] = useState([
    "First Item",
    "Second Item",
    "Third Item",
    "Fourth Item"
  ]);

  const [dragIndex, setDragIndex] = useState(null);

  const handleDragStart = (index) => {
    setDragIndex(index);
  };

  const handleDrop = (dropIndex) => {
    if (dragIndex === null || dragIndex === dropIndex) return;

    const updatedItems = [...items];
    const draggedItem = updatedItems.splice(dragIndex, 1)[0];
    updatedItems.splice(dropIndex, 0, draggedItem);
    setItems(updatedItems);
    setDragIndex(null);
  };

  const allowDrop = (e) => e.preventDefault();

  return (
    <div className="dnd-list">
      {items.map((item, index) => (
        <div
          key={index}
          className="dnd-list-item"
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={allowDrop}
          onDrop={() => handleDrop(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default DndComponent;
