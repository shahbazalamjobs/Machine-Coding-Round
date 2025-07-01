//App.js

import React, { useState } from 'react';
import './App.css';

const App = () => {
    // State to keep track of the like status
    const [liked, setLiked] = useState(false);

    // Toggle like status
    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <button
            onClick={toggleLike}
            className={`like-button ${liked ? 'liked' : ''}`}
        >
            {liked ? ' Liked' : '♡ Like'}
        </button>
    );
};

export default App;