import { useState } from "react";

// export const [ResObj,setResObj]=useState([
//   {
//     "info": {
//       "id": "102674",
//       "name": "Kays Lovely Food Products",
//       "cloudinaryImageId": "iggtfqalbdkng9rlpnhm",
//       "locality": "Sector 32",
//       "areaName": "Sector 32",
//       "costForTwo": "₹250 for two",
//       "cuisines": [
//         "Indian",
//         "Chinese",
//         "Beverages",
//         "Desserts",
//         "Fast Food"
//       ],
//       "avgRating": 4.3,
//       "parentId": "115980",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "5K+",
//       "promoted": true,
//       "adTrackingId": "cid=12860743~p=0~adgrpid=12860743#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=102674~eid=dee52acb-75bf-4910-a2a4-241f0ab0fbd1~srvts=1714147076362~collid=46756",
//       "sla": {
//         "deliveryTime": 59,
//         "lastMileTravel": 14.4,
//         "serviceability": "SERVICEABLE",
//         "slaString": "55-60 mins",
//         "lastMileTravelString": "14.3 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-26 22:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "v1695133679/badges/Pure_Veg111.png",
//             "description": "pureveg"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textBased": {
            
//           },
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "pureveg",
//                   "imageId": "v1695133679/badges/Pure_Veg111.png"
//                 }
//               }
//             ]
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "20% OFF",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "4.1",
//           "ratingCount": "500+"
//         },
//         "source": "GOOGLE",
//         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=102674",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "653837",
//       "name": "Subway",
//       "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
//       "locality": "Chandigarh Road",
//       "areaName": "Sector 32",
//       "costForTwo": "₹350 for two",
//       "cuisines": [
//         "Salads",
//         "Snacks",
//         "Desserts",
//         "Beverages"
//       ],
//       "avgRating": 3.9,
//       "parentId": "2",
//       "avgRatingString": "3.9",
//       "totalRatingsString": "500+",
//       "sla": {
//         "deliveryTime": 52,
//         "lastMileTravel": 13.9,
//         "serviceability": "SERVICEABLE",
//         "slaString": "50-55 mins",
//         "lastMileTravelString": "13.8 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-27 04:00:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textExtendedBadges": {
            
//           },
//           "textBased": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "50% OFF",
//         "subHeader": "UPTO ₹100"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=653837",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "373112",
//       "name": "La Pino'z Pizza",
//       "cloudinaryImageId": "smqgbypnbivztchftkaa",
//       "locality": "Sector 32 A",
//       "areaName": "Sector 32",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "Pizzas",
//         "Pastas",
//         "Italian",
//         "Desserts",
//         "Beverages"
//       ],
//       "avgRating": 4.3,
//       "parentId": "4961",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "5K+",
//       "sla": {
//         "deliveryTime": 46,
//         "lastMileTravel": 13.7,
//         "serviceability": "SERVICEABLE",
//         "slaString": "45-50 mins",
//         "lastMileTravelString": "13.6 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-26 23:30:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Pizza.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textBased": {
            
//           },
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "imageId": "Rxawards/_CATEGORY-Pizza.png",
//                   "description": "Delivery!"
//                 }
//               }
//             ]
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "50% OFF",
//         "subHeader": "UPTO ₹90"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=373112",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "777204",
//       "name": "Crazy Grill",
//       "cloudinaryImageId": "3c21f18067043ede16390a71e4e3c9c2",
//       "locality": "Chandigarh Road",
//       "areaName": "Samrala Chowk",
//       "costForTwo": "₹200 for two",
//       "cuisines": [
//         "Pizzas",
//         "Pastas",
//         "Waffle",
//         "Burgers",
//         "Fast Food",
//         "Beverages"
//       ],
//       "avgRating": 3.4,
//       "parentId": "17479",
//       "avgRatingString": "3.4",
//       "totalRatingsString": "20+",
//       "promoted": true,
//       "adTrackingId": "cid=12925734~p=1~adgrpid=12925734#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=777204~eid=d8e1409b-255f-4114-8c7e-7aee1de19859~srvts=1714147076362~collid=46756",
//       "sla": {
//         "deliveryTime": 60,
//         "lastMileTravel": 13.9,
//         "serviceability": "SERVICEABLE",
//         "slaString": "60-65 mins",
//         "lastMileTravelString": "13.8 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-27 04:00:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textExtendedBadges": {
            
//           },
//           "textBased": {
            
//           },
//           "imageBased": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "50% OFF",
//         "subHeader": "UPTO ₹100"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=777204",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "289603",
//       "name": "Soya Chhap Shri Umesh Son's",
//       "cloudinaryImageId": "gdkqcnaq0wwqa9hlvyf0",
//       "locality": "Metro road",
//       "areaName": "Sector 32",
//       "costForTwo": "₹250 for two",
//       "cuisines": [
//         "North Indian",
//         "Street Food",
//         "Fast Food"
//       ],
//       "avgRating": 4.5,
//       "veg": true,
//       "parentId": "191667",
//       "avgRatingString": "4.5",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 69,
//         "lastMileTravel": 14.1,
//         "serviceability": "SERVICEABLE",
//         "slaString": "65-70 mins",
//         "lastMileTravelString": "14.1 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-26 22:15:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "v1695133679/badges/Pure_Veg111.png",
//             "description": "pureveg"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "imageId": "v1695133679/badges/Pure_Veg111.png",
//                   "description": "pureveg"
//                 }
//               }
//             ]
//           },
//           "textExtendedBadges": {
            
