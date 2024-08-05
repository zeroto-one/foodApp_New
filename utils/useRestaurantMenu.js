import { useEffect, useState } from "react";
import { swiggy_api_URL, swiggy_menu_api_URL } from "../constants";

const useRestaurantMenu =(resId)=>{

    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchdata();
    },[]);
     const   fetchdata = async()=>{
        const data = await fetch(swiggy_menu_api_URL+resId);
        const json = await data.json();
        console.log(json.data);
        setResInfo(json.data);
        console.log(json.data);

    }


    
    return resInfo;
}
export default useRestaurantMenu;