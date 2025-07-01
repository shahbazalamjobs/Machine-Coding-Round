
import questions from './data';
import Accordion from './Accordion';
import './index.css';

function App() {

  return(
    <div className='container'>
      <Accordion data={questions}/>
    </div>
  );
}

export default App;
