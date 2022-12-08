export const filterData = [
  {
    name: "Start a Carpool",
    image: require("../assets/images/icon-pickup.png"),
    id: "0",
  },
  {
    name: "Join a Carpool",
    image: require("../assets/images/icon-carpool.png"),
    id: "1",
  },
  {
    name: "Scheduled Rides",
    image: require("../assets/images/icon-calendar.png"),
    id: "2",
  },
  {
    name: "Subscribed Rides",
    image: require("../assets/images/icon-favorites.png"),
    id: "3",
  },
  {
    name: "View Profile",
    image: require("../assets/images/icon-account.png"),
    id: "4",
  },
  {
    name: "Settings",
    image: require("../assets/images/icon-settings.png"),
    id: "5",
  },
];

export const rideData = [
  { street: "701 London Street", area: "San Francisco, CA", id: "0" },
  { street: "415 Mission Street", area: "San Francisco, CA 94105", id: "1" },
  { street: "701 London Street", area: "San Francisco, CA 94112 ", id: "2" },
  { street: "424 Jones Street", area: "San Francisco, CA 94102", id: "3" },
  { street: "55 Taylor Street", area: "San Francisco, CA 94102", id: "4" },
];

export const carTypeData = [
  {
    title: "Start a Carpool",
    data: [
      {
        name: "Start A Carpool",
        group: 2,
        price: 7,
        image: require("../assets/images/icon-pickup.png"),
        note: "Enter your itinerary and get matched with other riders",
        promotion: 5,
        time: "20:19",
        id: "0",
      }
    ],
  },

  {
    title: "Join A Carpool",
    data: [
      {
        name: "Join A Carpool",
        group: 3,
        price: 17.4,
        image: require("../assets/images/icon-carpool.png"),
        note: "Find a carpool near you and join the ride",
        promotion: 0,
        time: "20:31",
        id: "3",
      },
     
    ],
  }
];

export const requestData = [
  {
    name: "For Me",
    id: 0,
  },
  {
    name: "For Someone",
    id: 1,
  },
];

export const rideOptions = [
  { name: "Personal", icon: "account", id: "0" },
  { name: "Business", icon: "briefcase", id: "1" },
];

export const paymentOptions = [
  {
    image: require("../assets/images/icon-creditcards.png"),
    text: "Visa ...0476",
  },
  { image: require("../assets/images/icon-cash.png"), text: "Cash" },
];

export const availableServices = ["Start a Carpool", "Join a Carpool"];

export const carsAround = [
  { index: "0", latitude: 37.781504, longitude: -122.4114176 },
  { index: "1", latitude: 37.7179141, longitude: -122.4408362 },
  { index: "2", latitude: 37.7900621, longitude: -122.3991231 },
  { index: "3", latitude: 37.7877451, longitude: -122.3967486 },
  { index: "4", latitude: 37.7877398, longitude: -122.932488 },
];
