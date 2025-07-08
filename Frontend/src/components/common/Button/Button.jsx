import React from 'react';
import './Button.css';

import { useNavigate } from 'react-router-dom';


const Button = ({ text, url, className }) => {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate(url)} className={`custom-button ${className}`}>
      {text}
    </button>
  );
};

export default Button;
