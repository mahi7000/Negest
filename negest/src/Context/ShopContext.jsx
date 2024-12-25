import React, { createContext } from 'react';
import { all_products } from '../Components/Assets/all_products';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const contextVal = {all_products};

    return (
        <ShopContext.Provider value={contextVal}>
            {props.children}
        </ShopContext.Provider>
    )
}