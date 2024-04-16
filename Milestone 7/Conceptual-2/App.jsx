
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import SingleProduct from './SingleProduct'

function App() {

  const [products,setProducts]=useState([])

  useEffect(()=>{
    fetch('../public/fakeData.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])

  const handleCart=(p)=>{
    console.log(p)
  }
  

  return (
    <>
      <div className="main-container">
        <div className="cards-container">
          {
            products.map(pd=><SingleProduct handleCart={handleCart} product={pd}></SingleProduct>)
          }
          </div>
        <div className="cart-container">
          This is Cart
          <div className="cart-title">
            <h5>Name</h5>
            <h5>Price</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

/*
1st step: jehetu flex hobe 2 ta jinish, tai aramse css er div khule nilam and segulake flex kore dilam
2nd step: static jinish banailam
3rd step: jinishpati load korlam & set korlam

Tip 1 :Je name e props pathabo,abar oi name ei receive korte hobe





*/
