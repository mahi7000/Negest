import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = ({ toggleSidebar }) => {
  return (
    <div className='app-header'>
        <div className="header-logo" onClick={toggleSidebar}>
            <i className='fa-solid fa-bars' aria-label='Toggle Sidebar'></i>
            <p>negest.</p>
        </div>
        <div className="search-bar">
            <input placeholder='Search'></input>
            <button type='submit'>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
        <div className="cart-profile">
            <Link to='/login' style={{ color: 'inherit' }}><button>Log In</button></Link>
            <Link to='/cart' style={{ color: 'inherit' }}><i className="fa-solid fa-cart-shopping"></i></Link>
            <i className="fa-solid fa-user"></i>
        </div>
    </div>
  )
}
