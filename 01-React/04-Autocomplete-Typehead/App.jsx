import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const sampleSuggestions = [
  'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig',
  'Grape', 'Honeydew', 'Kiwi', 'Lemon', 'Mango', 'Nectarine',
  'Orange', 'Papaya', 'Quince', 'Raspberry', 'Strawberry', 'Tangerine',
  'Ugli fruit', 'Vanilla', 'Watermelon', 'Xigua', 'Yellow Passion Fruit', 'Zucchini',
  'Apricot', 'Blackberry', 'Cantaloupe', 'Dragonfruit', 'Eggfruit', 'Feijoa',
  'Guava', 'Hackberry', 'Indian Fig', 'Jackfruit', 'Kumquat', 'Lychee',
  'Mulberry', 'Naranjilla', 'Olive', 'Peach', 'Pear', 'Pineapple',
  'Plum', 'Pomegranate', 'Rambutan', 'Salak', 'Satsuma', 'Tamarind',
  'Tomato', 'Uva Ursi', 'Velvet Apple', 'White Currant', 'Yuzu', 'Ziziphus'
];

function Autocomplete() {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debounceTimeout = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      const trimmedValue = value.trim();
      if (trimmedValue.length > 0) {
        const filtered = sampleSuggestions.filter((suggestion) =>
          suggestion.toLowerCase().includes(trimmedValue.toLowerCase())
        );
        setFilteredSuggestions(filtered);
        setShowSuggestions(true);
      } else {
        setFilteredSuggestions([]);
        setShowSuggestions(false);
      }
    }, 400);
  };

  const handleSelect = (value) => {
    setInputValue(value);
    setShowSuggestions(false);
  };

  useEffect(() => {
    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, []);

  return (
    <div className="autocomplete-container">
      <input
        type="text"
        className="autocomplete-input"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type to search..."
        autoComplete="off"
      />
      {showSuggestions && (
        <ul className="autocomplete-suggestions">
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="autocomplete-suggestion"
                onClick={() => handleSelect(suggestion)}
              >
                {suggestion}
              </li>
            ))
          ) : (
            <li className="autocomplete-no-results">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default Autocomplete;
