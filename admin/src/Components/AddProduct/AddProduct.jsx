import React, { useState } from 'react'
import './AddProduct.css'
import { CategoryData } from '../../assets/CategoryData'

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "bags",
    price: "",
  })

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  }
  const changeHandler = (e) => {
    setProductDetails({...productDetails, [e.target.name]:e.target.value})
  }
  const AddProduct = async () => {
    console.log(productDetails)
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    }).then((resp) => resp.json()).then((data) => {responseData = data});

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          "Content-Type": 'application/json',
        },
        body: JSON.stringify(product),
      }).then((resp) => {resp.json()}).then((data)=>{
        data.success ? alert("Product Added") : alert("Failed");
      })
    }
  }

  return (
    <div className='add-product'>
      <div className="addproduct-item-field">
        <p>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Add name'></input>
      </div>
      <div className="addproduct-price">
        <div className="addproduct-item-field">
          <p>Product Price</p>
          <input value={productDetails.price} onChange={changeHandler} type='text' name='price' placeholder='Add Price'></input>
        </div>
      </div>
      <div className="addproduct-item-field">
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} name='category' className='addproduct-selector'>
          {
            CategoryData.map((category, i) => {
              return <option key={i} value={category.category}>{category.title}</option>
            })
          }
        </select>
      </div>
      <div className="addproduct-item-field">
        <p>Product Image</p>
        <div className="product-image-border">
          <label htmlFor='file-input'>
            {
              (image? <img src={URL.createObjectURL(image)}></img>:             <i className='fa-solid fa-upload'></i>
            )
            }
          </label>
          <input onChange={imageHandler} type="file" name='image' id='file-input' hidden/>
        </div>
        <button onClick={() => {AddProduct()}} className='addproduct-btn'>Add Product</button>
      </div>
    </div>
  )
}

export default AddProduct