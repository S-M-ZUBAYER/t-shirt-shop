import React from 'react';
import "./ProductCart.css"

const ProductCart = ({ product, handler }) => {
    const { id, picture, name, price } = product;
    return (
        <div className='t-shirt-container'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <button onClick={() => { handler(product) }}>Buy Now</button>
        </div>

    );
};

export default ProductCart;