import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import {toast} from 'react-toastify';
import {useSelector,useDispatch} from 'react-redux';
import {addToCart} from '../Actions/actions';
import 'react-toastify/dist/ReactToastify.css';
import './Product.css';
toast.configure();
const Product=(props)=>{
    const cart=useSelector(state=>state.cart);
    const dispatch = useDispatch();
    const history=useHistory();
    const handleCart=()=>{
        var found=cart.find(function(obj,ind){
            if(obj.title==props.product.title){
                return true;
            }
        })

        if(!found){
        props.product['count']=1;
        dispatch(addToCart(props.product));
        toast.success("Added to cart!!",{position: toast.POSITION.TOP_CENTER})
        }
        else{
            toast.warning("Added to cart already!!",{position: toast.POSITION.TOP_CENTER})
        }
    
    }
    return(
        <div className="prod" style={{cursor:'pointer'}}>
            <img src={props.product.image} style={{height:'23vh'}}></img>
            <hr></hr>
            <p className="title" >{props.product.title}</p>
            <p className="price" style={{marginTop:'4vh'}}>{"$ "}{props.product.price}</p>
            <button className="addCart"onClick={handleCart}>Add to Cart</button>
        </div>
    )
}
export default Product;