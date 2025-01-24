
import React from 'react';
import './Button.css';

const Button = ({ backgroundColor, onClick, children ,color,borderRadius = '5px' ,cursor}) => {
  return (
    <button 
    className="custom-button" 
      onClick={onClick} 
      style={{ color:color,backgroundColor: backgroundColor, padding: '10px 20px', border: 'none', borderRadius:borderRadius ,cursor:cursor }}
    >
      {children}
    </button>
  );
};

export default Button;

