
import { useState } from 'react';

function Accordion({ data }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (id) => {
        setActiveIndex(activeIndex === id ? null : id);
    }

    const AccordItems = data.map((item) => (
        <div className='accord-item'
        onClick={() => handleClick(item.id)}
        key={item.id}
        >
            <div className='accord-title'>
                <span>{item.title}</span>
                <span>{activeIndex === item.id ? '-' : '+'}</span>
            </div>
            <div className="accord-info">
                {activeIndex === item.id ? item.info : " "}
            </div>
        </div>
    ));

    return (
        <div className='accordion'>
            {AccordItems}
        </div>
    )
}

export default Accordion;
