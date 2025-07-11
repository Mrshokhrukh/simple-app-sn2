import React from 'react';
import CompanyInfo from './CompanyInfo';
import Button from './Button';

const CompanyCard = ({ data }) => {
  const { products, founded, headquarters, name } = data;
  return (
    <div className="border p-2 bg-slate-300 rounded m-2">
      <div>
        <div className=" flex justify-between ">
          <h1 className="text-3xl">{name}</h1>
          <Button text={'get info'} color={'blue'} />
          <Button text={'apply for job'} color={'green'} />
        </div>

        <p>founded: {founded}</p>
        <p>heads: {headquarters}</p>
        <div className="ml-1 p-1 bg-slate-400 text-white px-2">
          {products.map((item, index) => {
            return (
              <CompanyInfo
                key={index}
                users={item.users}
                platform={item.platforms[0]}
                name={item.name}
                isOfficial
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
