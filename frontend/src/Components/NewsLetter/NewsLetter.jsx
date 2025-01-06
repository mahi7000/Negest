import React from 'react';
import './NewsLetter.css';

export const NewsLetter = () => {
  return (
    <div className='news-letter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter</p>
        <div className=''>
            <input type='email' placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
