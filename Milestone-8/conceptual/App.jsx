import { useEffect } from 'react';
import './App.css'
import { useState } from 'react';
import SingleProduct from './SingleProduct';

function App() {

  const [products,setProducts]=useState([]);
  const [cart,setCart]=useState([]);

  useEffect(()=>{
    fetch('../public/fakeData.json')
    .then(res=>res.json())
    .then(data=>{
      setProducts(data);
    })
  },[])

  
    const handleCart = (p) => {
      const isExist=cart.find((pd)=> pd.id==p.id);
      if(!isExist){
        setCart([...cart,p]);
      }else{
        alert("product is already in cart!");
      }
    };

    const deleteCart=(id)=>{
       const newCart=cart.filter(item=>item.id!=id);
       setCart(newCart)
    }

  console.log(products)

  return (
    <>
      <div className="main-container">
        <div className="cards-container">
          {products.map((pd) => (
            <SingleProduct product={pd} handleCart={handleCart}></SingleProduct>
          ))}
        </div>
        <div className="cart-container">
          <h1>This is cart</h1>
          <div className="cart-title">
            <h5>Name</h5>
            <h5>Price</h5>
          </div>
          <div >
            {
              cart.map((item,index)=>(
                <div className="cart-info">
                  <h5>{index+1}</h5>
                  <h5>{item.title.slice(0,10)}</h5>
                  <h5>{item.price}</h5>
                  <button onClick={()=>deleteCart(item.id)}>Delete</button>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App