//           },
//           "textBased": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "₹150 OFF",
//         "subHeader": "ABOVE ₹299",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=289603",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "102680",
//       "name": "Nikku Vegetarian Dhaba",
//       "cloudinaryImageId": "mdfx6bqx34qe468zfbn0",
//       "locality": "Sector 32",
//       "areaName": "Samrala Chowk",
//       "costForTwo": "₹250 for two",
//       "cuisines": [
//         "North Indian",
//         "Chinese",
//         "South Indian",
//         "Snacks",
//         "Pizzas"
//       ],
//       "avgRating": 4.3,
//       "parentId": "148952",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 57,
//         "lastMileTravel": 13.2,
//         "serviceability": "SERVICEABLE",
//         "slaString": "55-60 mins",
//         "lastMileTravelString": "13.1 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-26 23:30:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "v1695133679/badges/Pure_Veg111.png",
//             "description": "pureveg"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textBased": {
            
//           },
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "imageId": "v1695133679/badges/Pure_Veg111.png",
//                   "description": "pureveg"
//                 }
//               }
//             ]
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "₹150 OFF",
//         "subHeader": "ABOVE ₹299",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "3.9",
//           "ratingCount": "500+"
//         },
//         "source": "GOOGLE",
//         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=102680",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "103559",
//       "name": "Basant",
//       "cloudinaryImageId": "lxqfprzy54d8kbnzfklv",
//       "locality": "Sector 32",
//       "areaName": "Sector 32",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "Thalis",
//         "Continental",
//         "Italian",
//         "Ice Cream",
//         "Pastas",
//         "Biryani",
//         "Desserts",
//         "Chinese",
//         "Fast Food"
//       ],
//       "avgRating": 4.1,
//       "parentId": "403556",
//       "avgRatingString": "4.1",
//       "totalRatingsString": "1K+",
//       "promoted": true,
//       "adTrackingId": "cid=12860744~p=2~adgrpid=12860744#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=103559~eid=fa82cd2b-a103-41f2-8344-12a77e485f15~srvts=1714147076362~collid=46756",
//       "sla": {
//         "deliveryTime": 57,
//         "lastMileTravel": 13.7,
//         "serviceability": "SERVICEABLE",
//         "slaString": "55-60 mins",
//         "lastMileTravelString": "13.6 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-26 23:00:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textExtendedBadges": {
            
//           },
//           "textBased": {
            
//           },
//           "imageBased": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "50% OFF",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "4.0",
//           "ratingCount": "500+"
//         },
//         "source": "GOOGLE",
//         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=103559",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "636802",
//       "name": "Bai Ji Malai Chaap Wale",
//       "cloudinaryImageId": "py4nkm0p4nfye8pxovm6",
//       "locality": "Metro road",
//       "areaName": "Sector 32",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "Fast Food",
//         "Seafood",
//         "Chinese"
//       ],
//       "avgRating": 4.4,
//       "veg": true,
//       "parentId": "333971",
//       "avgRatingString": "4.4",
//       "totalRatingsString": "500+",
//       "sla": {
//         "deliveryTime": 53,
//         "lastMileTravel": 14,
//         "serviceability": "SERVICEABLE",
//         "slaString": "50-55 mins",
//         "lastMileTravelString": "14.0 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-26 23:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "v1695133679/badges/Pure_Veg111.png",
//             "description": "pureveg"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textExtendedBadges": {
            
//           },
//           "textBased": {
            
//           },
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "imageId": "v1695133679/badges/Pure_Veg111.png",
//                   "description": "pureveg"
//                 }
//               }
//             ]
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "60% OFF",
//         "subHeader": "UPTO ₹120"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=636802",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "350172",
//       "name": "Rishav Food Point",
//       "cloudinaryImageId": "nse2ochgmakpsw2hv2ld",
//       "locality": "Swatanter Nagar",
//       "areaName": "Samrala Chowk",
//       "costForTwo": "₹250 for two",
//       "cuisines": [
//         "North Indian",
//         "Chinese"
//       ],
//       "avgRating": 4,
//       "veg": true,
//       "parentId": "169705",
//       "avgRatingString": "4.0",
//       "totalRatingsString": "5K+",
//       "sla": {
//         "deliveryTime": 59,
//         "lastMileTravel": 12.3,
//         "serviceability": "SERVICEABLE",
//         "slaString": "55-60 mins",
//         "lastMileTravelString": "12.3 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-26 23:57:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textBased": {
            
