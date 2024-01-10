import React from 'react';
import { useState } from 'react';
import Counter from './components/Counter';
import Cart from './components/Cart';

const AppCart = () => {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (count) => {
        setCartItems([...cartItems, count]);
    };

    return (
        <div>
            <h1>Counter App with Cart</h1>
            <Counter onAddToCart={handleAddToCart} />
            <Cart cartItems={cartItems} />
        </div>
    );
};

export default AppCart;