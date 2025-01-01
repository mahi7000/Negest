import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';

export const CartItems = () => {
    const {all_products, cartItem, removeFromCart, removeFromCartTotally, addToCart, getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className='cart-items'>
        <h1>Cart</h1>
        <div className="cart-items-products">
          <div className="cart-items-products-left">
            <div className="cart-items-products-menu">
              <p className='cart-product-menu'>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p></p>
            </div>
            {all_products.map((e, i) => {
              if (cartItem[e.id] > 0) {
                return (
                  <div key={i}>
                    <div className="cart-items-added cart-items-products-menu">
                      <div className="cart-items-product-description">
                        <Link to={`/product/${e.id}`}><img src={e.image} alt='cart-product' className='cart-item-product-image' /></Link>
                        <p>{e.name}</p>
                      </div>
                      <p>{e.price} Birr</p>
                      <button className='cart-items-quantity'>
                        <i className='fa-solid fa-plus' onClick={() => {addToCart(e.id)}}></i>
                        <p>{cartItem[e.id]}</p>
                        <i className='fa-solid fa-minus' onClick={() => {removeFromCart(e.id)}}></i>
                      </button>
                      <p>{e.price * cartItem[e.id]}</p>
                      <i className='fa-solid fa-close' onClick={() => {removeFromCartTotally(e.id)}}></i>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="cart-items-products-right">
            <h2>Order Summary</h2>
            <div className="subtotal-shipping">
              <div className="titles">
                <p>Subtotal</p>
                <p>Shipping</p>
              </div>
              <div className="amount">
                <p>{getTotalCartAmount()} Birr</p>
                <p>Free</p>
              </div>
            </div>
            <div className="total-amount">
              <p>Total</p>
              <p>{getTotalCartAmount()} Birr</p>
            </div>
            <button>Checkout</button>
          </div>
        </div>
    </div>
  )
}
