import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Cart.css"

const Cart = ({ cart, clearCart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h1 className='cart-title'>Product Sumarey</h1>
            <div className='cart-details'>
                <p>Selected Item: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h3>Grand Total: <span className='grandTotal'>${grandTotal}</span></h3>
                <button className='clear-btn' onClick={clearCart}><span className='delete-btn-text'>Cleare All</span> <FontAwesomeIcon className='delete-btn-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Cart;