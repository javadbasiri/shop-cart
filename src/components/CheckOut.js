import React from "react"
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

//COMPONENTS
import ShopCart from "./ShopCart";

//FUNCTION
import { checkOut } from "../redux/cart/cartActions";

const CheckOut = ()=>{

    const items = useSelector(state => state.cartState)
    const dispatch = useDispatch()

    const notify=(type,text)=>{
        if(type=="success"){
            toast.success(text)
        }else{
            toast.error(text)
        }
    }
    
    const check = ()=>{
        dispatch(checkOut())
        notify("success" , "You Checked Out Seccessfully :)")
    }
    const clear = ()=>{
        dispatch({type:"CLEAR"})
        notify("error" , "You Cleared Your Cart :(")
    }

    return(
        <div style={{minHeight:"100vh"}}>
            {
                items.totalItems !==0 ?
                    <div className="checkout">
                
                        <div className="items">
                        {
                            items.selectedItems.map(product => <ShopCart key={product.id} product={product}/>)
                        }
                        </div>
                        <div className="info">
                            <h4>Total Items : <span>{items.totalItems}</span></h4>
                            <h4>Total Price : <span>{items.totalPrice} $</span></h4>
                            <button onClick={check}>CHECKOUT</button>
                            <button onClick={clear}>CLEAR</button>
                        </div>
                    
                    </div>:
                    items.checkOut ? 
                    <div className="sold">
                        <h4>Thanks For Your Shopping!</h4>
                        <Link to="/products">Buy More</Link>
                    </div> :
                     <div className="sold">
                         <h4>Your Cart is Empty</h4>
                         <Link to="/products">Go To Shop</Link>
                     </div>

            }
            <ToastContainer />
        </div>
    )
}

export default CheckOut;