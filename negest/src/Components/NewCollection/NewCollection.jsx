import React from 'react';
import './NewCollection.css';
import { all_products } from '../Assets/all_products';
import { Item } from '../Item/Item';

export const NewCollection = () => {
  return (
    <div className='new-collection'>
      <h1>New In</h1>
      <div className='scroll-container'>
        <div className='new-collection-item snaps-inline'>
          {all_products.slice(5, 10).map((item, i) => (
            <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} className='item' />
          ))}
        </div>
      </div>
    </div>
  );
};