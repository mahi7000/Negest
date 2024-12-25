import React from 'react';
import './Item.css';

export const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt={props.name} className='item-image'/>
        <p className='item-name'>{props.name}</p>
        <div className='item-price'>
            {props.price} Birr
        </div>
    </div>
  )
}
