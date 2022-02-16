import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus , faTrash , faPlus , faMinus } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//FUNCTIONS
import { shorten , isInCart , quantity} from "../helper/helperFunctions";
import { addItem, removeItem , decrease, increase} from "../redux/cart/cartActions";
import { filter } from "../redux/products/productsActions";


const ProductCart = ({product})=>{

    const notify=(type,text)=>{
        if(type=="success"){
            toast.success(text)
        }else{
            toast.warn(text)
        }
    }

    
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cartState)
    const products = useSelector(state => state.productState.filtered)

    const navigate = useNavigate()
    const navigateHandler=()=>{
        navigate(`/products/${product.id}`)
        
    }

    useEffect(()=>{
        const newp =products.map(item=>{
            if(item.id == product.id){
                return{
                    ...item,
                    toasted:true
                }
            }else{
                return{
                    ...item,
                    toasted:false
                }
            }
        })
        dispatch(filter(newp))
    },[])

    const add=()=>{
        dispatch(addItem(product))
        notify("success",` "${shorten(product.title)}" Added To Your Cart :)`)
    }

    const remove = ()=>{
        dispatch(removeItem(product))
        notify("warn",` "${shorten(product.title)}" Removed From Your Cart :(`)
    }
   
   
    return(
        
        <div className="cart">
            <img src={product.image}/>
            <div className="cart-details">
                <h2 className="name">{shorten(product.title)}</h2>
                <p className="price">{product.price} $</p>
                <h4 className="category">{product.category}</h4>
                <div className="buttons">
                    <button onClick={navigateHandler}>Details</button>
                    <div className="add-cart">
                        {quantity(cart ,product.id ) === 1 && <FontAwesomeIcon icon={faTrash} onClick={remove}></FontAwesomeIcon>}
                        {quantity(cart ,product.id ) > 1 && <FontAwesomeIcon icon={faMinus} onClick={()=>dispatch(decrease(product))}></FontAwesomeIcon>}
                        {quantity(cart ,product.id ) > 0 && <span>{quantity(cart,product.id)}</span>}
                        
                        {
                            !isInCart(cart , product.id) ? <FontAwesomeIcon icon={faCartPlus}  onClick={add}></FontAwesomeIcon>:
                            <FontAwesomeIcon icon={faPlus} onClick={()=>dispatch(increase(product))}></FontAwesomeIcon> 
                        }
                    </div>
                </div>
            </div>
            {product.toasted && <ToastContainer />}
        </div>
        
    )
}

export default ProductCart;