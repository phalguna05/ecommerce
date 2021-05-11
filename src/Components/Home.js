import React, { useEffect,useContext } from 'react';
import {ProductContext} from './ProductContext';
import Product from './Product';
import NavBar from './NavBar';
import {CartContext} from './CartContext';
import { CategoryContext } from './CategoryContext';
import { searchContext } from './SearchContext';
const Home=()=>{
    const user=localStorage.getItem("User");
    console.log(user);
    const [product,setProduct]=useContext(ProductContext);
    const [cart,setCart]=useContext(CartContext);
    const [category,setCategory]=useContext(CategoryContext);
    const [search,setSearch]=useContext(searchContext);
    console.log(search);
    console.log(category);
    if(product.length==0){
            fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(data=>setProduct([...product,...data]));
                
    }
    return(
        <div>
            <NavBar/>
            
        {
            category=="All"?
            search.length==0?
            product.map(products=>(
            
            <Product product={products}></Product>))
            :
            
            product.filter(prod=>{
                for(var i=0;i<search.length;i++){
                    if(search[i].title==prod.title){
                        return true;
                    }
                }
            }).map(products=>(
            
                <Product product={products}></Product>))
            
            
            :
            product.filter(products=>products.category==category).map(products=>(
                <Product product={products}></Product>
            ))
        }
        </div>
    )

}
export default Home;