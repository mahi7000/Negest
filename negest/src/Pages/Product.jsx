import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import './styles/Product.css';
import { Breadcrumb } from '../Components/Breadcrumb/Breadcrumb';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';

export const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find((e)=> e.id === Number(productId));

  return (
    <div className='product'>
      <Breadcrumb product={product}/>
      <ProductDisplay product={product}/>
      <RelatedProducts product={product}/>
    </div>
  )
}
