import React from "react";

const Notif = ({notif})=>{
    return(
        <div className={`notif ${notif && "active"}`}>
            <p>you done</p>
            <button>close</button>
        </div>
    )
}

export default Notif;