import React from 'react';
import './Breadcrumb.css';

export const Breadcrumb = (props) => {
    const {product} = props;
  return (
    <div className='breadcrumb'>
        home <i className="fa-solid fa-angles-right"></i> shop <i className="fa-solid fa-angles-right"></i> {product.category} <i className="fa-solid fa-angles-right"></i> {product.name}
    </div>
  )
}
