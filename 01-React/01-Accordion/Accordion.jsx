//  1


import { useState } from "react";

function Accordion({ data }) {

    const handleClick = (id) => {
        setActiveIndex(activeIndex === id ? null : id);
    }

    const [activeIndex, setActiveIndex] = useState(null);

    const accordItem = data.map((item) => (
        <div className="accord-item"
            key={item.id}
            onClick={() => handleClick(item.id)}
        >
            <div className="accord-title">
                <span>{item.title}</span>
                <span>{activeIndex === item.id ? '-' : '+'}</span>
            </div>
            <div className="accord-info">
                {activeIndex === item.id ? item.info : null}
            </div>
        </div>
    ));

    return (
        <div className="accordion">
            {accordItem}
        </div>
    );
}

export default Accordion;




// 2

// import React, { useState } from 'react';
// import './styles.css';

// const Accordion = ({ items }) => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleItemClick = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="accordion">
//       {items.map((item, index) => (
//         <div key={index} className="accordion-item ">
//           <div
//             className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
//             onClick={() => handleItemClick(index)}
//           >
//             {item.title}
//             <span className="accordion-icon">
//               {activeIndex === index ? '−' : '+'}
//             </span>
//           </div>
//           {activeIndex === index && (
//             <div className="accordion-content">{item.content}</div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// // Usage example
// const App = () => {
//   const accordionItems = [
//     {
//       title: 'Section 1',
//       content: 'Content for section 1 goes here.'
//     },
//     {
//       title: 'Section 2',
//       content: 'Content for section 2 goes here.'
//     },
//     {
//       title: 'Section 3',
//       content: 'Content for section 3 goes here. Content for section 3 goes here.Content for section 3 goes here.Content for section 3 goes here.Content for section 3 goes here.Content for section 3 goes here.Content for section 3 goes here. Content for section 3 goes here. Content for section 3 goes here.Content for section 3 goes here.Content for section 3 goes here.Content for section 3 goes here.Content for section 3 goes here.Content for section 3 goes here.Content for section 3 goes here. Content for section 3 goes here.Content for section 3 goes here.Content for section 3 goes here.Content for section 3 goes here.Content for section 3 goes here.Content for section 3 goes here.'
//     }
//   ];

//   return <Accordion items={accordionItems} />;
// };

// export default App;

{/* <style>
.accordion {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.accordion-item {
  border: 1px solid #ddd;
  margin-bottom: 8px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.accordion-header {
  width: 100%;
  padding: 12px 16px;
  background-color: #f5f5f5;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s ease;
}

.accordion-header:hover {
  background-color: #e9e9e9;
}

.accordion-header.active {
  background-color: #e0e0e0;
}

.accordion-icon {
  font-weight: bold;
  font-size: 1.2em;
  position: absolute;
  right: 12px;
}

.accordion-content {
  padding: 16px;
  background-color: white;
}
</style> */}