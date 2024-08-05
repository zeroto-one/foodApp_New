import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Cards from "./Cards";
import allResObj from "../../utils/mockdata";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

export const Body = () => {
  const [resObj, setResObj] = useState(allResObj);
  const [filteredObj, setFilteredObj] = useState(allResObj);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    const apiData=json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setResObj(apiData);
    setFilteredObj(apiData);
  };
  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false)return (<div><h1>You are offline , Check your Internet </h1></div>);
  if (resObj.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      {/* top rated restaurants */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = filteredObj.filter((x) => x.info.avgRating <4);
            console.log("filterd data",filtered);
            setFilteredObj(filtered);
          }}
        >
          Top rated Restaurants
        </button>
        <input
          className="search-box"
          type="text"
          value={searchData}
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const newObj = resObj.filter((i) =>
              i.info.name.toLowerCase().includes(searchData.toLowerCase())
            );
            setFilteredObj(newObj);
            console.log(searchData);
          }}
        >
          Search
        </button>
      </div>
      <div className="cardcontainer">
        {filteredObj.map((i) => (
          <Link key={i.info.id} to= {"/restaurant/"+i.info.id} ><Cards  resData={i} /></Link>
          //<Cards key={i.info.id} resData={i} />
        ))}
      </div>
    </div>
  );
};

export default Body;
