import React from 'react';
import CompanyCard from './CompanyCard';
import Parent from './Parent';

const techCompanies = [
  {
    name: 'Google',
    founded: 1998,
    headquarters: 'California, USA',
    products: [
      {
        name: 'Search',
        users: 4000000000,
        platforms: ['Web', 'Mobile'],
      },
      {
        name: 'Android',
        users: 3000000000,
        platforms: ['Phones', 'Tablets', 'TV'],
      },
    ],
    departments: [
      {
        name: 'AI Research',
        projects: [
          { name: 'Gemini', type: 'LLM' },
          { name: 'DeepMind', type: 'AGI research' },
        ],
      },
    ],
  },
  {
    name: 'Apple',
    founded: 1976,
    headquarters: 'California, USA',
    products: [
      {
        name: 'iPhone',
        users: 1300000000,
        platforms: ['iOS'],
      },
      {
        name: 'MacBook',
        users: 200000000,
        platforms: ['macOS'],
      },
    ],
  },
];

function App() {
  return (
    <div>
      {/* <Button color={'blue'} text={'submit'} handleClick={clickButtonOne} /> */}

      <Parent>
        {techCompanies.map((company, index) => {
          return <CompanyCard key={index} data={company} />;
        })}
      </Parent>
    </div>
  );
}

export default App;
