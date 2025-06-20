import React, { createContext, useEffect, useState } from 'react';

export const ShopContext = createContext(null);
const BASE_URL = process.env.REACT_APP_API_URL;

const getDefautltCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [all_products, set_all_products] = useState([]);
    const [cartItem, setCartItem] = useState(getDefautltCart());

    useEffect(() => {
        fetch(`${BASE_URL}/allproducts`)
        .then((response) => response.json())
        .then((data) => set_all_products(data))

        if (localStorage.getItem('auth-token')) {
            fetch(`${BASE_URL}/getcart`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: "",
            }).then((response) => response.json())
            .then((data) => setCartItem(data));
        }
    }, [])

    console.log(cartItem);

    const addToCart = (itemId) => {
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if (localStorage.getItem('auth-token')) {
            console.log(localStorage.getItem('auth-token'));
            fetch(`${BASE_URL}/addtocart`, {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "itemId" : itemId,
                })
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if (localStorage.getItem('auth-token')) {
            console.log(localStorage.getItem('auth-token'));
            fetch(`${BASE_URL}/removefromcart`, {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "itemId" : itemId,
                })
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error))
        }
    }

    const removeFromCartTotally = (itemId) => {
        setCartItem((prev)=>({...prev,[itemId]:0}))
        if (localStorage.getItem('auth-token')) {
            console.log(localStorage.getItem('auth-token'));
            fetch(`${BASE_URL}/removefromcarttotally`, {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "itemId" : itemId,
                })
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error))
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item))
                totalAmount += itemInfo.price * cartItem[item];
            }
        }
        return totalAmount;
    }

    const contextVal = {all_products, cartItem, removeFromCart, removeFromCartTotally, addToCart, getTotalCartAmount};

    return (
        <ShopContext.Provider value={contextVal}>
            {props.children}
        </ShopContext.Provider>
    )
}