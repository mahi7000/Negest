import React, { useEffect, useState } from 'react';
import './NewCollection.css';
import { Item } from '../Item/Item';

export const NewCollection = () => {
  const [newin, setNewin] = useState([]);
  const BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${BASE_URL}/newin`)
    .then((response) => response.json())
    .then((data) => setNewin(data));
  }, [BASE_URL])

  return (
    <div className='new-collection'>
      <h1>New In</h1>
      <div className='scroll-container'>
        <div className='new-collection-item snaps-inline'>
          {newin.map((item, i) => (
            <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} className='item' />
          ))}
        </div>
      </div>
    </div>
  );
};