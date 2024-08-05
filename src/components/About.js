import React from "react";
import User from "./User";
import Cards from "./Cards";
import UserClass from "./UserClass";
const About=()=>{
    return (
        <div>
        <h1>About us</h1>
        <User address={"this is my address"}/>
        <UserClass name={"Abhishek"}/>
        
        </div>
        
        
    )
}
export default About;