//           },
//           "imageBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "60% OFF",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=350172",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "479687",
//       "name": "Rishi Amritsari Naan",
//       "cloudinaryImageId": "fky2wpir4xzinkn9idxg",
//       "locality": "Subhash Nagar",
//       "areaName": "Samrala Chowk",
//       "costForTwo": "₹250 for two",
//       "cuisines": [
//         "Chinese",
//         "Fast Food",
//         "Indian"
//       ],
//       "avgRating": 3.9,
//       "veg": true,
//       "parentId": "169706",
//       "avgRatingString": "3.9",
//       "totalRatingsString": "500+",
//       "promoted": true,
//       "adTrackingId": "cid=12909678~p=4~adgrpid=12909678#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=479687~eid=a0bdcd92-ca4d-4a1a-bcc2-0eed6c3929f9~srvts=1714147076362~collid=46756",
//       "sla": {
//         "deliveryTime": 56,
//         "lastMileTravel": 12.3,
//         "serviceability": "SERVICEABLE",
//         "slaString": "55-60 mins",
//         "lastMileTravelString": "12.3 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-26 23:58:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textExtendedBadges": {
            
//           },
//           "textBased": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "60% OFF",
//         "subHeader": "ABOVE ₹149",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=479687",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "494383",
//       "name": "Parkash Dhaba",
//       "cloudinaryImageId": "ioa2aauzpmekfqcrlrxb",
//       "locality": "Chandigarh Road",
//       "areaName": "Samrala Chowk",
//       "costForTwo": "₹600 for two",
//       "cuisines": [
//         "Mughlai",
//         "North Indian",
//         "Snacks",
//         "Tandoor"
//       ],
//       "avgRating": 4.1,
//       "parentId": "22353",
//       "avgRatingString": "4.1",
//       "totalRatingsString": "100+",
//       "sla": {
//         "deliveryTime": 56,
//         "lastMileTravel": 14.3,
//         "serviceability": "SERVICEABLE",
//         "slaString": "55-60 mins",
//         "lastMileTravelString": "14.3 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-27 00:30:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textExtendedBadges": {
            
//           },
//           "textBased": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "60% OFF",
//         "subHeader": "UPTO ₹120"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=494383",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "619109",
//       "name": "Swad-E-Punjab",
//       "cloudinaryImageId": "avzptksuqeqkfvzuvzta",
//       "locality": "New Gol Market",
//       "areaName": "Sector 32",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "North Indian",
//         "Fast Food"
//       ],
//       "parentId": "7467",
//       "avgRatingString": "--",
//       "sla": {
//         "deliveryTime": 62,
//         "lastMileTravel": 14.4,
//         "serviceability": "SERVICEABLE",
//         "slaString": "60-65 mins",
//         "lastMileTravelString": "14.3 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-26 21:30:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "aggregatedDiscountInfoV2": {
        
//       },
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textExtendedBadges": {
            
//           },
//           "textBased": {
            
//           }
//         }
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "4.8",
//           "ratingCount": "20+"
//         },
//         "source": "GOOGLE",
//         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=619109",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "85877",
//       "name": "Bawa Chicken ( Samrala Chowk)",
//       "cloudinaryImageId": "zcfv6zu8scnmkdx7spze",
//       "locality": "Samrala Chowk",
//       "areaName": "Samrala Chowk",
//       "costForTwo": "₹500 for two",
//       "cuisines": [
//         "Mughlai",
//         "North Indian"
//       ],
//       "avgRating": 4.5,
//       "parentId": "13936",
//       "avgRatingString": "4.5",
//       "totalRatingsString": "1K+",
//       "promoted": true,
//       "adTrackingId": "cid=12910514~p=5~adgrpid=12910514#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=85877~eid=1a960cf6-38b9-4041-94c8-06e631d18e94~srvts=1714147076362~collid=46756",
//       "sla": {
//         "deliveryTime": 55,
//         "lastMileTravel": 14,
//         "serviceability": "SERVICEABLE",
//         "slaString": "50-55 mins",
//         "lastMileTravelString": "14.0 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-26 23:00:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textBased": {
            
//           },
//           "imageBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "₹150 OFF",
//         "subHeader": "ABOVE ₹349",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=85877",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "100799",
//       "name": "Domnik Pizza",
//       "cloudinaryImageId": "ovmtiq8x8i54vb62homi",
//       "locality": "Phase 2",
//       "areaName": "Police Station MotiNagar",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "Pizzas"
//       ],
//       "avgRating": 4.2,
//       "parentId": "22321",
//       "avgRatingString": "4.2",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 56,
//         "lastMileTravel": 13,
//         "serviceability": "SERVICEABLE",
//         "slaString": "55-60 mins",
//         "lastMileTravelString": "13.0 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-26 22:00:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textExtendedBadges": {
            
//           },
//           "textBased": {
            
//           },
//           "imageBased": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "30% OFF",
//         "subHeader": "UPTO ₹150",
//         "discountTag": "SAVE BIG"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=100799",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "745560",
//       "name": "Icy Spicy",
//       "cloudinaryImageId": "ac5e720e85541abe2cc5c10a3745e669",
//       "locality": "Chandigarh Road",
//       "areaName": "Samrala Chowk",
//       "costForTwo": "₹200 for two",
//       "cuisines": [
//         "Burgers"
//       ],
//       "avgRating": 4.4,
//       "veg": true,
//       "parentId": "105800",
//       "avgRatingString": "4.4",
//       "totalRatingsString": "100+",
//       "sla": {
//         "deliveryTime": 58,
//         "lastMileTravel": 12.5,
//         "serviceability": "SERVICEABLE",
//         "slaString": "55-60 mins",
//         "lastMileTravelString": "12.5 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-26 22:00:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textExtendedBadges": {
            
