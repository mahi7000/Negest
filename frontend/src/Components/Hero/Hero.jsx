import React from 'react';
import './Hero.css';
import hero from '../Assets/hero.png';

export const Hero = () => {
  return (
    <div className='hero-section'>
      <div className='hero-left'>
        <h1>negest.</h1>
        <h2>For Your Fashion Emergencies</h2>
        <button>Start Shopping</button>
      </div>
      <div className='hero-right'>
        <img src={ hero } alt='negest-hero-image' />
      </div>
    </div>
  )
}
