import React from 'react';
import Home from './Home';
import Cart from './Cart';
import {Redirect,BrowserRouter as Router,Route} from 'react-router-dom';

const RouterSetup=()=>{
    return(
        <Router>
            <Route path="/" exact>
                <Redirect to="/Home"></Redirect>
            </Route>
            <Route path="/Home">
                <Home/>
            </Route>
           
            <Route path="/Cart">
                <Cart/>
            </Route>
    
        </Router>
    )
    
}

export default RouterSetup;