//           },
//           "textBased": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "₹150 OFF",
//         "subHeader": "ABOVE ₹349",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=745560",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "466489",
//       "name": "Rishi Vegeterian Dhaba",
//       "cloudinaryImageId": "hrdlcuitp06mkxfgpwvy",
//       "locality": "Sector 32 A",
//       "areaName": "Samrala Chowk",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "North Indian",
//         "Desserts"
//       ],
//       "avgRating": 4.4,
//       "veg": true,
//       "parentId": "280167",
//       "avgRatingString": "4.4",
//       "totalRatingsString": "100+",
//       "promoted": true,
//       "adTrackingId": "cid=12910505~p=6~adgrpid=12910505#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=466489~eid=ba753f7e-eafd-417c-bdac-5d902b1051e7~srvts=1714147076362~collid=46756",
//       "sla": {
//         "deliveryTime": 55,
//         "lastMileTravel": 13.6,
//         "serviceability": "SERVICEABLE",
//         "slaString": "55-60 mins",
//         "lastMileTravelString": "13.6 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-26 23:30:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textBased": {
            
//           },
//           "imageBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "₹150 OFF",
//         "subHeader": "ABOVE ₹349",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=466489",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "116769",
//       "name": "Snakkers",
//       "cloudinaryImageId": "hobtesgoxxvdfyrggi9f",
//       "locality": "Tibba Road",
//       "areaName": "Samrala Chowk",
//       "costForTwo": "₹150 for two",
//       "cuisines": [
//         "Chinese",
//         "Italian",
//         "Burgers",
//         "Pizzas",
//         "Pastas"
//       ],
//       "avgRating": 4.1,
//       "parentId": "21794",
//       "avgRatingString": "4.1",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 50,
//         "lastMileTravel": 12.9,
//         "serviceability": "SERVICEABLE",
//         "slaString": "50-55 mins",
//         "lastMileTravelString": "12.8 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-26 22:30:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textBased": {
            
//           },
//           "imageBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "50% OFF",
//         "subHeader": "UPTO ₹100"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=116769",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "552843",
//       "name": "Burger Bites",
//       "cloudinaryImageId": "mkbhnckedatnbskvzyuh",
//       "locality": "Shastri nagar",
//       "areaName": "Samrala Chowk",
//       "costForTwo": "₹250 for two",
//       "cuisines": [
//         "Burgers",
//         "Pizzas",
//         "Pastas",
//         "Rolls & Wraps",
//         "Snacks",
//         "Beverages"
//       ],
//       "avgRating": 4.4,
//       "parentId": "7677",
//       "avgRatingString": "4.4",
//       "totalRatingsString": "100+",
//       "sla": {
//         "deliveryTime": 54,
//         "lastMileTravel": 13.9,
//         "serviceability": "SERVICEABLE",
//         "slaString": "50-55 mins",
//         "lastMileTravelString": "13.8 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-26 23:00:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textBased": {
            
//           },
//           "imageBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "50% OFF",
//         "subHeader": "UPTO ₹100"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "4.5",
//           "ratingCount": "20+"
//         },
//         "source": "GOOGLE",
//         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=552843",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "104115",
//       "name": "Hotel Rigal Blu-Spice Roots",
//       "cloudinaryImageId": "apxcvyyy1mrfjt4nnmua",
//       "locality": "Jamalpur Chowk",
//       "areaName": "Sector 32",
//       "costForTwo": "₹500 for two",
//       "cuisines": [
//         "Chinese",
//         "South Indian",
//         "Tandoor",
//         "Fast Food"
//       ],
//       "avgRating": 4.2,
//       "parentId": "101540",
//       "avgRatingString": "4.2",
//       "totalRatingsString": "1K+",
//       "promoted": true,
//       "adTrackingId": "cid=12910518~p=7~adgrpid=12910518#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=104115~eid=086f326d-19a7-4f8f-822b-8258a59c76e1~srvts=1714147076362~collid=46756",
//       "sla": {
//         "deliveryTime": 62,
//         "lastMileTravel": 13.8,
//         "serviceability": "SERVICEABLE",
//         "slaString": "60-65 mins",
//         "lastMileTravelString": "13.8 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-26 23:00:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textExtendedBadges": {
            
//           },
//           "textBased": {
            
//           },
//           "imageBased": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "₹175 OFF",
//         "subHeader": "ABOVE ₹349",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=104115",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "130042",
//       "name": "Moti Mahal Delux",
//       "cloudinaryImageId": "hnhyae7rui8lfl7kvoir",
//       "locality": "Sector 32",
//       "areaName": "Sector 32",
//       "costForTwo": "₹600 for two",
//       "cuisines": [
//         "North Indian",
//         "Chinese",
//         "Biryani",
//         "Thai",
//         "Snacks",
//         "Desserts",
//         "Beverages"
//       ],
//       "avgRating": 4.3,
//       "parentId": "2113",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "100+",
//       "sla": {
//         "deliveryTime": 57,
//         "lastMileTravel": 13.8,
//         "serviceability": "SERVICEABLE",
//         "slaString": "55-60 mins",
//         "lastMileTravelString": "13.8 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-26 23:30:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "newg.png",
//             "description": "Gourmet"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textBased": {
            
