import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const { product, initialValue } = useLoaderData();
    const [cart, setCart] = useState(initialValue);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    const handaleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }
    return (
        <div className='shop-container'>
            <div className='order-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handaleRemoveItem={handaleRemoveItem}
                    ></ReviewItem>)
                }
                {/* {
                    cart.length === 0 && <h1>No item for review. Please <link to='/orders'>shop more..</link></h1>
                } */}
            </div>
            <div className='cart-container'>
                <Cart cart={cart} clearCart={clearCart}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;