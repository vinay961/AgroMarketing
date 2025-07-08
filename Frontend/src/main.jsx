import React from 'react';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { CartProvider } from './services/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
