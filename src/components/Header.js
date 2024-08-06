import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center">
        <Link to="/">
          <img
            className="w-12 h-12 object-cover rounded-full shadow-lg"
            src={LOGO_URL}
            alt="logo"
          />
        </Link>
        <Link to="/">
          <h1 className="text-green-600 text-2xl font-bold ml-4 hover:text-green-800 transition-colors">FoodieApp</h1>
        </Link>
      </div>

      <nav>
        <ul className="flex space-x-6 text-gray-700 text-lg font-medium">
          <li className="flex items-center">
            <span className={`inline-block w-2.5 h-2.5 rounded-full ${onlineStatus ? 'bg-green-500' : 'bg-red-600'}`}></span>
            <span className="ml-2">{onlineStatus ? "Online" : "Offline"}</span>
          </li>
          <li>
            <Link className="hover:text-green-600 transition-colors" to="/">Home</Link>
          </li>
          <li>
            <Link className="hover:text-green-600 transition-colors" to="/about">About Us</Link>
          </li>
          <li>
            <Link className="hover:text-green-600 transition-colors" to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link className="hover:text-green-600 transition-colors" to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>

      <button
        className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600 transition-colors"
        onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
      >
        {btnName}
      </button>
    </header>
  );
};

export default Header;
