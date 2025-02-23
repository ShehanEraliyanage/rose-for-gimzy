import React, { useState } from "react";
import "./App.css";

function App() {
  const [flowers, setFlowers] = useState([]);

  // Array of different rose types
  const roseTypes = ["🌹", "💐", "🌹", "🌷"];

  const addFlower = () => {
    // Randomly select a rose type
    const randomRose = roseTypes[Math.floor(Math.random() * roseTypes.length)];
    setFlowers([...flowers, randomRose]);
  };

  return (
    <div className="App">
      <h1>For My Love, Gimzy 💖</h1>
      <button onClick={addFlower}>Click for a Rose 🌹</button>
      <div className="flowers-container">
        {flowers.map((flower, index) => (
          <span key={index} className="flower">
            {flower}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
