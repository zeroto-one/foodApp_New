import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../../utils/useOnlineStatus";

const cuisineOptions = [
  { name: "Italian" },
  { name: "Chinese" },
  { name: "Indian" },
  { name: "Mexican" },
  { name: "Thai" },
  { name: "Japanese" },
  { name: "American" },
  { name: "French" },
  { name: "Spanish" },
  { name: "Mediterranean" },
  { name: "Greek" },
  { name: "Turkish" },
  { name: "Korean" },
  { name: "Vietnamese" },
  { name: "Brazilian" },
];

export const Body = () => {
  const [resObj, setResObj] = useState([]);
  const [filteredObj, setFilteredObj] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [vegFilter, setVegFilter] = useState(false);
  const [locationFilter, setLocationFilter] = useState("");
  const [distanceFilter, setDistanceFilter] = useState(0);
  const [priceFilter, setPriceFilter] = useState(0);
  const [cuisineFilter, setCuisineFilter] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadedRestaurantIds, setLoadedRestaurantIds] = useState(new Set());

  useEffect(() => {
    fetchData(page);
  }, [page]);

  useEffect(() => {
    applyFilters();
  }, [searchData, ratingFilter, vegFilter, locationFilter, distanceFilter, priceFilter, cuisineFilter]);

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING&page=${page}`
      );
      const json = await response.json();
      const apiData = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

      // Filter out already loaded restaurants
      const newRestaurants = apiData.filter(restaurant => !loadedRestaurantIds.has(restaurant.info.id));

      setResObj(prev => [...prev, ...newRestaurants]);
      setFilteredObj(prev => [...prev, ...newRestaurants]);
      setLoadedRestaurantIds(prev => new Set([...prev, ...newRestaurants.map(r => r.info.id)]));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <div><h1>You are offline, Check your Internet</h1></div>;

  const applyFilters = () => {
    let filtered = resObj;

    if (searchData) {
      filtered = filtered.filter((x) =>
        x.info.name.toLowerCase().includes(searchData.toLowerCase())
      );
    }
    if (ratingFilter) {
      filtered = filtered.filter((x) => x.info.avgRating >= ratingFilter);
    }
    if (vegFilter) {
      filtered = filtered.filter((x) => x.info.veg === true);
    }
    if (locationFilter) {
      filtered = filtered.filter((x) =>
        x.info.locality.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }
    if (distanceFilter) {
      filtered = filtered.filter((x) => x.info.sla.lastMileTravel <= parseFloat(distanceFilter));
    }
    if (priceFilter) {
      filtered = filtered.filter((x) => {
        const cost = parseInt(x.info.costForTwo.replace(/[^0-9]/g, ''), 10);
        return cost <= priceFilter;
      });
    }
    if (cuisineFilter) {
      filtered = filtered.filter((x) =>
        x.info.cuisines.some(cuisine => cuisine.toLowerCase().includes(cuisineFilter.toLowerCase()))
      );
    }

    setFilteredObj(filtered);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  if (resObj.length === 0 && !loading) {
    return <Shimmer />;
  }

  return (
    <div className="flex p-4 gap-4">
      {/* Sidebar for Filters */}
      <div className="w-64 bg-gray-100 p-4 rounded-lg shadow-lg sticky top-0 self-start">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        {/* Rating Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Rating: {ratingFilter} and above</label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Veg Filter */}
        <div className="mb-4">
          <button
            className={`w-full px-3 py-2 rounded-lg transition-transform transform hover:scale-105 focus:outline-none ${vegFilter ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'}`}
            onClick={() => setVegFilter(!vegFilter)}
          >
            {vegFilter ? 'Only Vegetarian' : 'All'}
          </button>
        </div>

        {/* Location Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Locality:</label>
          <input
            className="w-full border border-gray-300 px-3 py-2 rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
            type="text"
            placeholder="Enter Locality"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          />
        </div>

        {/* Distance Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Max Distance (km): {distanceFilter}</label>
          <input
            type="range"
            min="0"
            max="20"
            step="0.5"
            value={distanceFilter}
            onChange={(e) => setDistanceFilter(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Price Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Max Price (₹): {priceFilter}</label>
          <input
            type="range"
            min="0"
            max="5000"
            step="50"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Search Bar */}
        <div className="mb-4 flex justify-center">
          <input
            className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
            type="text"
            placeholder="Search Restaurants"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
        </div>

        {/* Section Title */}
        <h2 className="text-xl font-semibold mb-4">What's in Your Mind?</h2>

        {/* Cuisines List */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
          {cuisineOptions.map((cuisine) => (
            <button
              key={cuisine.name}
              className="cuisine-option p-2 border rounded-lg shadow-md hover:bg-green-100 transition-colors"
              onClick={() => setCuisineFilter(cuisine.name)}
            >
              <h3 className="text-center font-semibold">{cuisine.name}</h3>
            </button>
          ))}
        </div>

        {/* Restaurants List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredObj.map((i) => (
            <Link key={i.info.id} to={"/restaurant/" + i.info.id} className="m-2">
              <Cards resData={i} />
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg transition-transform transform hover:scale-105 focus:outline-none"
            onClick={loadMore}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
