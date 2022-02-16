import React, { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { fetchData } from "../redux/products/productsActions";
import loader from "../images/loader.gif"

//COMPONENTS
import ProductCart from "./ProductCart";
import Filter from "./Filter";


const Store = ()=>{

    const dispatch = useDispatch();
    const product = useSelector(state => state.productState)
    useEffect(()=>{
        if(!product.products.length){
            dispatch(fetchData())
        }
    },[])

    

    return(
        <>  
            {/* <Notif notif={true}/> */}
            <Filter />
            {product.loading && <img  style={{width:"100px",display:"block",margin:"7rem auto"}} src={loader}/>}
            <div className="product-container">
                {
                product.error ? <h1>{product.error}</h1> :
                product.filtered.map(product=><ProductCart key={product.id} product={product} />)   
                }
            </div>
        </>
    )
}

export default Store;