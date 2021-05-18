import React from 'react';
import { useHistory } from 'react-router';
import cartImage from '../cartImage.svg';
import icon from '../icon.png';
import {useSelector,useDispatch} from 'react-redux';
import {changeCategory,changeSearch} from '../Actions/actions';
import './NavBar.css';
const NavBar=()=>{
  const cart= useSelector(state => state.cart);
  const dispatch = useDispatch();
  const history=useHistory();
  const handleCart=()=>{
    document.getElementById('homeId').className="";
    document.getElementById('cartId').className="active";
    
    history.push('/Cart');
  }
  const handleSearch=(e)=>{
    var val=e.target.value;
    dispatch(changeSearch(val));
  
  }
  const handleSort=()=>{
    history.push('/Orders');
  }
  const handleHome=()=>{
    history.push('/Home');
  }
  
  
    return(
        <div>
        <ul className="topnav">
    <li><a onClick={handleHome} id="homeId"className="active">Home</a></li>
    <li><a className="order"onClick={handleSort}>Orders</a></li>
 
 
  
  
  <input type="text" className="search" onChange={handleSearch} placeholder="Search Product ...."></input>
  <li className="right"><a id="cartId"onClick={handleCart} className=""><img className="imgcart"src="https://img-premium.flaticon.com/png/512/1170/1170576.png?token=exp=1621244548~hmac=6f3155eae3bd31848278738491c2db99"style={{marginTop:"0",width:"33px",height:"33px"}}></img><span className="badge">{cart.length}</span></a></li>
  
</ul>
</div>
    )
}
export default NavBar;
