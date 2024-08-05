import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Header = () => {
  const [btnName,steBtnName]=useState("Login");
  const onlineStatus=useOnlineStatus();
    return (
      <div className="header">
        <img
          className="logo"
          src= {LOGO_URL}
          alt="logo"
        ></img>
        <ul>
          <li>{onlineStatus?"✅":"🔴"}</li>
          <li> <Link to="/">Home</Link>
            </li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contactus">
            Contact Us </Link> </li>
          <li>Cart</li>
          <button className="login" 
          onClick={()=>{
            (btnName==="login")?
            steBtnName("logout"):
            steBtnName("login")
          }}>
            {btnName}
          </button>
        </ul>
      </div>
    );
  };
export default Header;