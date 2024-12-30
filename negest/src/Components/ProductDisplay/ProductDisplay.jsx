import React, { useContext } from 'react';
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='product-display'>
        <div className="product-display-left">
            <div className="product-display-image">
                <img src={product.image} alt={product.name} />
            </div>
        </div>
        <div className="product-display-right">
            <h1>{product.name}</h1>
            <div className="product-display-rating">
               <i className='fa-solid fa-star full'></i> 
               <i className='fa-solid fa-star full'></i> 
               <i className='fa-solid fa-star full'></i> 
               <i className='fa-solid fa-star full'></i> 
               <i className='fa-solid fa-star empty'></i> 
               <p>(130)</p>
            </div>
            <div className="product-display-price">
                <p>{product.price} Birr</p>
            </div>
            <div className="product-display-description">
                <p>{product.description}</p>
            </div>
            <div className="product-display-size">
                <h2>Select Size</h2>
                <div className="product-display-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={() => {addToCart(product.id)}}>Add to Cart</button>
            <div className="product-display-tags-category">
                <div className='product-display-category'>Category: {product.category}</div>
                <span className='product-display-tags'>Tags: {product.tags.map((tag, i) => {
                    return <span key={i}>{tag}{i < product.tags.length - 1 ? ', ' : ''}</span>
                })}</span>
            </div>
        </div>
    </div>
  )
}
