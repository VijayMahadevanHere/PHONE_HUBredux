import React, { useEffect ,useRef} from 'react'
import {ProductList,Header} from './components'
import {useDispatch,useSelector} from 'react-redux'
import { fetchUser } from './redux/cart'

//const user = useContext(userContext)
function App() {
  const counterRef=useRef(1)
  const {userDetails}=useSelector((state)=>state.cart)

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchUser(counterRef.current))
  },[])

const addMoreUser=()=>{
  dispatch(fetchUser(++counterRef.current))

}

  return (
    <>
    <Header/>
    {/* <button onClick={addMoreUser}>Add More Users</button>
    <h5>{JSON.stringify(userDetails)}</h5> */}
    <ProductList/>
    </>
  )
}

export default App
