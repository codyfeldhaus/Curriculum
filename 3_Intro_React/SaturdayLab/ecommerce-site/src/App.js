import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = product => {
        setCartItems([...cartItems, product]);
    };

    return (
        <div>
            <ProductList addToCart={addToCart} />
            <Cart cartItems={cartItems} />
        </div>
    );
}

export default App;
