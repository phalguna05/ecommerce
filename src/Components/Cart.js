import React, { useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import NavBar from './NavBar';
import './Cart.css'
import CartProduct from './CartProduct';
import {addOrders, addUser,removeAll} from '../Actions/actions';
import axios from 'axios';
import { useHistory } from 'react-router';
import { getDefaultNormalizer } from '@testing-library/dom';
const Cart=()=>{
    const cart = useSelector(state => state.cart);
    const user=useSelector(state=>state.user);
    const history=useHistory();
    const dispatch=useDispatch();
    const [billed,setBilled]=useState(false);
    const getData=()=>{
    if(user.logged && user.userId==-1){
         const username=localStorage.getItem("user");
         const details={userName:username};
            console.log(username);
            axios({
			method:'post',
			url:'http://localhost/ecommerce-backend/data.php',
			data:details,
			headers:{'content-type':'application/json'}
		})
		.then(function(response){
           
			dispatch(addUser(response.data));
            
		})
		.catch(function(response){
			console.log(response);
		});
    }
}
    const handleCheckout=()=>{
        if(user.logged){
           for(var i=0;i<cart.length;i++){
               const order={
                   userId:user.userId,
                   title:cart[i].title,
                   img:cart[i].image,
                   price:cart[i].price,
                   quantity:cart[i].count
               }
               axios({
			method:'post',
			url:'http://localhost/ecommerce-backend/insert_orders.php',
			data:order,
			headers:{'content-type':'application/json'}
		})
		.then(function(response){
           
			console.log(response);
            
		})
		.catch(function(response){
			console.log(response);
		});

           }
           dispatch(addOrders(cart));

           dispatch(removeAll());

        }
         else{
        history.push('/Login');
    }
    }
    useEffect(() => {
        getData();
    }, []);
    return(
        <div>
            <NavBar/>
            <h2>Your Cart</h2>
            {
                cart.map(prod=>(
                    <CartProduct product={prod}></CartProduct>
                ))
            }
            {
                cart.length>0?
                                <button className="checkout" onClick={handleCheckout}>Checkout</button>:
                <h3 className="tag">No items in cart.</h3>
            }
        </div>
        
    );
};
export default Cart;