import React from 'react';
import './Cart.css'

const Cart = ({ cart, removeHandler }) => {
    let message;
    if (cart.length === 0) {
        message = "Please buy some products!!!"
    }
    else {
        message = "oh!! you already buy some things"
    }
    return (
        <div className='cart-section'>
            <h1 className={`bold ${cart.length === 0 ? 'orange' : 'purple'}`}>Order Summery</h1>
            <p className={cart.length === 0 ? 'blue' : 'green'}>Selected product:-{cart.length}</p>
            {cart.map(tShirt => <p>{tShirt.name} <button onClick={() => { removeHandler(tShirt) }}> X</button></p>)}
            {message}
            {cart.length === 7 ? <p>You can gift 7 person</p> : <p>shit!! you can't gift 7 people</p>}
            {cart.length === 3 && <p>you already buy 3 products</p>}
            {cart.length === 7 || <p>you have to  buy to got 7 products</p>}

        </div >
    );
};

export default Cart;