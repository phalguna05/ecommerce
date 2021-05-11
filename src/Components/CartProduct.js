import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import './CartProduct.css';
const CartProduct=(props)=>{
    const [cart,setCart]=useContext(CartContext);
    const [count,setCount]=useState(1);
    const handleIncrement=()=>{
        setCount(count+1);


    }
    const handleDecrement=()=>{
        if(count-1==0){
            let arr=cart.filter(prod=>prod.title!=props.product.title);
            setCart(arr);
            console.log(cart);
        }
        else{
        setCount(count-1);
        }
        
    }
    return(
        <div className="cartProd">
            <img className="cartImg"src={props.product.image}></img>
            <p className="cartTitle">{props.product.title}</p>
            <p className="cartPrice">{"Billing Price: $ "}{props.product.price*count}</p>
            <div className="groupp">
            <button className="increment" onClick={handleIncrement}>+</button>
            <input className="cartVal"type="text" size="2" value={count} ></input>
            <button className="decrement" onClick={handleDecrement}>-</button>
            </div>
            <button className="buy">Buy Now</button>
        </div>
    )
}
export default CartProduct;