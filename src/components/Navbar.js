import React,{useState} from "react";
import { useSelector } from "react-redux";
import { useNavigate , Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
const Navbar = ()=>{

    const [openMenu , setOpenMenu] = useState(false)

    const product = useSelector(state => state.cartState)
    const navigate = useNavigate()
    const navigateHandler = ()=>{
        navigate("./checkout")
    }

    return(
        <div className="navbar">
            <div style={{display:"flex"}}>
                <div onClick={()=>setOpenMenu(!openMenu)} className={`hamburger ${openMenu && "active"}`}>
                <div className="line"></div>
                </div>
                <h2 style={{marginLeft:"1rem"}}><Link to="/">Hypermarket</Link></h2>
            </div>
                <div className={`nav ${openMenu && "active"}`}>
                    <ul>
                        <li><Link to="/" onClick={()=>setOpenMenu(false)}>HOME</Link></li>
                        <li><Link to="/products" onClick={()=>setOpenMenu(false)}>SHOP</Link></li>
                        <li><Link to="/" onClick={()=>setOpenMenu(false)}>ABOUT US</Link></li>
                        <li><Link to="/" onClick={()=>setOpenMenu(false)}>CONTACT US</Link></li>
                    </ul>
                </div>
            <div className="icon">
            <FontAwesomeIcon onClick={navigateHandler} icon={faBagShopping} />
            {product.totalItems !== 0 && <span>{product.totalItems}</span>}
            </div>
        </div>
    )
}

export default Navbar;