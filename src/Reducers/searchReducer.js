const initialState='';
const searchReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'CHANGE_SEARCH':
            return action.payload;
        default:
            return state;
    }
}
export default searchReducer;