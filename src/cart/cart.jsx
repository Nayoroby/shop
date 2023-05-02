import React from 'react';
import App from '../home/App';
import '../cart/cart.scss'
import { useRef } from 'react';

const Cart = ({addCartItem,cartState, setCartState}) => {
    return (
        <div className={cartState === 'none'? 'cart' : 'cart active'}>
            <div className="cart__cross" onClick={() => setCartState('none')}>
                <span></span>
                <span></span>
            </div>
            <div className="cart__body">
                
            </div>
        </div>
    );
};

export default Cart;