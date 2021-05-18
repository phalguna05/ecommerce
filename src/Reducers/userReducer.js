const initialState={
    userId:-1,
    userName:'',
    email:'',
    logged:false
}
const usesrReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
                logged:true
            }
        case 'ADD_USER':
            return{
                ...state,
                userId:action.payload.user_id,
                userName:action.payload.user_name,
                email:action.payload.email
            }
        case 'LOG_OUT':
            return{
                ...state,
                userName:'',
                email:'',
                logged:false
            }
        default:
            return state
    }
    
}
export default usesrReducer;