import React from 'react';
import '../App.css';
import DormeterCard from './Cards/DormeterCard';
import ExcellenceCard from './Cards/ExcellenceCard';
import CrimeLiteCard from './Cards/CrimeLiteCard';
import KnowItAllCard from './Cards/KnowItAllCard';


function Showcase() {
  return (
    <div className='Showcase'>
      <h1>Showcase of my personal projects</h1>
      <ul>
        <li><DormeterCard /></li>
        <li><ExcellenceCard /></li>
        <li><CrimeLiteCard /></li>
        <li><KnowItAllCard /></li>
      </ul>
    </div>
  );
};

export default Showcase;
