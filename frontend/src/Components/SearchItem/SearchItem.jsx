import React, { useState, useEffect } from 'react';
import "./SearchItem.css";
import { Link } from 'react-router-dom';
import { all_products } from '../Assets/all_products';
import { Item } from '../Item/Item';
import { useLocation } from 'react-router-dom';

export const SearchItem = () => {
    const location = useLocation();
    const [filteredProducts, setFilteredProducts] = useState(all_products);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const query = params.get('query') || '';

        const filtered = all_products.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [location.search]);

    return (
        <div className='search-item'>
          <div className="search-back">
            <Link to={'/'} style={{ color: 'inherit'}}><i className='fa-solid fa-arrow-left'></i></Link>
            <h1>Search Results</h1>
          </div>
            <div className="related-products-item">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((item, i) => (
                        <Item 
                            key={i} 
                            id={item.id} 
                            name={item.name} 
                            image={item.image} 
                            price={item.price} 
                            className='item' 
                        />
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    );
};