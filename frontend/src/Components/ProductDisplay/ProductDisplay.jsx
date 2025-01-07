import React, { useContext, useState } from 'react';
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const [clicked, setClicked] = useState(false);
    const [chooseSize, setChooseSize] = useState('');

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
                    <div onClick={() => {setChooseSize('small')}} className={chooseSize === 'small' ? 'chosen': ''}>S</div>
                    <div onClick={() => {setChooseSize('medium')}} className={chooseSize === 'medium' ? 'chosen': ''}>M</div>
                    <div onClick={() => {setChooseSize('large')}} className={chooseSize === 'large' ? 'chosen': ''}>L</div>
                    <div onClick={() => {setChooseSize('xlarge')}} className={chooseSize === 'xlarge' ? 'chosen': ''}>XL</div>
                    <div onClick={() => {setChooseSize('xxlarge')}} className={chooseSize === 'xxlarge' ? 'chosen': ''}>XXL</div>
                </div>
            </div>
            <button onClick={() => {addToCart(product.id); setClicked(true);}} className={clicked? 'cart-clicked': ''}>Add to Cart</button>
            <div className="product-display-tags-category">
                <div className='product-display-category'>Category: {product.category}</div>
                <span className='product-display-tags'>Tags: chique, cool, leather</span>
            </div>
        </div>
    </div>
  )
}
