// 1) Normal Dropdown

import React, { useState } from 'react';

const Dropdown = () => {
  const [selected, setSelected] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {selected || 'Select an option'}
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </div>

      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option) => (
            <li
              key={option}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;





// 2) Advance Dropdown closes when clicked outside


// import React, { useState, useRef, useEffect } from 'react';

// const Dropdown = () => {
//   const [selected, setSelected] = useState('');
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const options = ['Option 1', 'Option 2', 'Option 3'];

//   const handleSelect = (option) => {
//     setSelected(option);
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="dropdown-container" ref={dropdownRef}>
//       <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
//         {selected || 'Select an option'}
//         <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
//       </div>

//       {isOpen && (
//         <ul className="dropdown-list">
//           {options.map((option) => (
//             <li
//               key={option}
//               className="dropdown-item"
//               onClick={() => handleSelect(option)}
//             >
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Dropdown;
