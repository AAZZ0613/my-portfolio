/*index.js*/
/*Student name: Rui Sun */
/*Student Number: 301480676*/
/*Date: 2025-02-02*/
// Import the necessary React library for creating components
import React from 'react';

// Import the ReactDOM library for rendering the application
import ReactDOM from 'react-dom/client';

// Import the main application component
import App from './App';

// Import the global stylesheet for the application
import './assets/main.css';

// Create a root element to render the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element within React's StrictMode
// StrictMode helps detect potential issues in an application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
