import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { swiggy_menu_api_URL } from "../../constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import useOnlineStatus from "../../utils/useOnlineStatus";
const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
   const {resId}=useParams();
  // console.log(resId);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     swiggy_menu_api_URL+resId
  //   );
  //   const json = await data.json();
  //   console.log(json.data);
  //   console.log(json.data.cards[2].card.card.info.name);
  //   //const name = json.data.cards[2].card.card.info.name;
  //   setResInfo(json.data);
  // };
  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false)return (<div><h1>You are offline , Check your Internet </h1></div>);

  const resInfo=useRestaurantMenu(resId);
  console.log(resInfo);
  if(resInfo===null)return <Shimmer/>;
   const{name,city,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
   const newdata=resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
   console.log(newdata);
   const {itemCards}=resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  return (
   
    <div className="menu">
      <h1>{name}</h1>
      <h1>{city}</h1>
      <h1>{costForTwoMessage}</h1>

      <h2>menu</h2>
      <ul>
       { itemCards.map((i)=>(
        
        <li key={i.card.info.id}>{i.card.info.name}</li>
       )
            
    )};
        <li>{itemCards[0].card.info.name}</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
