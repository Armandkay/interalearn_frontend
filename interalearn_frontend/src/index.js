import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Ensure you have an App.js file in the src directory
import './styles/global.css'; // Import your global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

