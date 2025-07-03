import React, { useState } from 'react';
import Pagination from './Pagination';
import './App.css';

const App = () => {
  const itemsPerPage = 5;
  const data = Array.from({ length: 42 }, (_, i) => `Item ${i + 1}`);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="app">
      <h2>Pagination Example</h2>
      <ul>
        {currentItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default App;
