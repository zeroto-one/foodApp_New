import React, { useState } from "react";
const User =( props)=>{
    const [count]=useState(0);
    return (
        
        <div className="user-card">
            <h2>Name</h2> 
            <h2>Jodhpur Rajasthan</h2>
            <h3>{props.address}</h3>
            <h3>{count}</h3>

        </div>
    )
}
export default User;