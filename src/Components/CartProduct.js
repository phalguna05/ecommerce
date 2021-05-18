import React, { useContext, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {removeFromCart,incrementCount,decrementCount} from '../Actions/actions';
import './CartProduct.css';
const CartProduct=(props)=>{
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [count,setCount]=useState(1);
    const handleIncrement=()=>{
        setCount(count+1);
        dispatch(incrementCount(props.product.title));
    

    }
    const handleRemove=()=>{
        dispatch(removeFromCart(props.product.title));
    }
    const handleDecrement=()=>{
        if(count-1==0){
            dispatch(removeFromCart(props.product.title));
        }
        else{
        setCount(count-1);
        dispatch(decrementCount(props.product.title));
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
            <button className="remove" onClick={handleRemove}>Remove Item</button>
        </div>
    )
}
export default CartProduct;