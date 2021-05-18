const initialState=[];
const cartReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_CART':
            return [...state,action.payload];
        case 'INCREMENT':
            {
                state.map((product)=>{
                    if(product.title==action.payload){
                        product.count++;
                    }
                })
                return state;
            }

        case 'DECREMENT':
            {
                state.map((product)=>{
                    if(product.title==action.payload){
                        product.count--;
                    }
                })
                return state;
            }
        case 'REMOVE_CART':
            return [...state.filter(product=>product.title!=action.payload)]
        case 'REMOVE_ALL':
            return [];
        default:
            return state;
    }
}
export default cartReducer;