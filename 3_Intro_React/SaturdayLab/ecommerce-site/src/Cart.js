import React from 'react';

function Cart({ cartItems }) {
    return (
        <div>
            <h2>Cart</h2>
            {cartItems.map((item, index) => (
                <div key={index}>
                    <span>{item.name}</span> - <span>${item.price}</span>
                </div>
            ))}
        </div>
    );
}

export default Cart;
