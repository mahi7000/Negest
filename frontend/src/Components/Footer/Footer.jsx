import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/negest-logo.png';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="row">
            <div className="col">
                <div className='footer-logo'>
                    <img src={footer_logo} alt='footer logo' />
                    <p>negest.</p>
                </div>
                <p>
                    Negest is a contemporary women's clothing 
                    brand that blends elegance and empowerment. 
                    We offer stylish, comfortable apparel that 
                    celebrates individuality, with a commitment 
                    to sustainability and ethical practices.
                </p>
            </div>
            <div className="col">
                <h3>Office</h3>
                <p>Addis Ababa, Ethiopia</p>
                <p>negest@gmail.com</p>
                <h4>+251944352566</h4>
            </div>
            <div className="col">
                <h3>Links</h3>
                <ul>
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
                        <i className="fa-brands fa-facebook"></i>
                    </div>
                </div>
            </div>
            <div className="col">
                <h3>Newsletter</h3>
                <form>
                    <i className='fa-solid fa-envelope'></i>
                    <input type='email' placeholder='Your Email' required />
                    <button type='submit'><i className='fa-solid fa-arrow-right'></i></button>
                </form>
            </div>
        </div>
        <div className='footer-copyright'>
            <p>&copy; Copyright 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}
