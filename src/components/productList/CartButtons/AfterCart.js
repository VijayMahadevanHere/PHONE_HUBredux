import React, { useState } from 'react'
import './cartButtons.css'
import { useDispatch} from 'react-redux'
import { increment,decrement } from '../../../redux/cart'


function AfterCart({product,cartCount}) {
  const dispatch=useDispatch()
  return (
    <div className='after-cart'>
        <button className='cart-counter-button' onClick={()=>dispatch(decrement(product))}>-</button>
        <div className='cart-count'>{cartCount}</div>
        <button className='cart-counter-button'onClick={()=>dispatch(increment(product))}>+</button>
      
    </div>
  )
}

export default AfterCart
