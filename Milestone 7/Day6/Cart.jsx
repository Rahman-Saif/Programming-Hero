import React from 'react';
import './cart.css'
import PropTypes from 'prop-types'
import { getStoredCart } from '../../utilities/LocalStorage';

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
            <h4>Cart : {cart.length}</h4>
            <div className='cart-container'>
                {
                    cart.map(bottle => <div key={bottle.id}>
                        <img src={bottle.img}></img>
                        <button onClick={()=>handleRemoveFromCart(bottle.id)}>Remove</button>
                        </div>)
                }
            </div>
        </div>
    );
};

Cart.PropTypes={
    cart:PropTypes.array.isRequired,
    handleRemoveFromCart:PropTypes.func.isRequired
}



export default Cart;