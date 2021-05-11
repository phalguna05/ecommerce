import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import cartImage from '../cartImage.svg';
import profile from '../profile.svg';
import { CartContext } from './CartContext';
import { CategoryContext } from './CategoryContext';
import './NavBar.css';
import { ProductContext } from './ProductContext';
import { searchContext } from './SearchContext';
const NavBar=()=>{
  const [cart,setCart]=useContext(CartContext);
  const [category,setCategory]=useContext(CategoryContext);
  const [product,setProduct]=useContext(ProductContext);
  const [search,setSearch]=useContext(searchContext);
  const history=useHistory();
  const handleCart=()=>{
    document.getElementById('homeId').className="";
    document.getElementById('cartId').className="active";
    
    history.push('/Cart');
  }
  const handleSearch=(e)=>{
    var val=e.target.value;
    var arr=[];
    for(var i=0;i<product.length;i++){
      if(product[i].title.toLowerCase().includes(val)){
        arr.push(product[i]);
      }
    }
    setSearch(arr);
  
  }
  const handleLogout=()=>{
    localStorage.setItem("user",null);
  }
  const handleHome=()=>{
    document.getElementById('homeId').className="active";
    document.getElementById('cartId').className="";
    history.push('/Home');
  }
  
    const handleClick=(e)=>{
        setCategory(e.target.value);

    }
    return(
        <div>
        <ul className="topnav">
    <li><a onClick={handleHome} id="homeId"className="active">Home</a></li>
    
    <div class="dropdown">
      <select onChange={handleClick} defaultValue="All" className="custom-select">
      <option value="All" >All</option>
      <option value="men's clothing" >Men's Clothing</option>
      <option value="women's clothing" >Women's Clothing</option>
      <option value="jewelery">Jewellery</option>
      <option value="electronics">Electronics</option>

    </select>
  </div> 
 
  
  
  <input type="text" className="search" onChange={handleSearch} placeholder="Search Product ...."></input>
  <li className="right"><a id="cartId"onClick={handleCart} className=""><img className="imgcart"src={cartImage} style={{marginTop:"0",width:"33px",height:"33px"}}></img><span className="badge">{cart.length}</span></a></li>
  
</ul>
</div>
    )
}
export default NavBar;
