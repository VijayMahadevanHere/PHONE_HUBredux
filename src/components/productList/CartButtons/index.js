import React, { useMemo } from 'react'
import BeforCart from './BeforeCart'
import AfterCart from './AfterCart'
import {useSelector} from 'react-redux'
const CartButtons = ({product}) => {
const {cartList}=useSelector((state)=>state.cart)

const cartCount=useMemo(()=>{
  return cartList?.find((item)=>item?.id===product?.id)?.count
},[cartList])


  return (
    <>
    {cartCount > 0 ?<AfterCart cartCount={cartCount} product={product}/> : <BeforCart product={product}/>  
  }
     </>
  )
}

export default CartButtons
