import React from "react";

//IMAGES
import item1 from "../images/item1.png"
import item2 from "../images/item2.png"
import item3 from "../images/item3.png"
import item4 from "../images/item4.png"
import item5 from "../images/item5.png"
import item6 from "../images/item6.png"


const Categories = ()=>{
    return(

        <div className="items-category">
            <div className="item">
                <img className="item-image" src={item1}/>
                <p>details</p>
            </div>
            <div className="item">
                <img className="item-image" src={item2}/>
                <p>details</p>
            </div>
            <div className="item">
                <img className="item-image" src={item3}/>
                <p>details</p>
            </div>
            <div className="item">
                <img className="item-image" src={item4}/>
                <p>details</p>
            </div>
            <div className="item">
                <img className="item-image" src={item5}/>
                <p>details</p>
            </div>
            <div className="item">
                <img className="item-image" src={item6}/>
                <p>details</p>
            </div>
        </div>

    )
}

export default Categories;

