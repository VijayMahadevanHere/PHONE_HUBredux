import React, { useState } from 'react'
import './productsList.css'
import products from '../../api/products.json'
import './productsList.css'
import CartButtons from './CartButtons'
function ProductList() {

  
  return (
   <section className='container' >

    {products?.map((product,key)=>(
    <div className='product-container' key={key}>
    <img src={product?.image}/>
    <h3>
        {product?.title}
    </h3>
   <CartButtons product={product}/>
    </div>
    ))}

   </section>
  )
}

export default ProductList
