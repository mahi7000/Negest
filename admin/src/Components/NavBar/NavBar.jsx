import React from 'react';
import './NavBar.css';
import logo from '../../assets/negest-logo.png'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-logo">
            <img src={logo} alt='navbar logo' />
            <div className="navbar-admin-logo">
                <p>negest.</p>
                <small>Admin Panel</small>
            </div>
        </div>
        <i className="fa-solid fa-user"></i>
    </div>
  )
}

export default NavBar