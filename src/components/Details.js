import React from "react";
import { useParams} from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Details = ()=>{
    const navigate = useNavigate();
    const params = useParams()
    const id = params.id
    const products = useSelector(state => state.productState.products)
    const product = products[id - 1]

    return(
        <div className="details">
            <img src={product.image}/>
            <div>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h3>Price : {product.price} $</h3>
                <h5>Category : {product.category}</h5>
                <button onClick={()=>navigate("/products")}>Back to Shop</button>
            </div>
        </div>
        
    )
}

export default Details;