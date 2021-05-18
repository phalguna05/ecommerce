import React, { useEffect,useContext } from 'react';
import {addProducts,changeCategory} from '../Actions/actions';
import Product from './Product';
import NavBar from './NavBar';
import './Home.css';
import {useSelector,useDispatch} from 'react-redux';
const Home=()=>{
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const handleCategory=(val)=>{
       dispatch(changeCategory(val));
    }
    const getProducts=()=>{
        if(state.products.length==0){
            fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(data=>dispatch(addProducts(data)));
        }
                
    }
    
    useEffect(() => {
        getProducts();
    }, [])
    return(
    <>
            <NavBar style={{marginTop:'0px'}}/>
            <div className="box">
                <button className="categories" onClick={()=>{handleCategory('All')}}>All</button>
                <button className="categories" onClick={()=>{handleCategory("men's clothing")}}>Men's Clothing</button>
                <button className="categories" onClick={()=>{handleCategory("women's clothing")}}>Women's Clothing</button>
                <button className="categories" onClick={()=>{handleCategory("electronics")}}>Electronics</button>
                <button className="categories" onClick={()=>{handleCategory("jewelery")}}>Jewellery</button>
            </div>
            
        {
            state.category=="All"?
            state.searchItem.length==0?
            state.products.map(products=>(
            
            <Product product={products}></Product>))
            :
            
            state.products.filter(prod=>{
                    if(prod.title.toLowerCase().includes(state.searchItem)){
                        return true;
                    }
                }
            ).map(products=>(
            
                <Product product={products}></Product>))
            
            
            :
            state.products.filter(products=>products.category==state.category).map(products=>(
                <Product product={products}></Product>
            ))
        }
        </>
    )

}
export default Home;