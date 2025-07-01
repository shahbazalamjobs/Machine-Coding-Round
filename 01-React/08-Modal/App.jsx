import React, { useState } from "react";
import Modal from "./Modal";
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  
  return (
    <div className="App">
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Custom Modal</h2>
        <p>This is a reusable modal component!</p>
      </Modal>
    </div>
  );
}

export default App;
