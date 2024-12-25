import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import {SidebarData} from './SidebarData';

export const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate();

  const handleMenuClick = (link) => {
    navigate(link);
  }
  return (
    <div className={`sidebar ${isOpen? 'open' : 'closed'}`}>
      <ul className='sidebar-list'>
        {SidebarData.map((val, key) => {
          return (
            <li
              className='row'
              id={window.location.pathname === val.link ? 'active' : 'inactive'}
              key={key}
              onClick={() => handleMenuClick(val.link)}>
              <div id='icon'>{val.icon }</div>
              <div id='title'>{val.title}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
