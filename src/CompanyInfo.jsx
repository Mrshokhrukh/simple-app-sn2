import React from 'react';

const CompanyInfo = ({ users, platform, name }) => {
  return (
    <div className={`p-2 flex flex-wrap`}>
      <p className="p-2 flex-1 min-w-[200px] text-center bg-slate-500 rounded m-1 hover:bg-slate-300 hover:text-gray-800">
        users: {users}
      </p>
      <p className="p-2 flex-1 min-w-[200px] text-center bg-slate-500 rounded m-1 hover:bg-slate-300 hover:text-gray-800">
        product name: {name}
      </p>
      <p className="p-2 flex-1 min-w-[200px] text-center bg-slate-500 rounded m-1 hover:bg-slate-300 hover:text-gray-800">
        platform: {platform}
      </p>
    </div>
  );
};

export default CompanyInfo;
