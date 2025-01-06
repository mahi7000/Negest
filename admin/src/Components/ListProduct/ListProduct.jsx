import React, { useEffect, useState } from 'react';
import './ListProduct.css';

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allproducts')
      .then((resp) => resp.json())
      .then((data)=>{setAllProducts(data)});
  };

  useEffect(()=>{
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    await fetch('http://localhost:4000/removeproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: id})
    })
    await fetchInfo();
  }

  return (
    <div className='list-product'>
      <h1>All Products</h1>
      <div className="list-product-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Category</p>
        <p></p>
      </div>
      <div className="list-product-all-products">
        <hr />
        {allProducts.map((product, i)=>{
          return <div key={i} className='list-product-format-main list-product-format'>
            <img src={product.image} alt="" className="list-product-item" />
            <p>{product.name}</p>
            <p>{product.price} Birr</p>
            <p>{product.category}</p>
            <i onClick={() => {removeProduct(product.id)}} className='fa-solid fa-close'></i>
          </div>
        })}
      </div>
    </div>
  )
}

export default ListProduct