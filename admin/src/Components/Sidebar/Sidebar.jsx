import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{ textDecoration: "none", color: 'inherit'}}>
            <div className="sidebar-item">
                <i className='fa-solid fa-add icon'></i>
                <p className='title'>Add Product</p>
            </div>
        </Link>
        <Link to={'/listproduct'} style={{ textDecoration: "none", color: 'inherit'}}>
            <div className="sidebar-item">
                <i className='fa-solid fa-list icon'></i>
                <p className='title'>List Product</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar