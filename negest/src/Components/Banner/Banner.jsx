import React from 'react';
import './Banner.css';
import { SidebarData } from '../Sidebar/SidebarData';

export const Banner = ({ category }) => {
  return (
    <div className='banner'>
      {
        SidebarData.map((item, i) => {
          if (item.category === category) {
            return (
              <div className='ban' key={i}>
                <div className="banner-left">
                  <h1>{item.title}</h1>
                </div>
                <div className="banner-right">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            );
          }
          return null;
        })
      }
    </div>
  );
};