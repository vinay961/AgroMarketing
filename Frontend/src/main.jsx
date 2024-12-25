import React from 'react';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Wrap App with BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
