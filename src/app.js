import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import {Body} from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";



const Appcomponent = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};
const AppRouter=createBrowserRouter([
   
    {
      path:"/",
      element:<Appcomponent/>,
      children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/about",
          element:<About/>
        },{
          path:"/contactus",
          element:<Contact/>,
          errorElement:<Error/>
        },{
          path:"/restaurant/:resId",
          element:<RestaurantMenu/>,
          errorElement:<Error/>
        }
      ],
      errorElement:<Error/>
    }
    
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);
