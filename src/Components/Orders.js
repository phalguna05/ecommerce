import react,{useEffect, useState,useRef} from 'react';
import Navbar from './NavBar';
import {useSelector} from 'react-redux';
import axios from 'axios';
import './Orders.css';
const Orders=()=>{
    const user=useSelector(state=>state.user);
    const [dis,setDis]=useState(false);
    const recentOrders=useSelector(state=>state.orders);
    const [orders,setOrders]=useState([]);
    const [total,setTotal]=useState(0);
    const handlePrevious=()=>{
        setDis(!dis);
    }
    const getOrders=()=>{
        const userDetails={
            userId:user.userId
        }
    axios({
			method:'post',
			url:'http://localhost/ecommerce-backend/getOrders.php',
			data:userDetails,
			headers:{'content-type':'application/json'}
		})
		.then(function(response){
			setOrders(response.data);
		})
		.catch(function(response){
			console.log(response);
		});
        if(recentOrders.length>0){
            var sum=0;
        for(var i=0;i<recentOrders.length;i++){
            sum+=(recentOrders[i].count*recentOrders[i].price);
        }
        setTotal(sum);
        
    }
    }
        useEffect(() => {
            getOrders();
        }, [])
    return(
        <>
        <Navbar/>
        <h3 style={{marginLeft:'45vw',textDecoration:'underline'}}>Recent Order</h3>
        <table>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
        {
            recentOrders.map((order)=>(
                <tr>
               <td> <img className="pro" style={{width:'70px',height:'60px'}}src={order.image}></img>
                <p style={{fontSize:'14px'}}>{order.title}</p></td>
                <td >${order.price}</td>
                 <td>{order.count}</td>
                <td>${order.count*order.price}</td>
                </tr>
               
            ))
        }
        <tr>
            <td></td>
            <td></td>
            <td>Total</td>
            <td>{total}</td>
        </tr>
        </table>
            <button className="accordion" onClick={handlePrevious}>View All Orders....</button>
<div style={{display:dis?'block':'none'}} className="panel">
  {
     
          
     orders.map((order)=>(
          <>
          <div style={{display:'flex'}}>
              <img style={{width:'100px',height:'110px'}}src={order.product_img}></img>
              <div style={{display:'flex',flexDirection:'column',marginLeft:'30px'}}>
              <p style={{fontSize:'14px',fontWeight:'bold'}}>{order.product_name}</p>
              <p style={{fontSize:'14px',fontWeight:'bold'}}>Qty: {order.quantity}</p>
              <p style={{fontSize:'14px',fontWeight:'bold'}}>Total: ${order.quantity*order.price}</p>
              </div>
              </div>
              <hr></hr>
              </>
      ))

  }
</div>

    
        </>
    )
}
export default Orders;