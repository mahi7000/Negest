import React from 'react';
import './RelatedProducts.css';
import { all_products } from '../Assets/all_products';
import { Item } from '../Item/Item';

export const RelatedProducts = (props) => {
    const {product} = props;
  return (
    <div className='related-products'>
        <h1>Related Products</h1>
        <div className="related-products-item">
            {
                all_products.map((item, i) => {
                    if (product.category === item.category && product.id !== item.id) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} className='item' />
                    }
                    return null;
                })
            }
        </div>
    </div>
  )
}
