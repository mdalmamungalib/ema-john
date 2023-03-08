import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product, handaleRemoveItem }) => {
    const { name, price, quantity, img, shipping, id } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="revie-details-container">
                <div className='review-details'>
                    <h4>{name}</h4>
                    <p>
                        <smal>Price: <span className='text-color'>${price}</span></smal>
                    </p>
                    <p>
                        <smal>Shipping: <span className='text-color'>${shipping}</span></smal>
                    </p>
                    <p>
                        <smal>Quantity: {quantity}</smal>
                    </p>
                </div>
            </div>
            <div className="button-container">
                <button onClick={() => handaleRemoveItem(id)} className='delete-button'>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;