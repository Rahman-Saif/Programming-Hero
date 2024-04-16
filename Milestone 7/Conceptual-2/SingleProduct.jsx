import React from 'react';

const SingleProduct = ({product,handleCart}) => {
    return (
        <div>
            <div className="card">
            <img className="card-img" src={product.image} alt="" />
            <h1>{product.title.slice(0,10)}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam asperiores reprehenderit aliquam minima quas ullam.</p>
            <div className="card-footer">
              <h1>{product.price}</h1>
              <button onClick={()=>handleCart(product)}className='add-btn'>Add to Cart</button>
            </div>
          </div>
        </div>
        
    );
};

export default SingleProduct;