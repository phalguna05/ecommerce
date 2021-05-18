import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';
import searchReducer from './searchReducer';
import userReducer from './userReducer';
import orderReducer from './orderReducer';
const rootReducer=combineReducers(
    {
        cart:cartReducer,
        products:productReducer,
        category:categoryReducer,
        searchItem:searchReducer,
        orders:orderReducer,
        user:userReducer
    }
)
export default rootReducer;
