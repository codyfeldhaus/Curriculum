import React, { useState } from 'react';
import Product from './Product';

function ProductList({ addToCart }) {
    const [products] = useState([
        { id: 1, name: 'Product 1', price: 100 },
        // Add more products as needed
    ]);

    return (
        <div>
            {products.map(product => (
                <Product key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
}

export default ProductList;
