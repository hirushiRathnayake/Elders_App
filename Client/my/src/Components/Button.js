import React from 'react';

const Button = ({ onClick, text, type }) => {
  return (
    <button onClick={onClick} className={`btn ${type}`}>
      {text}
    </button>
  );
};

export default Button;
