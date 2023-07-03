import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';


 export const fetchUser=createAsyncThunk('cart/fetchUser',async(id)=>{

    let result=await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    return result.data
})



const initialState={
    cartList:[],
   userDetails:[]

}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        increment:(state,action)=>{
         
          
           state.cartList.forEach(item => {
            if(item.id===action.payload.id){
                item.count+=1
            }
           });

        },
        decrement:(state,action)=>{
            state.cartList.forEach(item => {
                if(item.id===action.payload.id){
                    item.count-=1
                }
               })
        },
        addToCart:(state,action)=>{
            const itemExist=state.cartList.find((item)=>item.id===action.payload.id)
            if(itemExist){
                state.cartList.forEach(item => {
                    if(item.id===action.payload.id){
                        item.count=1
                    }
                   });
                   return
            }
         state.cartList.push({
            ...action.payload,
            count:1
         })

        }

    },
    extraReducers:{
      [fetchUser.pending]:(state,action)=>{
          console.log('loding started');
      },
      [fetchUser.fulfilled]:(state,action)=>{
        console.log('loading end');
         state.userDetails.push (action.payload);
      },
      [fetchUser.rejected]:(state,action)=>{
        console.log('loading end')
        console.log('error');
      }
    }
})


export const{addToCart,increment,decrement}=cartSlice.actions

export default cartSlice.reducer