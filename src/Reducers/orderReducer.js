const initialState=[];
const orderReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_ORDERS':
            return [...state,...action.payload];
        default:
            return state;
    }
}
export default orderReducer;