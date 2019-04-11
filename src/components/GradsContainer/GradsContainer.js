import React from 'react';

import CardsContainer from './CardsContainer';
import TrackFilter from './TrackFilter';

const testGradsList = [
  {
    location: 'Nashville',
    name: 'Billy Ray',
    relocation: false,
    skills: ['JavaScript', 'React', 'Redux'],
    track: 'Full-Stack Web'
  },
  {
    location: 'California',
    name: 'Hannah Montana',
    relocation: true,
    skills: ['Python', 'Jupyter', 'Pandas'],
    track: 'Data Science'
  }
];

const GradsContainer = () => {
  return (
    <>
      <TrackFilter />
      <CardsContainer gradsList={testGradsList} />
    </>
  );
};

export default GradsContainer;
