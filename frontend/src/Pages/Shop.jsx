import React from 'react';
import { Hero } from '../Components/Hero/Hero';
import { Popular } from '../Components/Popular/Popular';
import { NewCollection } from '../Components/NewCollection/NewCollection';

export const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <NewCollection />
    </div>
  )
}
