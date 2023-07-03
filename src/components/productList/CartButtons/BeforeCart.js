import React from 'react'
import './cartButtons.css'
import { useDispatch,useSelector } from 'react-redux'
import {addToCart } from '../../../redux/cart'
function BeforeCart({product}) {
 const dispatch= useDispatch()
  return (
    <div className='before-cart'>
       <button className='add-cart-button' onClick={()=>dispatch(addToCart(product))}>Add to cart</button>

      
    </div>
  )
}

export default BeforeCart
