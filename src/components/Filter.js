import React from "react"
import { useDispatch , useSelector } from "react-redux"

//FUNCTION
import { filter } from "../redux/products/productsActions";
const Filter =()=>{

    const dispatch = useDispatch();
    const products = useSelector(state => state.productState.products)
    const filtered = useSelector(state => state.productState.filtered)
    

    const categoryHandler=(e)=>{
        if(e.target.value == "all"){
            dispatch(filter(products))
        }else{
            const filteredProducts = products.filter(item => item.category === e.target.value)
            dispatch(filter(filteredProducts))
        }
        
    }

    const priceHandler=(e)=>{
        if(e.target.value=="none")return;
        if(e.target.value == "low"){
            function compare( a, b ) {
                if ( a.price < b.price ){
                  return -1;
                }
                if ( a.price > b.price ){
                  return 1;
                }
                return 0;
              }
              filtered.sort( compare )  
        }else{
            function compare( a, b ) {
                if ( a.price > b.price ){
                  return -1;
                }
                if ( a.price < b.price ){
                  return 1;
                }
                return 0;
              }
              filtered.sort( compare )  
        } 
        dispatch(filter(filtered)) 
        
    }

    return(
        <div className="filters">
            <div>
                <label>Filter By Category : </label>
                <select onChange={categoryHandler}>
                    <option value="all">All</option>
                    <option value="men's clothing">men's clothing</option>
                    <option value="jewelery">jewelery</option>
                    <option value="electronics">electronics</option>
                    <option value="women's clothing">women's clothing</option>
                </select>
            </div>
            <div>
                <label>Sort By Price : </label>
                <select onChange={priceHandler}>
                    <option value="none">none</option>
                    <option value="low">Lowest Price</option>
                    <option value="high">Highest Price</option>
                </select>
            </div>
        </div>
    )
}

export default Filter;