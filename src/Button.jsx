import React from 'react';

const Button = (props) => {
  return (
    <button
      onClick={props.handleClick}
      className={`cursor-pointer px-3 py-1 
        bg-${props.color}-400 
        rounded-full text-md 
        text-white border m-1
        border-${props.color}-800 
        hover:bg-${props.color}-500`}
    >
      {props.text}
    </button>
  );
};

export default Button;
