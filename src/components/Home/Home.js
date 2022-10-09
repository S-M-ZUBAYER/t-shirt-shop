import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCart from '../ProductCart/ProductCart';
import Cart from '../Cart/Cart'
import "./Home.css"
const Home = () => {
    const AllProducts = useLoaderData();
    const [cart, setCart] = useState([])

    const handleAddToCart = (productData) => {
        const exists = cart.find(tShirt => tShirt._id === productData._id);
        if (exists) {
            alert('This Product already added!!!!')
        }
        else {
            const newCart = [...cart, productData];
            setCart(newCart);
        }
    }
    const handleToRemoveItem = item => {
        const restCart = cart.filter(tShirt => tShirt._id !== item._id);
        setCart(restCart);
    }
    return (
        <div className='display-container'>
            <div className='Product-container'>
                {AllProducts.map(product => <ProductCart key={product._id} handler={handleAddToCart} product={product}></ProductCart>)}
            </div>
            <div className="cart-container">
                <Cart cart={cart} removeHandler={handleToRemoveItem}></Cart>
            </div>
        </div>

    )
};

export default Home;