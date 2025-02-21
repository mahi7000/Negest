import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

export const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={props.image} alt={props.name} className='item-image'/></Link>
      <p className='item-name'>{props.name}</p>
      <div className='item-price'>
          {props.price} Birr
      </div>
    </div>
  )
}
