import React, { createContext, useState } from 'react';
import { all_products } from '../Components/Assets/all_products';

export const ShopContext = createContext(null);

const getDefautltCart = () => {
    let cart = {};
    for (let index = 0; index < all_products.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefautltCart());

    console.log(cartItem);

    const addToCart = (itemId) => {
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item))
                totalAmount += itemInfo.price * cartItem[item];
            }
            return totalAmount;
        }
    }

    const contextVal = {all_products, cartItem, removeFromCart, addToCart, getTotalCartAmount};

    return (
        <ShopContext.Provider value={contextVal}>
            {props.children}
        </ShopContext.Provider>
    )
}