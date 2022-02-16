const initialState ={
    loading:false,
    products:[],
    filtered:[],
    error:""
}

const productsReducer = (state=initialState,action)=>{
    switch(action.type){
        case "FETCH_REQUEST":
            return{
                ...state,
                loading:true
            }
            
        case "FETCH_SUCCESS":
            const payload = action.payload.map(item =>{return{...item,toasted:false}})
            return{
                loading:false,
                products:payload,
                filtered:payload
            }
        case "FETCH_FAILURE":
            return{
                loading:false,
                error:action.payload
            }
        case "FILTER":
             return{
                    ...state,
                    filtered:action.payload
            }     
        default:
            return state            
    }
}

export default productsReducer;