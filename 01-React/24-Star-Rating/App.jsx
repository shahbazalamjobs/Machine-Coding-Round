import React, { useState } from 'react';
import './App.css';


const StarRating = ({ totalStars = 5, onRate }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    if (onRate) onRate(value);
  };

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={`star ${starValue <= (hover || rating) ? 'filled' : ''}`}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};



function App() {
  const handleRating = (rate) => {
    console.log(`Rated: ${rate} star(s)`);
  };

  return (
    <div>
      <h2>Rate this product:</h2>
      <StarRating totalStars={5} onRate={handleRating} />
    </div>
  );
}

export default App;