//           },
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "imageId": "newg.png",
//                   "description": "Gourmet"
//                 }
//               }
//             ]
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "20% OFF",
//         "subHeader": "UPTO ₹50"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "4.2",
//           "ratingCount": "1K+"
//         },
//         "source": "GOOGLE",
//         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=130042",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "168226",
//       "name": "Arun Food Mania",
//       "cloudinaryImageId": "aaas9wbnysjnytgcnc0e",
//       "locality": "Tajpur Road",
//       "areaName": "Sector 32",
//       "costForTwo": "₹150 for two",
//       "cuisines": [
//         "Chinese",
//         "Pizzas",
//         "Snacks",
//         "Street Food",
//         "Fast Food",
//         "Burgers"
//       ],
//       "avgRating": 4.2,
//       "veg": true,
//       "parentId": "36440",
//       "avgRatingString": "4.2",
//       "totalRatingsString": "100+",
//       "promoted": true,
//       "adTrackingId": "cid=12910205~p=8~adgrpid=12910205#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=168226~eid=8e95e77a-c73d-49a3-ba01-8f1a6ba71308~srvts=1714147076362~collid=46756",
//       "sla": {
//         "deliveryTime": 59,
//         "lastMileTravel": 11.9,
//         "serviceability": "SERVICEABLE",
//         "slaString": "55-60 mins",
//         "lastMileTravelString": "11.8 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-26 22:30:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "v1695133679/badges/Pure_Veg111.png",
//             "description": "pureveg"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textBased": {
            
//           },
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "imageId": "v1695133679/badges/Pure_Veg111.png",
//                   "description": "pureveg"
//                 }
//               }
//             ]
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "₹150 OFF",
//         "subHeader": "ABOVE ₹299",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=168226",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "682739",
//       "name": "Baba Chicken",
//       "cloudinaryImageId": "631386011e89649984170ba09a6dd6fb",
//       "locality": "Gurdev Nagar",
//       "areaName": "Samrala Chowk",
//       "costForTwo": "₹250 for two",
//       "cuisines": [
//         "North Indian",
//         "Biryani",
//         "Chinese",
//         "Beverages"
//       ],
//       "avgRating": 4.3,
//       "parentId": "5285",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "20+",
//       "sla": {
//         "deliveryTime": 57,
//         "lastMileTravel": 12.1,
//         "serviceability": "SERVICEABLE",
//         "slaString": "55-60 mins",
//         "lastMileTravelString": "12.1 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-26 22:30:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textExtendedBadges": {
            
//           },
//           "textBased": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "10% OFF",
//         "subHeader": "UPTO ₹40"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "4.1",
//           "ratingCount": "1K+"
//         },
//         "source": "GOOGLE",
//         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=682739",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "590305",
//       "name": "PizzaExpress",
//       "cloudinaryImageId": "fibwdnm5sa9m1a6ll3qs",
//       "locality": "Tajpur Road",
//       "areaName": "Guru Arjan Dev Nagar",
//       "costForTwo": "₹150 for two",
//       "cuisines": [
//         "Pizzas",
//         "Fast Food"
//       ],
//       "avgRating": 3.9,
//       "veg": true,
//       "parentId": "3531",
//       "avgRatingString": "3.9",
//       "totalRatingsString": "20+",
//       "sla": {
//         "deliveryTime": 58,
//         "lastMileTravel": 11.9,
//         "serviceability": "SERVICEABLE",
//         "slaString": "55-60 mins",
//         "lastMileTravelString": "11.8 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-26 22:30:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "v1695133679/badges/Pure_Veg111.png",
//             "description": "pureveg"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textBased": {
            
//           },
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "pureveg",
//                   "imageId": "v1695133679/badges/Pure_Veg111.png"
//                 }
//               }
//             ]
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "₹125 OFF",
//         "subHeader": "ABOVE ₹249",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=590305",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "101805",
//       "name": "Chawlas 2",
//       "cloudinaryImageId": "sf7kyuepsukr1yfkg4ow",
//       "locality": "Phase 2",
//       "areaName": "Sector 32",
//       "costForTwo": "₹350 for two",
//       "cuisines": [
//         "North Indian",
//         "Mughlai",
//         "Chinese"
//       ],
//       "avgRating": 4.1,
//       "parentId": "13653",
//       "avgRatingString": "4.1",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 52,
//         "lastMileTravel": 13.6,
//         "serviceability": "SERVICEABLE",
//         "slaString": "50-55 mins",
//         "lastMileTravelString": "13.6 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-26 23:00:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textBased": {
            
