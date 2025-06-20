import React, { useEffect, useState } from 'react';
import './Popular.css';
import { Item } from '../Item/Item';

export const Popular = () => {
  const [popular, setPopular] = useState([]);
  const BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${BASE_URL}/popular`)
    .then((response) => response.json())
    .then((data) => setPopular(data))
  }, [])

  return (
    <div className='popular'>
      <h1>Popular</h1>
      <div className='scroll-container'>
        <div className='popular-item snaps-inline'>
          {popular.map((item, i) => {
              return (<Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} className='item'/>);
            })}
        </div>
      </div>
    </div>
  );
};