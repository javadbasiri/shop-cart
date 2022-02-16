import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash , faPlus , faMinus } from '@fortawesome/free-solid-svg-icons'


//FUNCTION
import { shorten } from "../helper/helperFunctions";
import { decrease , increase ,removeItem } from "../redux/cart/cartActions";

const ShopCart =({product})=>{

    const dispatch = useDispatch()

    return(
        <div className="shop-cart">
            <img src={product.image}/>
            <div>
                <h4>{shorten(product.title)}</h4>
                <h5>{product.price} $</h5>
            </div>
            <h3>{product.quantity}</h3>
            <div className="shopcart-buttons">
            <FontAwesomeIcon icon={faPlus} onClick={()=>dispatch(increase(product))}></FontAwesomeIcon>
               
                {product.quantity == 1 &&
                    <FontAwesomeIcon icon={faTrash} onClick={()=>dispatch(removeItem(product))}></FontAwesomeIcon>
                }
                {
                    product.quantity > 1 &&
                    <FontAwesomeIcon icon={faMinus} onClick={()=>dispatch(decrease(product))}></FontAwesomeIcon>
                }
            </div>
        </div>
    )
}

export default ShopCart;