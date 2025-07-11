import React from 'react';

const Child = ({ children }) => {
  return (
    <div className="border border-slate-300 p-3 rounded m-2 text-white">
      <h1>{children}</h1>
    </div>
  );
};

export default Child;
