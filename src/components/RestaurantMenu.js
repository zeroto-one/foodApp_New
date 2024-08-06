import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { CDN_URL } from "../../utils/constants"; // Ensure this is correctly imported

const RestaurantMenu = () => {
  const { resId } = useParams();
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <div><h1>You are offline, Check your Internet</h1></div>;

  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;

  const { name, city, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

  // Extracting item cards from the menu
  const groupedCardMap = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const allItemCards = groupedCardMap.flatMap(card =>
    card.card?.card?.itemCards || []
  );

  return (
    <div className="menu p-4">
      <h1 className="text-3xl font-bold mb-2">{name}</h1>
      <h2 className="text-xl mb-2">{city}</h2>
      <h3 className="text-lg mb-4">{costForTwoMessage}</h3>

      <h2 className="text-xl font-semibold mb-2">Menu</h2>
      {allItemCards.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {allItemCards.map((item) => (
            <div key={item.card.info.id} className="border rounded-lg overflow-hidden shadow-md">
              {item.card.info.cloudinaryImageId && (
                <img
                  className="w-full h-48 object-cover"
                  src={`${CDN_URL}${item.card.info.cloudinaryImageId}`}
                  alt={item.card.info.name}
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.card.info.name}</h3>
                {item.card.info.price ? (
                  <p className="text-sm text-gray-600">₹{item.card.info.price / 100}</p>
                ) : (
                  <p className="text-sm text-gray-600">Price not available</p>
                )}
                <p className="text-sm text-gray-500">{item.card.info.description || 'No description available'}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No items available.</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
