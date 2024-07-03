// import { useState } from 'react';
// import questions from './data';
// import './index.css';

// function App() {
//   const [activeItem, setActiveItem] = useState(null);

//   const handleClick = (id) => {
//     setActiveItem(activeItem === id ? null : id);
//   };

//   const accordItem = questions.map((ques) => (
//     <div className='accord-item' key={ques.id} onClick={() => handleClick(ques.id)}>
//       <div className="accord-title"> 
//         <span className='title'>{ques.title}</span> 
//         <span className="button">{activeItem === ques.id ? '-' : '+'}</span> 
//       </div>
//       <div className="accord-info" style={{ display: activeItem === ques.id ? 'block' : 'none' }}>
//         {ques.info}
//       </div>
//     </div>
//   ));

//   return (
//     <div className="body">
//       <div className='accord-container'>
//         {accordItem}
//       </div>
//     </div>
//   );
// }

// export default App;


import questions from './data';
import Accordion from './Accordion';
import './index.css'

function App() {

  return (
    <div className='container'>
      <Accordion data={questions}/>
    </div>
  );
}

export default App;