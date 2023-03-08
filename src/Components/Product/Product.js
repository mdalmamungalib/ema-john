import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Product.css"

const Product = ({ product, handaleAddToCard }) => {
    const { img, name, price, seller, ratings } = product;
    return (
        <div className='product'>
            <div className='products'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-seller'>Manufacturer: {seller}</p>
                <p className='product-seller'>Ratings: {ratings} Stars</p>
            </div>
            </div>
            <button onClick={() => handaleAddToCard(product)} className='btn-cart'>
                <p>Add To Cart <i class="fa-solid fa-cart-plus"></i></p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;