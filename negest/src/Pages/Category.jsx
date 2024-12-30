import React, { useContext } from 'react';
import './styles/Category.css'
import { ShopContext } from '../Context/ShopContext';
import { Item } from '../Components/Item/Item';
import { Banner } from '../Components/Banner/Banner';

export const Category = (props) => {
  const {all_products} = useContext(ShopContext);

  return (
    <div className='category'>
      <Banner category={props.category}/>
      <div className="category-index">
        <div className="category-sort">
          Sort by <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>
      <div className="category-products">
        {all_products.map((item, i) => {
          if (props.category === item.category) {
            return (<Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} className='item'/>);
          }
          else {
            return null;
          }
        })}
      </div>
    </div>
  )
}
