import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../../utils/constants";
const Cards=(props)=>{
    const{resData}=props;
    //console.log(resData);
      return (
          <div className="card">
              <img className="card-img" src={CDN_URL+resData.info.cloudinaryImageId}alt="image of food"></img>
              <h4>{resData.info.name}</h4>
              <h4>{resData.info.cuisines.join(" ,")}</h4>
              <h4>{resData.info.costForTwo}</h4>
              <h5>{resData.info.avgRating}</h5>
          </div>
  
      );
  };
  export default  Cards;