import React from 'react';

const Button = ({ color, text }) => {
  const colors = ['green', 'blue', 'red', 'orange', 'black'];

  const colorPick = (clr) => {
    const index = colors.findIndex((cl) => cl == clr);
    return `bg-${colors[index]}-400`;
  };

  return (
    <button
      className={`cursor-pointer px-3 py-1 
        ${colorPick(color)}
        rounded-full text-md 
        text-white border m-1
        border-${color}-800 
        hover:bg-${color}-500`}
    >
      {text}
    </button>
  );
};

export default Button;
