import React from 'react';
import './stylesheet.css';

const Button = ({ text, onClick, className = '', ...props }) => {
  return (
    <button 
      className={`common-button ${className}`} 
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
