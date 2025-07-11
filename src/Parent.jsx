import React from 'react';
import Child from './Child';

const Parent = ({ children }) => {
  const isLoggedIn = true;
  return (
    <div className="bg-slate-500 p-4">
      <h1 className="text-4xl text-center text-white p-3 bg-slate-600">
        Parent
      </h1>
      <Child> Child 1 </Child>
      <Child> Child 2 </Child>
      <Child> Child 3 </Child>

      <div>
        {isLoggedIn ? (
          children
        ) : (
          <p className="text-4xl text-center text-red-400">Login qiling !</p>
        )}
      </div>
    </div>
  );
};

export default Parent;
