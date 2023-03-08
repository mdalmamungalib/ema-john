import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCard } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Orders.css"

const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    useEffect(() => {
        const storedCart = getStoredCard();
        const saveCart = [];
        for (const id in storedCart) {
            const addProduct = products.find(product => product.id === id);
            if (addProduct) {
                const quantity = storedCart[id];
                addProduct.quantity = quantity;
                saveCart.push(addProduct);
            }
            setCart(saveCart)
        }
    }, [products])

    const handaleAddToCard = (selectedProduct) => {
        let newCart = [];
        const exsits = cart.find(product => product.id === selectedProduct.id);
        if (!exsits) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exsits.quantity = exsits.quantity + 1;
            newCart = [...rest, exsits];
        }

        setCart(newCart)
        addToDb(selectedProduct.id)
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handaleAddToCard={handaleAddToCard}
                    ></Product>)
                }

            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;