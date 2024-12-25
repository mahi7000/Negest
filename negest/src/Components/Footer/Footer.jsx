import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/negest-logo.png';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt='footer logo' />
            <p>negest.</p>
        </div>
        <ul className='footer-link'>
            <li>Company</li>
            <li>Products</li>
            <li>Shops</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <i className="fa-brands fa-pinterest"></i>
            </div>
            <div className='footer-icons-container'>
                <i className="fa-brands fa-instagram"></i>
            </div>
            <div className='footer-icons-container'>
            <   i className="fa-brands fa-facebook"></i>
            </div>
        </div>
        <div className='footer-copyright'>
            <p>&copy; Copyright 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}
