export const addProducts=(data)=>{
    return{
        type:'ADD_PRODUCTS',
        payload:data
    }
}
export const addToCart=(data)=>{
    return{
        type:'ADD_CART',
        payload:data
    }
}
export const removeFromCart=(data)=>{
    return{
        type:'REMOVE_CART',
        payload:data
    }
}
export const increment=(data)=>{
    return{
        type:'INCREMENT',
        payload:data
    }
}
export const changeCategory=(data)=>{
    return{
        type:'CHANGE_CATEGORY',
        payload:data
    }
}
export const changeSearch=(data)=>{
    return{
        type:'CHANGE_SEARCH',
        payload:data
    }
}
export const login=()=>{
    return{
        type:'LOGIN',
    }
}
export const addUser=(data)=>{
    return{
        type:'ADD_USER',
        payload:data
    }
}
export const logout=()=>{
    return{
        type:'LOG_OUT'
    }
}
export const incrementCount=(data)=>{
    return{
        type:'INCREMENT',
        payload:data
    }
}
export const removeAll=()=>{
    return{
        type:'REMOVE_ALL'
    }
}
export const decrementCount=(data)=>{
    return{
        type:'DECREMENT',
        payload:data 
    }
}
export const addOrders=(data)=>{
    return{
        type:'ADD_ORDERS',
        payload:data
    }
}