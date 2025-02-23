import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Import HashRouter
import App from "./App";

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

// Wrap the App component with HashRouter
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