//           },
//           "imageBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "₹150 OFF",
//         "subHeader": "ABOVE ₹349",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=101805",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "476959",
//       "name": "Barista Coffee",
//       "cloudinaryImageId": "b64bf721e12e7b3df82c832898999c51",
//       "locality": "Chandigarh Road",
//       "areaName": "Sector 32",
//       "costForTwo": "₹500 for two",
//       "cuisines": [
//         "Beverages",
//         "Fast Food",
//         "Desserts"
//       ],
//       "avgRating": 3.2,
//       "parentId": "416281",
//       "avgRatingString": "3.2",
//       "totalRatingsString": "20+",
//       "sla": {
//         "deliveryTime": 54,
//         "lastMileTravel": 13.7,
//         "serviceability": "SERVICEABLE",
//         "slaString": "50-55 mins",
//         "lastMileTravelString": "13.6 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-26 22:00:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textBased": {
            
//           },
//           "imageBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "50% OFF",
//         "subHeader": "UPTO ₹90"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=476959",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   }
// ])
const allResObj=[
  {
    "info": {
      "id": "102674",
      "name": "Kays Lovely Food Products",
      "cloudinaryImageId": "iggtfqalbdkng9rlpnhm",
      "locality": "Sector 32",
      "areaName": "Sector 32",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Indian",
        "Chinese",
        "Beverages",
        "Desserts",
        "Fast Food"
      ],
      "avgRating": 4.3,
      "parentId": "115980",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "promoted": true,
      "adTrackingId": "cid=12860743~p=0~adgrpid=12860743#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=102674~eid=dee52acb-75bf-4910-a2a4-241f0ab0fbd1~srvts=1714147076362~collid=46756",
      "sla": {
        "deliveryTime": 59,
        "lastMileTravel": 14.4,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "14.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-26 22:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.1",
          "ratingCount": "500+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=102674",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "653837",
      "name": "Subway",
      "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
      "locality": "Chandigarh Road",
      "areaName": "Sector 32",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 3.9,
      "parentId": "2",
      "avgRatingString": "3.9",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 52,
        "lastMileTravel": 13.9,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "13.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-27 04:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=653837",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "373112",
      "name": "La Pino'z Pizza",
      "cloudinaryImageId": "smqgbypnbivztchftkaa",
      "locality": "Sector 32 A",
      "areaName": "Sector 32",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "4961",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 46,
        "lastMileTravel": 13.7,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "13.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-26 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "Rxawards/_CATEGORY-Pizza.png",
                  "description": "Delivery!"
                }
              }
            ]
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹90"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=373112",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "777204",
      "name": "Crazy Grill",
      "cloudinaryImageId": "3c21f18067043ede16390a71e4e3c9c2",
      "locality": "Chandigarh Road",
      "areaName": "Samrala Chowk",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Waffle",
        "Burgers",
        "Fast Food",
        "Beverages"
      ],
      "avgRating": 3.4,
      "parentId": "17479",
      "avgRatingString": "3.4",
      "totalRatingsString": "20+",
      "promoted": true,
      "adTrackingId": "cid=12925734~p=1~adgrpid=12925734#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=777204~eid=d8e1409b-255f-4114-8c7e-7aee1de19859~srvts=1714147076362~collid=46756",
      "sla": {
        "deliveryTime": 60,
        "lastMileTravel": 13.9,
        "serviceability": "SERVICEABLE",
        "slaString": "60-65 mins",
        "lastMileTravelString": "13.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-27 04:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          },
          "imageBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=777204",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "289603",
      "name": "Soya Chhap Shri Umesh Son's",
      "cloudinaryImageId": "gdkqcnaq0wwqa9hlvyf0",
      "locality": "Metro road",
      "areaName": "Sector 32",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "Street Food",
        "Fast Food"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "191667",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 69,
        "lastMileTravel": 14.1,
        "serviceability": "SERVICEABLE",
        "slaString": "65-70 mins",
        "lastMileTravelString": "14.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-26 22:15:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              }
            ]
          },
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=289603",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "102680",
      "name": "Nikku Vegetarian Dhaba",
      "cloudinaryImageId": "mdfx6bqx34qe468zfbn0",
      "locality": "Sector 32",
      "areaName": "Samrala Chowk",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "South Indian",
        "Snacks",
        "Pizzas"
      ],
      "avgRating": 4.3,
      "parentId": "148952",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 57,
        "lastMileTravel": 13.2,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "13.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-26 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              }
            ]
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "3.9",
          "ratingCount": "500+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=102680",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "103559",
      "name": "Basant",
      "cloudinaryImageId": "lxqfprzy54d8kbnzfklv",
      "locality": "Sector 32",
      "areaName": "Sector 32",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Thalis",
        "Continental",
        "Italian",
        "Ice Cream",
        "Pastas",
        "Biryani",
        "Desserts",
        "Chinese",
        "Fast Food"
      ],
      "avgRating": 4.1,
      "parentId": "403556",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "promoted": true,
      "adTrackingId": "cid=12860744~p=2~adgrpid=12860744#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=103559~eid=fa82cd2b-a103-41f2-8344-12a77e485f15~srvts=1714147076362~collid=46756",
      "sla": {
        "deliveryTime": 57,
        "lastMileTravel": 13.7,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "13.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-26 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          },
          "imageBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.0",
          "ratingCount": "500+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=103559",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "636802",
      "name": "Bai Ji Malai Chaap Wale",
      "cloudinaryImageId": "py4nkm0p4nfye8pxovm6",
      "locality": "Metro road",
      "areaName": "Sector 32",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Fast Food",
        "Seafood",
        "Chinese"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "333971",
      "avgRatingString": "4.4",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 53,
        "lastMileTravel": 14,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "14.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-26 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=636802",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "350172",
      "name": "Rishav Food Point",
      "cloudinaryImageId": "nse2ochgmakpsw2hv2ld",
      "locality": "Swatanter Nagar",
      "areaName": "Samrala Chowk",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "Chinese"
      ],
      "avgRating": 4,
      "veg": true,
      "parentId": "169705",
      "avgRatingString": "4.0",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 59,
        "lastMileTravel": 12.3,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "12.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-26 23:57:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=350172",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "479687",
      "name": "Rishi Amritsari Naan",
      "cloudinaryImageId": "fky2wpir4xzinkn9idxg",
      "locality": "Subhash Nagar",
      "areaName": "Samrala Chowk",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "Fast Food",
        "Indian"
      ],
      "avgRating": 3.9,
      "veg": true,
      "parentId": "169706",
      "avgRatingString": "3.9",
      "totalRatingsString": "500+",
      "promoted": true,
      "adTrackingId": "cid=12909678~p=4~adgrpid=12909678#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=479687~eid=a0bdcd92-ca4d-4a1a-bcc2-0eed6c3929f9~srvts=1714147076362~collid=46756",
      "sla": {
        "deliveryTime": 56,
        "lastMileTravel": 12.3,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "12.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-26 23:58:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "ABOVE ₹149",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=479687",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "494383",
      "name": "Parkash Dhaba",
      "cloudinaryImageId": "ioa2aauzpmekfqcrlrxb",
      "locality": "Chandigarh Road",
      "areaName": "Samrala Chowk",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Mughlai",
        "North Indian",
        "Snacks",
        "Tandoor"
      ],
      "avgRating": 4.1,
      "parentId": "22353",
      "avgRatingString": "4.1",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 56,
        "lastMileTravel": 14.3,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "14.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-27 00:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=494383",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "619109",
      "name": "Swad-E-Punjab",
      "cloudinaryImageId": "avzptksuqeqkfvzuvzta",
      "locality": "New Gol Market",
      "areaName": "Sector 32",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "Fast Food"
      ],
      "parentId": "7467",
      "avgRatingString": "--",
      "sla": {
        "deliveryTime": 62,
        "lastMileTravel": 14.4,
        "serviceability": "SERVICEABLE",
        "slaString": "60-65 mins",
        "lastMileTravelString": "14.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-26 21:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.8",
          "ratingCount": "20+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=619109",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "85877",
      "name": "Bawa Chicken ( Samrala Chowk)",
      "cloudinaryImageId": "zcfv6zu8scnmkdx7spze",
      "locality": "Samrala Chowk",
      "areaName": "Samrala Chowk",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Mughlai",
        "North Indian"
      ],
      "avgRating": 4.5,
      "parentId": "13936",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "promoted": true,
      "adTrackingId": "cid=12910514~p=5~adgrpid=12910514#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=85877~eid=1a960cf6-38b9-4041-94c8-06e631d18e94~srvts=1714147076362~collid=46756",
      "sla": {
        "deliveryTime": 55,
        "lastMileTravel": 14,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "14.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-26 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹349",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=85877",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "100799",
      "name": "Domnik Pizza",
      "cloudinaryImageId": "ovmtiq8x8i54vb62homi",
      "locality": "Phase 2",
      "areaName": "Police Station MotiNagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4.2,
      "parentId": "22321",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 56,
        "lastMileTravel": 13,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "13.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-26 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          },
          "imageBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹150",
        "discountTag": "SAVE BIG"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=100799",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "745560",
      "name": "Icy Spicy",
      "cloudinaryImageId": "ac5e720e85541abe2cc5c10a3745e669",
      "locality": "Chandigarh Road",
      "areaName": "Samrala Chowk",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Burgers"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "105800",
      "avgRatingString": "4.4",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 58,
        "lastMileTravel": 12.5,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "12.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-26 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹349",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=745560",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "466489",
      "name": "Rishi Vegeterian Dhaba",
      "cloudinaryImageId": "hrdlcuitp06mkxfgpwvy",
      "locality": "Sector 32 A",
      "areaName": "Samrala Chowk",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "North Indian",
        "Desserts"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "280167",
      "avgRatingString": "4.4",
      "totalRatingsString": "100+",
      "promoted": true,
      "adTrackingId": "cid=12910505~p=6~adgrpid=12910505#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=466489~eid=ba753f7e-eafd-417c-bdac-5d902b1051e7~srvts=1714147076362~collid=46756",
      "sla": {
        "deliveryTime": 55,
        "lastMileTravel": 13.6,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "13.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-26 23:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹349",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=466489",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "116769",
      "name": "Snakkers",
      "cloudinaryImageId": "hobtesgoxxvdfyrggi9f",
      "locality": "Tibba Road",
      "areaName": "Samrala Chowk",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Chinese",
        "Italian",
        "Burgers",
        "Pizzas",
        "Pastas"
      ],
      "avgRating": 4.1,
      "parentId": "21794",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 50,
        "lastMileTravel": 12.9,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "12.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-26 22:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=116769",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "552843",
      "name": "Burger Bites",
      "cloudinaryImageId": "mkbhnckedatnbskvzyuh",
      "locality": "Shastri nagar",
      "areaName": "Samrala Chowk",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Burgers",
        "Pizzas",
        "Pastas",
        "Rolls & Wraps",
        "Snacks",
        "Beverages"
      ],
      "avgRating": 4.4,
      "parentId": "7677",
      "avgRatingString": "4.4",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 54,
        "lastMileTravel": 13.9,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "13.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-26 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.5",
          "ratingCount": "20+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=552843",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "104115",
      "name": "Hotel Rigal Blu-Spice Roots",
      "cloudinaryImageId": "apxcvyyy1mrfjt4nnmua",
      "locality": "Jamalpur Chowk",
      "areaName": "Sector 32",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Chinese",
        "South Indian",
        "Tandoor",
        "Fast Food"
      ],
      "avgRating": 4.2,
      "parentId": "101540",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "promoted": true,
      "adTrackingId": "cid=12910518~p=7~adgrpid=12910518#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=104115~eid=086f326d-19a7-4f8f-822b-8258a59c76e1~srvts=1714147076362~collid=46756",
      "sla": {
        "deliveryTime": 62,
        "lastMileTravel": 13.8,
        "serviceability": "SERVICEABLE",
        "slaString": "60-65 mins",
        "lastMileTravelString": "13.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-26 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          },
          "imageBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹175 OFF",
        "subHeader": "ABOVE ₹349",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=104115",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "130042",
      "name": "Moti Mahal Delux",
      "cloudinaryImageId": "hnhyae7rui8lfl7kvoir",
      "locality": "Sector 32",
      "areaName": "Sector 32",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Biryani",
        "Thai",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "2113",
      "avgRatingString": "4.3",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 57,
        "lastMileTravel": 13.8,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "13.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-26 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              }
            ]
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.2",
          "ratingCount": "1K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=130042",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "168226",
      "name": "Arun Food Mania",
      "cloudinaryImageId": "aaas9wbnysjnytgcnc0e",
      "locality": "Tajpur Road",
      "areaName": "Sector 32",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Chinese",
        "Pizzas",
        "Snacks",
        "Street Food",
        "Fast Food",
        "Burgers"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "36440",
      "avgRatingString": "4.2",
      "totalRatingsString": "100+",
      "promoted": true,
      "adTrackingId": "cid=12910205~p=8~adgrpid=12910205#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=168226~eid=8e95e77a-c73d-49a3-ba01-8f1a6ba71308~srvts=1714147076362~collid=46756",
      "sla": {
        "deliveryTime": 59,
        "lastMileTravel": 11.9,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "11.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-26 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              }
            ]
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=168226",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "682739",
      "name": "Baba Chicken",
      "cloudinaryImageId": "631386011e89649984170ba09a6dd6fb",
      "locality": "Gurdev Nagar",
      "areaName": "Samrala Chowk",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "Biryani",
        "Chinese",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "5285",
      "avgRatingString": "4.3",
      "totalRatingsString": "20+",
      "sla": {
        "deliveryTime": 57,
        "lastMileTravel": 12.1,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "12.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-26 22:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.1",
          "ratingCount": "1K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=682739",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "590305",
      "name": "PizzaExpress",
      "cloudinaryImageId": "fibwdnm5sa9m1a6ll3qs",
      "locality": "Tajpur Road",
      "areaName": "Guru Arjan Dev Nagar",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Pizzas",
        "Fast Food"
      ],
      "avgRating": 3.9,
      "veg": true,
      "parentId": "3531",
      "avgRatingString": "3.9",
      "totalRatingsString": "20+",
      "sla": {
        "deliveryTime": 58,
        "lastMileTravel": 11.9,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "11.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-26 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=590305",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "101805",
      "name": "Chawlas 2",
      "cloudinaryImageId": "sf7kyuepsukr1yfkg4ow",
      "locality": "Phase 2",
      "areaName": "Sector 32",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "North Indian",
        "Mughlai",
        "Chinese"
      ],
      "avgRating": 4.1,
      "parentId": "13653",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 52,
        "lastMileTravel": 13.6,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "13.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-26 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹349",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=101805",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "476959",
      "name": "Barista Coffee",
      "cloudinaryImageId": "b64bf721e12e7b3df82c832898999c51",
      "locality": "Chandigarh Road",
      "areaName": "Sector 32",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Beverages",
        "Fast Food",
        "Desserts"
      ],
      "avgRating": 3.2,
      "parentId": "416281",
      "avgRatingString": "3.2",
      "totalRatingsString": "20+",
      "sla": {
        "deliveryTime": 54,
        "lastMileTravel": 13.7,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "13.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-26 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹90"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=476959",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  }
]
 export default allResObj;