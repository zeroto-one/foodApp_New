import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../../utils/constants";

const Cards = (props) => {
    const { resData } = props;

    return (
        <div className="bg-white  rounded-3xl p-2 w-60 h-auto m-4 transform transition-transform duration-300 ease-in-out hover:scale-95 relative">
            <div className="relative overflow-hidden rounded-xl h-36">
                <img
                    className="w-full h-full object-cover rounded-xl"
                    src={CDN_URL + resData.info.cloudinaryImageId}
                    alt="image of food"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl"></div>
                {resData.info.veg ? (
                    <div className="absolute top-2 right-2 flex items-center justify-center">
                        <div className="w-8 h-7 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                            Veg
                        </div>
                    </div>
                ) : (
                    <div className="absolute top-2 right-2 flex space-x-1">
                        
                    </div>
                )}
            </div>
            <h4 className="text-ellipsis overflow-hidden mt-1 font-bold text-sm whitespace-nowrap">
                {resData.info.name}
            </h4>
            <h4 className="overflow-hidden text-ellipsis whitespace-nowrap mt-1 text-xs">
                {resData.info.cuisines.join(", ")}
            </h4>
            <h4 className="text-ellipsis overflow-hidden mt-1 text-xs">
                {resData.info.costForTwo}
            </h4>
            <h5 className="overflow-hidden mt-1 text-xs">
                <b>Rating: </b>{resData.info.avgRating}
            </h5>
        </div>
    );
};

export default Cards;
