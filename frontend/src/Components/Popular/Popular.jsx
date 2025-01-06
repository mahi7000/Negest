import React from 'react';
import './Popular.css';
import { all_products } from '../Assets/all_products';
import { Item } from '../Item/Item';

export const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular</h1>
      <div className='scroll-container'>
        <div className='popular-item snaps-inline'>
          {all_products.map((item, i) => {
              if (item.rating > 4.5) {
                return (<Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} className='item'/>);
              }
              else {
                return null;
              }
            })}
        </div>
      </div>
    </div>
  );
};