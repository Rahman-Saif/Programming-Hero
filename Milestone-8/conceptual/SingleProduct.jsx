import React from 'react';

const SingleProduct = ({product,handleCart}) => {

    // console.log(product)
    return (
        <div>
                 <div className="card">
            <img className='card-img'
              src={product.image}
              alt=""
            />
            <h1>{product.title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas possimus aspernatur autem 
              iusto asperiores eum nihil officiis est, quia ullam necessitatibus! Beatae modi temporibus 
              explicabo veniam officiis minima magnam error?</p>
              <div className="card-footer">
                <h1>{product.price}</h1>
                <button onClick={(e)=>handleCart(product)} className='add-btn' >Add to CART!</button>
              </div>
          </div>
        
        
        </div>
        
    );
};

export default SingleProduct;