import axios from "axios";

export const fetchProductsRequest = ()=>{
    return {
        type:"FETCH_REQUEST"
    }
}

export const fetchProductsSuccess = (products)=>{
    return {
        type:"FETCH_SUCCESS",
        payload:products
    }
}

export const fetchProductsFailure = (error)=>{
    return {
        type:"FETCH_FAILURE",
        payload:error
    }
}
export const filter = (product)=>{
    return{
        type:"FILTER",
        payload:product
    }
}

export const fetchData = ()=>{
    return (dispatch)=>{
        dispatch(fetchProductsRequest())
        axios.get("https://fakestoreapi.com/products")
            .then(response =>{
                dispatch(fetchProductsSuccess(response.data))
            })
            .catch(error =>{
                dispatch(fetchProductsFailure(error.message))
            })
    }
}