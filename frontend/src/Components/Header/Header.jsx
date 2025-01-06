import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

export const Header = ({ toggleSidebar }) => {
    const location = useLocation();
    const history = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchTerm) {
            history(`/search?query=${encodeURIComponent(searchTerm)}`);
            setSearchTerm('');
        }
    };

    return (
        <div className='app-header'>
            <div className="header-logo" onClick={toggleSidebar}>
                <i className='fa-solid fa-bars' aria-label='Toggle Sidebar'></i>
                <p>negest.</p>
            </div>
            <div className="search-bar">
                <form onSubmit={handleSearchSubmit}>
                    <input 
                        placeholder='Search' 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type='submit'>
                        {location.pathname === '/search' ? (
                            <i className='fa-solid fa-close' onClick={() => {history(-1)}}></i>
                        ) : (
                            <i className="fa-solid fa-magnifying-glass"></i>
                        )}
                    </button>
                </form>
            </div>
            <div className="cart-profile">
                {
                    localStorage.getItem('auth-token')
                    ? <button onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}}>Log Out</button>
                    : <Link to='/login' style={{ color: 'inherit' }}>
                    <button>Log In</button>
                    </Link>
                }
                <Link to='/cart' style={{ color: 'inherit' }}>
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>
                <i className="fa-solid fa-user"></i>
            </div>
        </div>
    );
};