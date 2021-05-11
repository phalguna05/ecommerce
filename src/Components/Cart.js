import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import NavBar from './NavBar';
import CartProduct from './CartProduct';
const Cart=()=>{
    const [cart,setCart]=useContext(CartContext);
    console.log(cart[0])
    return(
        <div>
            <NavBar/>
            <h2>Your Cart</h2>
            {
                cart.map(prod=>(
                    <CartProduct product={prod}></CartProduct>
                ))
            }
        </div>
    );
};
export default Cart;