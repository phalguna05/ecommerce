import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { CartContext } from './CartContext';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Product.css';
toast.configure();
const Product=(props)=>{
    
    const user=localStorage.getItem("User");
    const history=useHistory();
    const [cart,setCart]=useContext(CartContext);
    const handleCart=()=>{
        var found=cart.find(function(obj,ind){
            if(obj.title==props.product.title){
                return true;
            }
        })
        if(!found){
        setCart([...cart,props.product]);
        toast.success("Added to cart!!",{position: toast.POSITION.TOP_CENTER})
        }
        else{
            toast.warning("Added to cart already!!",{position: toast.POSITION.TOP_CENTER})
        }
    }
    return(
        <div className="prod">
            <img src={props.product.image}></img>
            <p className="title">{props.product.title}</p>
            <p className="price">{"$ "}{props.product.price}</p>
            <button className="addCart"onClick={handleCart}>Add to Cart</button>
        </div>
    )
}
export default Product;