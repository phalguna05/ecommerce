const initialState=[];
const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_PRODUCTS':
            return [...state,...action.payload];
        default:
            return state;
    }
}
export default productReducer;