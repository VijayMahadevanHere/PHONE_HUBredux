import{configureStore} from '@reduxjs/toolkit'
import cartSlice from '../redux/cart'

export const Store=configureStore({

    reducer:{
        cart:cartSlice
    }

   
})